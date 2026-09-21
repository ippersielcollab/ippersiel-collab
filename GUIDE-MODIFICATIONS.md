# Guide de modification — site Ippersiel Collab

Ce guide indique où se trouve chaque texte affiché sur le site.
Tous les textes publics sont dans **un seul fichier** : `site/index.html`.
Ouvrez-le, allez à la ligne indiquée, changez le texte, enregistrez, rechargez
la page dans le navigateur.

> Numéros de ligne à jour au 7 septembre 2026. Ils bougent si vous ajoutez ou
> retirez des lignes : cherchez alors le texte lui-même avec la fonction
> « Rechercher » de votre éditeur.

## Textes de la page

| Texte | Ligne dans `site/index.html` |
|---|---|
| Surtitre du premier écran | 115 |
| Titre principal — ligne 1 | 118 |
| Titre principal — ligne 2 | 119 |
| Titre principal — ligne 3 | 120 |
| Texte d’introduction | 123 |
| Repère « Ce que je fais » | 142 |
| Titre de la section 02 | 144 |
| Les quatre résultats | 153 |
| Titre de la section Expertise | 167 |
| Introduction de l’Expertise | 168 |
| Expertise 01 — titre | 177 |
| Expertise 02 — titre | 194 |
| Expertise 03 — titre | 212 |
| Repère de la section Besoins | 232 |
| Première situation | 235 |
| Titre des formes d’accompagnement | 250 |
| Mention tarifaire | 271 |
| Repère « Un projet concret » | 280 |
| Titre de la réalisation | 281 |
| Chiffre 10 000+ | 286 |
| Nom du projet | 297 |
| Accroche du projet | 298 |
| Texte du projet (sacs de poubelle) | 304 |
| Titre de l’approche | 321 |
| Approche — étape 1 | 327 |
| Approche — étape 2 | 333 |
| Approche — étape 3 | 339 |
| Conclusion de l’approche | 344 |
| Nom de Catherine | 360 |
| Titre professionnel | 51 |
| Biographie — 1er paragraphe | 364 |
| Lien LinkedIn — À propos | 371 |
| Titre du contact | 383 |
| Message de succès | 444 |
| Message d’erreur | 445 |
| Signature du pied de page | 459 |

## Les couleurs

Tout part de la section « JETONS » de `site/css/site.css` :

| Jeton | Rôle | Valeur |
|---|---|---|
| `--accent-vif` | accents éditoriaux : mot « avancer », chiffre 10 000+, soulignement du menu, troisième chapitre d’expertise | orange `#FF5A36` |
| `--action` | boutons d’action pleins : « Parlons de votre projet », « Envoyer ma demande » | sarcelle `#00A7A0` |
| `--sarcelle` | aplat de la section Formes d’accompagnement, repères de section | `#00A7A0` |
| `--sarcelle-profond` | petit texte sarcelle sur fond clair, pour le contraste | `#00706C` |

Changer une seule de ces lignes bascule tout le site. Les messages d’erreur du
formulaire restent volontairement en orange, pour ne pas se confondre avec le
sarcelle qui signale la confirmation.

## Ce qui se modifie ailleurs

| Élément | Fichier |
|---|---|
| Couleurs, tailles de texte, espacements | `site/css/site.css`, section 2 « JETONS » |
| Titre et description pour Google | `site/index.html`, lignes 6 à 8 |
| Texte affiché lors d’un partage de lien | `outils/gabarit-image-partage.html` |
| Politique de confidentialité | `site/politique-confidentialite.html` |
| Page affichée après l’envoi du formulaire | `site/merci.html` |
| Adresse de réception du formulaire | `site/js/site.js`, première variable |

## Mettre l’aperçu en ligne à jour

Dans l’onglet **Terminal**, une fois vos modifications enregistrées :

```bash
cp -R /Users/matthieugariepy/Projects/IppersielCollab/site/. /Users/matthieugariepy/Projects/IppersielCollab/publication/
```

Puis :

```bash
git add -A && git commit -m "Mise à jour" && git push
```

L’adresse reste la même. Comptez une à deux minutes avant que le changement soit
visible.

## Ajouter l’adresse LinkedIn

Trois emplacements l’attendent, écrits et mis en commentaire. Dans
`site/index.html`, cherchez `LIEN LINKEDIN` et `BOUTON LINKEDIN` :

1. retirez la ligne `<!-- ... décommenter ...` au-dessus du lien;
2. retirez la ligne `-->` en dessous;
3. remplacez `ADRESSE-EXACTE` par l’identifiant du profil.

## Ajouter une deuxième réalisation

Dans `site/index.html`, l’élément `<article class="projet">` peut être dupliqué :
copiez-le entièrement, collez-le à la suite, puis remplacez le nom, l’accroche,
les deux paragraphes et les trois lignes de la fiche.
