/* =========================================================================
   IPPERSIEL COLLAB — comportements de la page
   1 réglages · 2 mesure · 3 en-tête · 4 menu mobile · 5 révélations
   6 compteur · 7 formulaire
   ========================================================================= */
(function () {
  'use strict';

  /* ---------- 1. RÉGLAGES ------------------------------------------------
     Laisser vide pour le mode Netlify Forms (le formulaire est traité par
     l'hébergeur, aucune clé n'est exposée). Pour un autre service, inscrire
     ici l'adresse complète de réception (ex. https://formspree.io/f/xxxx).  */
  var ENDPOINT_FORMULAIRE = '';

  var mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 2. MESURE SOBRE -------------------------------------------
     Aucun traceur n'est installé. La fonction transmet un évènement
     uniquement si un outil respectueux de la vie privée est ajouté plus
     tard (ex. Plausible). Sans outil, elle ne fait rien et ne dépose
     aucun témoin.                                                          */
  function mesurer(nom, details) {
    if (typeof window.plausible === 'function') {
      window.plausible(nom, details ? { props: details } : undefined);
    }
  }

  document.addEventListener('click', function (e) {
    var cible = e.target.closest ? e.target.closest('[data-mesure]') : null;
    if (cible) { mesurer(cible.getAttribute('data-mesure')); }
  });

  /* ---------- 3. EN-TÊTE : état, progression, section active ------------- */
  var entete = document.getElementById('entete');
  var progression = document.getElementById('progression');
  var liensMenu = Array.prototype.slice.call(document.querySelectorAll('.menu a[data-ancre]'));
  var tic = false;

  function majEntete() {
    var y = window.scrollY || window.pageYOffset;
    entete.setAttribute('data-etat', y > 40 ? 'defile' : 'sommet');
    var hauteur = document.documentElement.scrollHeight - window.innerHeight;
    var part = hauteur > 0 ? Math.min(1, y / hauteur) : 0;
    progression.style.width = (part * 100).toFixed(2) + '%';
    tic = false;
  }
  window.addEventListener('scroll', function () {
    if (!tic) { tic = true; window.requestAnimationFrame(majEntete); }
  }, { passive: true });
  majEntete();

  /* correspondance ancre du menu → section réelle de la page */
  var correspondances = {
    expertise: 'expertise',
    realisations: 'realisations',
    approche: 'approche',
    'a-propos': 'a-propos'
  };
  var sectionsSuivies = [];
  liensMenu.forEach(function (lien) {
    var id = correspondances[lien.getAttribute('data-ancre')];
    var section = id && document.getElementById(id);
    if (section) { sectionsSuivies.push({ lien: lien, section: section }); }
  });

  if ('IntersectionObserver' in window && sectionsSuivies.length) {
    var vigie = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (entree) {
        var paire = sectionsSuivies.filter(function (p) { return p.section === entree.target; })[0];
        if (!paire) { return; }
        if (entree.isIntersecting) {
          sectionsSuivies.forEach(function (p) { p.lien.removeAttribute('aria-current'); });
          paire.lien.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sectionsSuivies.forEach(function (p) { vigie.observe(p.section); });
  }

  /* ---------- 4. MENU MOBILE -------------------------------------------- */
  var bascule = document.getElementById('bascule-menu');
  var menuMobile = document.getElementById('menu-mobile');
  var basculeTexte = bascule.querySelector('.bascule-menu__texte');

  function libelleBascule(ouvert) {
    if (!basculeTexte) { return; }
    basculeTexte.textContent = basculeTexte.getAttribute(ouvert ? 'data-ouvert' : 'data-ferme');
  }

  function ouvrirMenu() {
    menuMobile.hidden = false;
    window.requestAnimationFrame(function () { menuMobile.classList.add('est-ouvert'); });
    bascule.setAttribute('aria-expanded', 'true');
    libelleBascule(true);
    document.body.style.overflow = 'hidden';
    var premier = menuMobile.querySelector('a');
    if (premier) { premier.focus(); }
  }
  function fermerMenu(rendreFocus) {
    menuMobile.classList.remove('est-ouvert');
    bascule.setAttribute('aria-expanded', 'false');
    libelleBascule(false);
    document.body.style.overflow = '';
    window.setTimeout(function () { menuMobile.hidden = true; }, mouvementReduit ? 0 : 300);
    if (rendreFocus) { bascule.focus(); }
  }
  bascule.addEventListener('click', function () {
    if (bascule.getAttribute('aria-expanded') === 'true') { fermerMenu(false); } else { ouvrirMenu(); }
  });
  menuMobile.addEventListener('click', function (e) {
    if (e.target.closest('a')) { fermerMenu(false); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && bascule.getAttribute('aria-expanded') === 'true') { fermerMenu(true); }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 992 && bascule.getAttribute('aria-expanded') === 'true') { fermerMenu(false); }
  });

  /* ---------- 5. RÉVÉLATIONS AU DÉFILEMENT ------------------------------ */
  var aReveler = Array.prototype.slice.call(document.querySelectorAll('[data-anim], .formes__axe span, .mouvement'));

  if (!('IntersectionObserver' in window) || mouvementReduit) {
    aReveler.forEach(function (el) { el.classList.add('est-visible'); });
  } else {
    var revelateur = new IntersectionObserver(function (entrees, obs) {
      entrees.forEach(function (entree) {
        if (!entree.isIntersecting) { return; }
        entree.target.classList.add('est-visible');
        obs.unobserve(entree.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });

    aReveler.forEach(function (el, i) {
      var parent = el.parentElement;
      if (parent && (parent.classList.contains('positionnement__texte') ||
                     parent.classList.contains('apropos__bio'))) {
        el.style.setProperty('--retard', (Array.prototype.indexOf.call(parent.children, el) * 0.08) + 's');
      }
      revelateur.observe(el);
    });
  }

  /* révélation du titre principal dès le premier rendu */
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () { document.body.classList.add('est-prete'); });
  });

  /* mesure de la consultation de la section Réalisations */
  var sectionMesuree = document.querySelector('[data-mesure-vue]');
  if (sectionMesuree && 'IntersectionObserver' in window) {
    var vue = new IntersectionObserver(function (entrees, obs) {
      entrees.forEach(function (entree) {
        if (entree.isIntersecting) { mesurer('vue-' + sectionMesuree.getAttribute('data-mesure-vue')); obs.disconnect(); }
      });
    }, { threshold: 0.4 });
    vue.observe(sectionMesuree);
  }

  /* ---------- 6. COMPTEUR 10 000+ --------------------------------------- */
  var compteur = document.querySelector('[data-compteur]');
  if (compteur) {
    var valeur = compteur.querySelector('.preuve__valeur');
    var cible = parseInt(compteur.getAttribute('data-compteur'), 10) || 0;
    var formate = function (n) { return n.toLocaleString('fr-CA'); };

    if (mouvementReduit || !('IntersectionObserver' in window)) {
      valeur.textContent = formate(cible);
    } else {
      valeur.textContent = formate(0);
      var compte = new IntersectionObserver(function (entrees, obs) {
        entrees.forEach(function (entree) {
          if (!entree.isIntersecting) { return; }
          obs.disconnect();
          var debut = null, duree = 1800;
          var pas = function (t) {
            if (debut === null) { debut = t; }
            var p = Math.min(1, (t - debut) / duree);
            var adouci = 1 - Math.pow(1 - p, 3);
            valeur.textContent = formate(Math.round(cible * adouci));
            if (p < 1) { window.requestAnimationFrame(pas); }
          };
          window.requestAnimationFrame(pas);
        });
      }, { threshold: 0.5 });
      compte.observe(compteur);
    }
  }

  /* ---------- 7. FORMULAIRE --------------------------------------------- */
  var formulaire = document.getElementById('formulaire-contact');
  if (formulaire) {
    var succes = document.getElementById('message-succes');
    var erreur = document.getElementById('message-erreur');

    var regles = {
      nom: function (v) { return v.trim().length >= 2; },
      courriel: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); },
      projet: function (v) { return v.trim().length >= 10; }
    };

    function champDe(nom) { return formulaire.elements[nom]; }
    function bloc(el) { return el.closest('.champ'); }

    function valider(nom, afficher) {
      var el = champDe(nom);
      if (!el) { return true; }
      var ok = regles[nom](el.value);
      var conteneur = bloc(el);
      var message = document.getElementById('err-' + nom);
      if (afficher) {
        conteneur.classList.toggle('champ--erreur', !ok);
        if (message) { message.hidden = ok; }
        el.setAttribute('aria-invalid', ok ? 'false' : 'true');
      }
      return ok;
    }

    Object.keys(regles).forEach(function (nom) {
      var el = champDe(nom);
      if (!el) { return; }
      el.addEventListener('blur', function () { valider(nom, true); });
      el.addEventListener('input', function () {
        if (bloc(el).classList.contains('champ--erreur')) { valider(nom, true); }
      });
    });

    function ouvrirDansLaMessagerie(donnees) {
      var corps = [
        'Nom : ' + (donnees.get('nom') || ''),
        'Organisation : ' + (donnees.get('organisation') || '—'),
        'Courriel : ' + (donnees.get('courriel') || ''),
        '',
        donnees.get('projet') || ''
      ].join('\n');
      var lien = 'mailto:catherine@ippersielcollab.ca'
        + '?subject=' + encodeURIComponent('Demande depuis ippersielcollab.ca')
        + '&body=' + encodeURIComponent(corps);
      window.setTimeout(function () { window.location.href = lien; }, 400);
    }

    formulaire.addEventListener('submit', function (e) {
      e.preventDefault();
      succes.hidden = true;
      erreur.hidden = true;

      /* piège à pourriel : un robot remplit le champ caché */
      var piege = formulaire.elements['entreprise-web'];
      if (piege && piege.value) { return; }

      var noms = Object.keys(regles);
      var valide = noms.map(function (n) { return valider(n, true); }).every(Boolean);
      if (!valide) {
        var premier = formulaire.querySelector('.champ--erreur input, .champ--erreur textarea');
        if (premier) { premier.focus(); }
        return;
      }

      formulaire.classList.add('est-en-cours');

      var donnees = new FormData(formulaire);
      var requete;

      if (ENDPOINT_FORMULAIRE) {
        requete = fetch(ENDPOINT_FORMULAIRE, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: donnees
        });
      } else {
        /* Netlify Forms : envoi encodé à la racine du site */
        requete = fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(donnees).toString()
        });
      }

      requete.then(function (reponse) {
        if (!reponse.ok) { throw new Error('Réponse ' + reponse.status); }
        formulaire.reset();
        succes.hidden = false;
        succes.focus && succes.focus();
        mesurer('formulaire-envoye');
      }).catch(function () {
        /* Filet de sécurité : si l'envoi automatique échoue — service
           indisponible, ou version d'aperçu sans service de réception —
           la messagerie s'ouvre avec la demande déjà rédigée, afin que le
           message parvienne tout de même à Catherine. */
        erreur.hidden = false;
        ouvrirDansLaMessagerie(donnees);
      }).then(function () {
        formulaire.classList.remove('est-en-cours');
      });
    });
  }
})();
