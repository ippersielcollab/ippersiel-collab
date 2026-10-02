# Guide de modification — site Ippersiel Collab

Ce guide indique où se trouve chaque texte et chaque réglage du site.
Tous les textes publics sont dans **un seul fichier** : `site/index.html`.
Ouvrez-le, repérez le texte, changez-le, enregistrez.

> À jour au 2 octobre 2026. Dans `index.html`, plusieurs sections tiennent sur
> une seule très longue ligne : le numéro de ligne vous amène à la bonne
> section, puis utilisez « Rechercher » avec le texte de la colonne de gauche.
> Si les numéros ont bougé, la recherche du texte reste la méthode la plus sûre.

## Textes de la page (`site/index.html`)

| Texte | Ligne |
|---|---|
| Titre de l’onglet du navigateur et description pour Google | 6 à 7 |
| Bouton « Démarrons la conversation » (menu, menu mobile, premier écran) | 22, 26, 32 |
| Surtitre « Collaboration • Coordination • Communications » | 30 |
| Titre principal « Clarifier / Coordonner / Rassembler… » | 31 |
| Texte d’introduction « J’accompagne les organisations… » | 32 |
| Titre « Donner une direction claire au projet. » | 37 |
| Les deux blocs (noir et sarcelle) « Un projet avance… » | 38 |
| Les quatre résultats « Des enjeux clarifiés… » | 39 |
| Titre de l’Expertise « Trois leviers… » | 45 |
| Expertise — Collaboration | 47 |
| Expertise — Coordination | 48 |
| Expertise — Communications | 49 |
| « Quand le projet doit avancer » et ses six situations | 55 |
| « Un accompagnement adapté… », les trois formes, la mention « Chaque mandat… » | 57 |
| Réalisation « Bagage de vie » : titre, accroche, 10 000+, « Depuis 2019… » | 59 |
| Approche « Comment je travaille avec vous » : les trois étapes et la conclusion | 61 |
| À propos : nom, titre professionnel, biographie, lien LinkedIn | 63 |
| Contact : titre, texte, formulaire, messages de succès et d’erreur | 65 à 66 |
| Pied de page : coordonnées, LinkedIn, crédit « Site conçu et réalisé par picbois47 » | 69 |

Le titre professionnel de Catherine apparaît aussi à la ligne 15 (données pour
Google). Si vous le changez à la ligne 63, changez-le là aussi.

## Les couleurs (`site/css/site.css`, tout en haut, bloc `:root`)

| Jeton | Rôle | Valeur |
|---|---|---|
| `--sarcelle` | accent principal : verbes du titre, listes, chiffre 10 000+, bloc « Un accompagnement » | sarcelle vif `#00A7A0` |
| `--sarcelle-fonce` | même usage sur fond pâle. **Réglé exprès à la même valeur que `--sarcelle`** (demande de Catherine : un seul sarcelle partout) | `#00A7A0` |
| `--orange` | traits animés, « Collaboration » dans Expertise, « Comprendre le contexte », bouton d’envoi du formulaire | `#FF5A36` |
| `--carbone` / `--mineral` | noir et blanc cassé | `#0A0A0A` / `#F2F3F5` |

Changer une de ces valeurs change toutes les pages d’un coup.

## Ce qui se modifie ailleurs

| Élément | Fichier |
|---|---|
| Mise en page, animations, défilement en « scènes » | `site/css/scroll-redesign.css` |
| Comportements (menu, compteur, formulaire) | `site/js/site.js` |
| Adresse d’envoi du formulaire (Web3Forms) | `site/js/site.js`, ligne 4 |
| Clé d’accès Web3Forms | `site/index.html`, ligne 66, champ `access_key` |
| Photo de Catherine | `site/assets/img/catherine-ippersiel-*.jpg` et `.webp` (trois tailles) |
| Politique de confidentialité | `site/politique-confidentialite.html` |
| Page affichée après l’envoi du formulaire | `site/merci.html` |

## Mettre le site en ligne

Le site est hébergé sur **Cloudflare Pages** et se met à jour **tout seul** dès
que les changements sont envoyés sur GitHub (dépôt `ippersielcollab/ippersiel-collab`).
Il n’y a plus de dossier `publication/` à copier : l’ancienne méthode est abandonnée.

Dans l’onglet **Terminal** (à côté de la conversation Claude Code, ouvert sur le
dossier du projet), une fois vos modifications enregistrées :

```bash
git add -A && git commit -m "Description du changement" && git push
```

Comptez une à deux minutes avant que le changement soit visible.

## Vérifier un changement avant de le publier

Dans le même Terminal :

```bash
python3 -m http.server 8934 --directory site
```

Puis ouvrez `http://localhost:8934` dans le navigateur. Si un changement de
couleur ou de style semble ne pas s’appliquer, c’est presque toujours le
navigateur qui garde l’ancienne version en mémoire : rechargez avec
**⌘ + Maj + R**.

## Si les adresses changent

- **Courriel du formulaire** : le formulaire envoie à l’adresse liée à la clé
  Web3Forms. Pour changer le destinataire, créez une nouvelle clé sur
  web3forms.com avec la nouvelle adresse et remplacez-la à la ligne 66.
- **Domaine** : l’adresse de départ est `ippersiel-collab.pages.dev`. Le domaine
  `ippersielcollab.ca` s’ajoute dans le tableau de bord Cloudflare Pages
  (projet `ippersiel-collab` > Custom domains).
