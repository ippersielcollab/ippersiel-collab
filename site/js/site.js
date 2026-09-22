(function () {
  'use strict';

  var ENDPOINT_FORMULAIRE = 'https://api.web3forms.com/submit';
  var mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var entete = document.getElementById('entete');
  var progression = document.getElementById('progression');
  var tic = false;
  var mediaMouvement = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mediaScene = window.matchMedia('(min-width: 75rem) and (min-height: 46rem)');
  var expertise = document.getElementById('expertise');
  var chapitres = Array.prototype.slice.call(document.querySelectorAll('.expertise__chapitre'));

  function borner(valeur, minimum, maximum) {
    return Math.max(minimum, Math.min(maximum, valeur));
  }

  // Des plateaux de lecture réversibles, séparés par deux passages courts.
  function parcoursExpertise(p) {
    function adoucir(t) { return t * t * (3 - 2 * t); }
    if (p < .25) { return 0; }
    if (p < .36) { return adoucir((p - .25) / .11); }
    if (p < .62) { return 1; }
    if (p < .73) { return 1 + adoucir((p - .62) / .11); }
    return 2;
  }

  function configurerScenes() {
    mouvementReduit = mediaMouvement.matches;
    document.body.classList.toggle('scenes-actives', mediaScene.matches && !mouvementReduit);
    if (mouvementReduit || window.innerHeight < 500) {
      document.querySelectorAll('[data-counter]').forEach(function (element) {
        afficherCompteur(element, Number(element.dataset.counter));
        element.closest('.preuve').classList.add('est-compteur-visible');
      });
    }
    programmerDefilement();
  }

  function mettreAJourScenes() {
    if (!expertise || !document.body.classList.contains('scenes-actives')) { return; }
    var rectangle = expertise.getBoundingClientRect();
    var p = borner(-rectangle.top / Math.max(1, rectangle.height - window.innerHeight), 0, 1);
    var position = parcoursExpertise(p);
    expertise.style.setProperty('--p', p.toFixed(4));
    chapitres.forEach(function (chapitre, index) {
      chapitre.style.setProperty('--panel-y', ((index - position) * 100).toFixed(3) + '%');
    });
  }

  function mesurer(nom, details) {
    if (typeof window.plausible === 'function') {
      window.plausible(nom, details ? { props: details } : undefined);
    }
  }

  document.addEventListener('click', function (evenement) {
    var cible = evenement.target.closest ? evenement.target.closest('[data-mesure]') : null;
    if (cible) { mesurer(cible.getAttribute('data-mesure')); }
  });

  function mettreAJourDefilement() {
    var y = window.scrollY || window.pageYOffset;
    var hauteur = document.documentElement.scrollHeight - window.innerHeight;
    if (!entete) { tic = false; return; }
    entete.classList.toggle('est-defile', y > 24);
    if (progression) { progression.style.setProperty('--lecture', hauteur > 0 ? borner(y / hauteur, 0, 1) : 0); }

    /* Le thème suit toujours la section réellement placée sous l’en-tête,
       y compris après un saut d’ancre ou un redimensionnement. */
    if (sectionsThemes) {
      var ligneTheme = entete.getBoundingClientRect().height + 24;
      sectionsThemes.forEach(function (section) {
        var rectangleTheme = section.getBoundingClientRect();
        if (rectangleTheme.top <= ligneTheme && rectangleTheme.bottom > ligneTheme) {
          entete.setAttribute('data-theme', section.getAttribute('data-header-theme'));
        }
      });
      var contactCourant = document.getElementById('contact');
      var surContact = contactCourant && contactCourant.getBoundingClientRect().top <= ligneTheme;
      entete.classList.toggle('est-sur-contact', Boolean(surContact));
      var ancreActive = null;
      liensMenu.forEach(function (lien) {
        var section = document.getElementById(lien.getAttribute('data-ancre'));
        if (section && section.getBoundingClientRect().top <= ligneTheme) { ancreActive = lien; }
      });
      liensMenu.forEach(function (lien) {
        if (lien === ancreActive && !surContact) { lien.setAttribute('aria-current', 'true'); }
        else { lien.removeAttribute('aria-current'); }
      });
    }

    mettreAJourScenes();
    tic = false;
  }

  function programmerDefilement() {
    if (!tic) { tic = true; window.requestAnimationFrame(mettreAJourDefilement); }
  }
  window.addEventListener('scroll', programmerDefilement, { passive: true });
  window.addEventListener('resize', configurerScenes, { passive: true });
  mediaMouvement.addEventListener('change', configurerScenes);
  mediaScene.addEventListener('change', configurerScenes);
  var sectionsThemes = Array.prototype.slice.call(document.querySelectorAll('[data-header-theme]'));

  var liensMenu = Array.prototype.slice.call(document.querySelectorAll('.menu a[data-ancre]'));
  var bascule = document.getElementById('bascule-menu');
  var menuMobile = document.getElementById('menu-mobile');
  var texteBascule = bascule.querySelector('.bascule-menu__texte');
  var fermetureMenu;
  var contenuPrincipal = document.getElementById('contenu');
  var pied = document.querySelector('footer');

  function fermerMenu(rendreFocus) {
    menuMobile.classList.remove('est-ouvert');
    document.body.classList.remove('menu-est-ouvert');
    bascule.setAttribute('aria-expanded', 'false');
    bascule.setAttribute('aria-label', 'Ouvrir le menu');
    texteBascule.textContent = texteBascule.getAttribute('data-ferme');
    document.body.style.overflow = '';
    contenuPrincipal.inert = false;
    if (pied) { pied.inert = false; }
    window.clearTimeout(fermetureMenu);
    fermetureMenu = window.setTimeout(function () { menuMobile.hidden = true; }, mouvementReduit ? 0 : 180);
    if (rendreFocus) { bascule.focus(); }
  }

  function ouvrirMenu() {
    window.clearTimeout(fermetureMenu);
    menuMobile.hidden = false;
    contenuPrincipal.inert = true;
    if (pied) { pied.inert = true; }
    document.body.classList.add('menu-est-ouvert');
    window.requestAnimationFrame(function () { menuMobile.classList.add('est-ouvert'); });
    bascule.setAttribute('aria-expanded', 'true');
    bascule.setAttribute('aria-label', 'Fermer le menu');
    texteBascule.textContent = texteBascule.getAttribute('data-ouvert');
    document.body.style.overflow = 'hidden';
    var premierLien = menuMobile.querySelector('a');
    if (premierLien) { premierLien.focus(); }
  }

  bascule.addEventListener('click', function () {
    if (bascule.getAttribute('aria-expanded') === 'true') { fermerMenu(false); } else { ouvrirMenu(); }
  });
  menuMobile.addEventListener('click', function (evenement) {
    var lien = evenement.target.closest('a');
    if (!lien) { return; }
    fermerMenu(false);
    var id = lien.getAttribute('href');
    var destination = id && id.charAt(0) === '#' ? document.getElementById(id.slice(1)) : null;
    if (destination) {
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
    }
  });
  document.addEventListener('keydown', function (evenement) {
    if (bascule.getAttribute('aria-expanded') !== 'true') { return; }
    if (evenement.key === 'Escape') { fermerMenu(true); return; }
    if (evenement.key === 'Tab') {
      var focusablesMenu = [bascule].concat(Array.prototype.slice.call(menuMobile.querySelectorAll('a')));
      var indexFocus = focusablesMenu.indexOf(document.activeElement);
      if (evenement.shiftKey && indexFocus === 0) {
        evenement.preventDefault(); focusablesMenu[focusablesMenu.length - 1].focus();
      } else if (!evenement.shiftKey && indexFocus === focusablesMenu.length - 1) {
        evenement.preventDefault(); bascule.focus();
      }
    }
  });
  window.addEventListener('resize', function () { if (window.innerWidth >= 992 && bascule.getAttribute('aria-expanded') === 'true') { fermerMenu(false); } });

  var aReveler = Array.prototype.slice.call(document.querySelectorAll('[data-reveal], [data-reveal-group], .expansion-sarcelle, [data-transition-apropos], [data-portrait]'));
  if (mouvementReduit || !('IntersectionObserver' in window)) {
    aReveler.forEach(function (element) { element.classList.add('est-visible'); });
  } else {
    var observateurRevelation = new IntersectionObserver(function (entrees, observateur) {
      entrees.forEach(function (entree) {
        if (entree.isIntersecting) {
          entree.target.classList.add('est-visible');
          observateur.unobserve(entree.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: .12 });
    aReveler.forEach(function (element) { observateurRevelation.observe(element); });
  }

  var compteurs = Array.prototype.slice.call(document.querySelectorAll('[data-counter]'));

  function afficherCompteur(element, valeur) {
    var texte = Math.round(valeur).toLocaleString('fr-CA').replace(/\s/g, '\u00a0') + '+';
    var valeurVisible = element.querySelector('.preuve__valeur');
    var ombre = element.querySelector('.preuve__ombre');
    if (valeurVisible) { valeurVisible.textContent = texte; }
    if (ombre) { ombre.textContent = texte; }
  }

  function animerCompteur(element) {
    if (element.getAttribute('data-counter-anime') === 'true') { return; }
    element.setAttribute('data-counter-anime', 'true');
    var cible = Number(element.getAttribute('data-counter')) || 0;
    var debut = null;
    var duree = 850;
    function image(horodatage) {
      if (debut === null) { debut = horodatage; }
      var p = mouvementReduit ? 1 : borner((horodatage - debut) / duree, 0, 1);
      var progressionNombre = 1 - Math.pow(1 - p, 4);
      afficherCompteur(element, p < 1 ? Math.min(cible - 1, cible * progressionNombre) : cible);
      if (p === 1) {
        var preuve = element.closest('.preuve');
        if (preuve) { preuve.classList.add('est-compteur-visible'); }
      }
      if (p < 1) { window.requestAnimationFrame(image); }
    }
    window.requestAnimationFrame(image);
  }

  compteurs.forEach(function (compteur) {
    if (mouvementReduit || window.innerHeight < 500 || !('IntersectionObserver' in window)) {
      afficherCompteur(compteur, Number(compteur.getAttribute('data-counter')) || 0);
      var preuveStatique = compteur.closest('.preuve');
      if (preuveStatique) { preuveStatique.classList.add('est-compteur-visible'); }
      return;
    }
    compteur.closest('.preuve').classList.add('compteur-actif');
    afficherCompteur(compteur, 0);
    var observateurCompteur = new IntersectionObserver(function (entrees, observateur) {
      if (entrees.some(function (entree) { return entree.isIntersecting; })) {
        animerCompteur(compteur);
        observateur.disconnect();
      }
    }, { threshold: .9, rootMargin: '-88px 0px 0px 0px' });
    observateurCompteur.observe(compteur.closest('.preuve'));
  });

  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      document.body.classList.add('est-prete');
      if (mouvementReduit && window.location.hash) {
        var cibleAncre = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
        if (cibleAncre) { cibleAncre.scrollIntoView(); }
      }
    });
  });

  var sectionMesuree = document.querySelector('[data-mesure-vue]');
  if (sectionMesuree && 'IntersectionObserver' in window) {
    var observateurMesure = new IntersectionObserver(function (entrees, observateur) {
      if (entrees.some(function (entree) { return entree.isIntersecting; })) {
        mesurer('vue-' + sectionMesuree.getAttribute('data-mesure-vue'));
        observateur.disconnect();
      }
    }, { threshold: .4 });
    observateurMesure.observe(sectionMesuree);
  }

  configurerScenes();
  mettreAJourDefilement();

  var formulaire = document.getElementById('formulaire-contact');
  if (!formulaire) { return; }
  formulaire.noValidate = true;
  var succes = document.getElementById('message-succes');
  var erreur = document.getElementById('message-erreur');
  var regles = {
    nom: function (valeur) { return valeur.trim().length >= 2; },
    courriel: function (valeur) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valeur.trim()); },
    projet: function (valeur) { return valeur.trim().length >= 10; }
  };

  function valider(nom, afficher) {
    var champ = formulaire.elements[nom];
    if (!champ) { return true; }
    var valide = regles[nom](champ.value);
    var conteneur = champ.closest('.champ');
    var message = document.getElementById('err-' + nom);
    if (afficher) {
      conteneur.classList.toggle('champ--erreur', !valide);
      if (message) { message.hidden = valide; }
      champ.setAttribute('aria-invalid', valide ? 'false' : 'true');
    }
    return valide;
  }

  Object.keys(regles).forEach(function (nom) {
    var champ = formulaire.elements[nom];
    champ.addEventListener('blur', function () { valider(nom, true); });
    champ.addEventListener('input', function () { if (champ.closest('.champ').classList.contains('champ--erreur')) { valider(nom, true); } });
  });

  function ouvrirDansLaMessagerie(donnees) {
    var corps = ['Nom : ' + (donnees.get('nom') || ''), 'Organisation : ' + (donnees.get('organisation') || '—'), 'Courriel : ' + (donnees.get('courriel') || ''), '', donnees.get('projet') || ''].join('\n');
    var lien = 'mailto:catherine@ippersielcollab.ca?subject=' + encodeURIComponent('Demande depuis ippersielcollab.ca') + '&body=' + encodeURIComponent(corps);
    window.location.href = lien;
  }

  formulaire.addEventListener('submit', function (evenement) {
    evenement.preventDefault();
    succes.hidden = true;
    erreur.hidden = true;
    var piege = formulaire.elements['entreprise-web'];
    if (piege && piege.value) { return; }
    var noms = Object.keys(regles);
    if (!noms.map(function (nom) { return valider(nom, true); }).every(Boolean)) {
      var premierInvalide = formulaire.querySelector('[aria-invalid="true"]');
      if (premierInvalide) { premierInvalide.focus(); }
      return;
    }
    formulaire.classList.add('est-en-cours');
    var donnees = new FormData(formulaire);
    if (!ENDPOINT_FORMULAIRE) {
      ouvrirDansLaMessagerie(donnees);
      formulaire.classList.remove('est-en-cours');
      return;
    }
    var requete = fetch(ENDPOINT_FORMULAIRE, { method: 'POST', headers: { Accept: 'application/json' }, body: donnees });
    requete.then(function (reponse) {
      if (!reponse.ok) { throw new Error('Réponse ' + reponse.status); }
      formulaire.reset();
      succes.hidden = false;
      succes.focus();
      mesurer('formulaire-envoye');
    }).catch(function () {
      erreur.hidden = false;
      ouvrirDansLaMessagerie(donnees);
    }).finally(function () { formulaire.classList.remove('est-en-cours'); });
  });
}());
