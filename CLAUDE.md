# Ippersiel Collab — mémoire du projet

Reconstitué le 2026-09-11 à partir de la session Claude Code du 6-8 septembre 2026
(`~/.claude/projects/-Users-matthieugariepy-Projects-IppersielCollab/`).
Mis à jour le 2026-09-21 — voir « Pivot du 21 septembre 2026 » : nouvelle
structure technique et nouveau plan d'hébergement, les sections « Stack
technique », « Rangement du dossier » et « Livrables déjà remis » ci-dessous
décrivent maintenant l'ANCIEN setup (GitHub Pages / Netlify), conservé pour
historique.

## Client

**Catherine Ippersiel** (Ippersiel Collab) — stratège qui accompagne des
organisations, équipes et porteurs de projets sur des sujets parfois sensibles
(ex. protection de la jeunesse). Catherine est la conjointe de Matthieu ; c'est
lui qui pilote Claude Code pour ce projet, elle valide le contenu et le design.
Domaine visé : `ippersielcollab.ca` (pas encore branché — voir Décisions clés).

## Type de projet

Site web vitrine one-page en français québécois (`fr-CA`), neuf sections :
premier écran, mise en ordre des idées, expertise (3 leviers), quand faire
appel, formes d'accompagnement, réalisations (« Bagage de vie » — 10 000+
bagages remis), approche (3 mouvements), à propos, contact. Design animé
(révélations au défilement, compteur qui s'incrémente), palette noir
carbone / blanc minéral / accent vif.

## Stack technique

- **HTML/CSS/JS statique, aucun framework.** Tout le contenu vit dans un seul
  fichier `site/index.html` ; styles dans `site/css/site.css` (organisée en
  système de jetons de couleur, pas en journal de correctifs) ; interactions
  dans `site/js/site.js`.
- **Polices** : Archivo (variable) + Source Sans 3, auto-hébergées dans
  `site/assets/fonts/`.
- **Formulaire de contact** : Netlify Forms (`netlify.toml` à la racine),
  fonctionne sans clé secrète.
- **Hébergement d'aperçu** : GitHub Pages, dépôt public
  `mg4costcorp-sys/ippersiel-collab`, publié depuis le dossier `publication/`
  (un sous-dossier séparé, distinct de `site/` — voir Rangement ci-dessous).
  `robots.txt` bloque l'indexation Google de cette adresse d'aperçu.
- **Outillage de vérification** (pas livré au client, usage interne) :
  scripts Puppeteer-core (`*.mjs` générés à la volée dans le scratchpad) pour
  captures d'écran multi-largeurs (360 à 1920 px), diff pixel-à-pixel entre
  versions, audit d'accessibilité et de performance.
- **Variantes de couleur** : un seul jeton CSS (`--accent-vif`) permet de
  basculer tout le site entre deux teintes sans dupliquer le code —
  `outils/construire-variante.py` régénère une variante à partir du site
  principal.

## Rangement du dossier

```
site/               ← le site tel que développé/testé en local
publication/         ← copie déployée sur GitHub Pages (dépôt git séparé)
outils/              ← gabarit image de partage, générateur de variante
documents-source/    ← brief et cahier de contenus de Catherine (jamais publiés)
actifs-sources/      ← logo vectoriel, logos JPG, photo originale
apercus/             ← captures d'écran de suivi (avant/après, mobile/ordi)
README.md            ← comment lancer, publier, décider
GUIDE-MODIFICATIONS.md ← numéro de ligne exact de chaque texte dans index.html
```

## Livrables déjà remis

- **V1 complète livrée et en ligne** (6 septembre 2026) :
  `https://mg4costcorp-sys.github.io/ippersiel-collab/` — envoyée à Catherine
  par texto le soir même pour qu'elle la découvre le lendemain matin sur
  iPhone à Gatineau.
- **96 textes du cahier de contenus de Catherine vérifiés mot pour mot** —
  aucun texte inventé conservé ; 3 textes rédigés par Claude ont été retirés
  parce qu'ils n'étaient pas d'elle.
- **Variante de couleur sarcelle** (`#00A7A0`) construite et publiée en
  parallèle de l'orange pour comparaison (7 septembre) — **retirée après le
  choix de Catherine** (8 septembre) : le site final garde l'orange comme
  couleur d'accent principale.
- **Second lot de 8 modifications** demandées par Catherine, livrées et
  vérifiées en production le 8 septembre (voir Décisions clés).
- Politique de confidentialité, page de confirmation (`merci.html`),
  `sitemap.xml`, `robots.txt` : livrés avec le site.

## Décisions clés

- **Couleur d'accent : orange retenu**, mais les **boutons d'action pleins**
  (« Parlons de votre projet », « Envoyer ma demande ») sont en **sarcelle**
  — décision explicite de Catherine du 8 septembre. « Écrire à Catherine »
  reste noir (action secondaire). Les messages d'erreur du formulaire
  restent orange, volontairement, pour ne pas se confondre avec le sarcelle
  de confirmation.
- **Photo retirée du premier écran**, conservée uniquement dans la section
  « À propos ». Le premier écran a été recomposé en conséquence (titre
  pleine largeur, intro + bouton sur une même rangée de bas de page).
- **Numérotation des sections retirée** du menu et des repères visuels
  (Catherine ne voulait pas de « 01 Accueil », etc.).
- **Architecture du menu alignée sur la table de Catherine** : 6 destinations
  numérotées 01→06 (Accueil→Contact) dans son cahier maître — le
  numérotage à neuf sections initialement codé par Claude a été corrigé
  pour suivre le sien.
- **Boîte tarifaire** (« Chaque mandat... ») recentrée en rangée séparée
  sous les trois formes d'accompagnement, largeur max ~52 rem, texte aligné
  à gauche, fond sarcelle conservé.
- **Formulaire sur l'adresse d'aperçu GitHub Pages** : pas de service de
  réception actif à cette adresse — en filet de sécurité, la soumission
  ouvre la messagerie du visiteur pré-remplie vers `catherine@ippersielcollab.ca`.
  Le vrai envoi Netlify prendra le relais automatiquement à la mise en ligne
  finale sur le domaine définitif, sans modification de code.
- **Déploiement bloqué par la couche de sécurité de Claude Code** lors de la
  première publication GitHub (création d'un dépôt public + activation de
  Pages) : action irréversible/externe, a demandé confirmation explicite de
  Matthieu avant d'être exécutée dans son propre Terminal.

## En attente de Catherine (non résolu, avant le pivot)

1. ~~**Adresse LinkedIn exacte**~~ — **résolu** : le profil
   `https://ca.linkedin.com/in/catherine-ippersiel-5a74a2173` est maintenant
   branché aux 3 emplacements (menu-mobile, à propos, contact, pied de page,
   JSON-LD) dans la nouvelle version du 21 septembre.
2. **Photos de « Bagage de vie »** — la section tient seule (typographique),
   mais accepte déjà une deuxième réalisation visuelle si Catherine fournit
   des photos.
3. **Crédit photo** — le nom du fichier de la photo de Catherine ne permet
   pas d'identifier le photographe avec certitude ; jamais tranché.
4. **Domaine final `ippersielcollab.ca`** — toujours pas acheté/branché ;
   voir « Pivot du 21 septembre 2026 » pour le nouveau plan.

## Pivot du 21 septembre 2026 — nouvelle stack (Cloudflare + Web3Forms)

Entre-temps, un autre outil (ChatGPT « Astra ») a produit une refonte du site
(toujours HTML/CSS/JS statique, même contenu de base) avec une mise en page
en « scènes » qui défilent à l'écran, prévue pour un hébergement **Cloudflare
Pages** plutôt que GitHub Pages. Matthieu a fourni cette refonte en `.zip`
(`Ippersiel_Collab_final_scroll.zip`) et Catherine l'a commentée à partir
d'un aperçu Cloudflare Pages (`preview.ippersiel-collab-preview.pages.dev`).

**Décision (confirmée par Matthieu, 21 septembre) :** cette refonte devient la
version de travail officielle. Plan de mise en ligne retenu :
- **Hébergement : Cloudflare Pages**, branché directement sur un dépôt
  **GitHub personnel de Matthieu** (pas celui de Catherine — c'est lui qui
  fera toujours les futures modifications). Cloudflare republie automatiquement
  à chaque `push`, donc l'étape manuelle « copier vers `publication/` »
  (ancien setup GitHub Pages) devient inutile.
- **Formulaire de contact : Web3Forms** remplacera l'intégration Netlify
  Forms prévue à l'origine. Reste à faire : créer un compte Web3Forms et
  fournir la clé d'accès (« access key ») pour la brancher dans
  `site/js/site.js` (variable `ENDPOINT_FORMULAIRE`, actuellement vide — le
  formulaire retombe sur un lien `mailto:` en attendant).
- **Nom de domaine `ippersielcollab.ca`** : encore à acheter, puis à
  connecter au projet Cloudflare Pages.
- L'ancien dépôt GitHub Pages (`mg4costcorp-sys/ippersiel-collab`) et le
  dossier `publication/` deviennent **obsolètes** — non supprimés, mais plus
  maintenus.

### Ce qui a changé concrètement dans `site/` (21 septembre 2026)

- Le contenu de `site/` a été **remplacé** par celui du zip d'Astra.
  L'ancienne version (setup GitHub Pages/Netlify) est conservée intacte dans
  `site-ancien-backup/` à la racine du projet, au cas où.
- Nouveaux fichiers apparus avec le zip : `site/wrangler.jsonc` (config de
  déploiement Cloudflare Pages, `pages_build_output_dir: "."`) et
  `site/css/scroll-redesign.css` (surcharge qui transforme la section
  Expertise en trois « scènes » plein écran au défilement, sur grand écran
  seulement — `min-width:75rem` et `min-height:46rem`, géré par
  `site/js/site.js`).
- **Demande de Catherine appliquée : mouvement horizontal → vertical.** Les
  trois panneaux de la section Expertise (desktop uniquement) glissaient de
  gauche à droite (`--panel-x`, `translate3d(x,0,0)`) ; changé pour un
  glissement de haut en bas (`--panel-y`, `translate3d(0,y,0)`) — modifié
  dans `site/js/site.js` (`mettreAJourScenes`) et `site/css/scroll-redesign.css`.
- **Couleurs des 3 titres d'Expertise** (demande de Catherine) : « Collaboration »
  en orange (nouvelle classe `.expertise__chapitre--orange`), « Coordination »
  en blanc/minéral (couleur par défaut, aucune classe), « Communications » en
  sarcelle (classe existante `.expertise__chapitre--accent`).
- **Tout le texte du site a été réécrit** selon les instructions précises de
  Catherine du 21 septembre (accueil, ce que je fais, expertise, quand faire
  appel, accompagnement, réalisations, approche, à propos). Le bouton
  « Parlons de votre projet » a été renommé **« Démarrons la conversation »**
  partout (en-tête, menu mobile, hero, `politique-confidentialite.html`) —
  sauf « Écrire à Catherine » dans Contact qui reste inchangé (action
  secondaire noire, Catherine n'a rien demandé sur cette section : « cette
  section avec le formulaire me convient »).
- Bloc « Chaque mandat fait l'objet d'une proposition... » recentré (Catherine
  le voulait équilibré/centré plutôt qu'aligné à droite) dans `site.css` et
  `scroll-redesign.css`.
- Petite coquille visible dans le message de Catherine (« coordination
  deprojets ») corrigée en « coordination de projets » dans le titre à propos
  et le JSON-LD — à confirmer avec elle si ce n'est pas ce qu'elle voulait.
- **`GUIDE-MODIFICATIONS.md` n'a pas encore été remis à jour** avec les
  nouveaux numéros de ligne — à faire avant de le redonner à Catherine comme
  référence.
- Vérifié visuellement en local (serveur Python via `.claude/launch.json`,
  config `ippersiel-site`) à 1600×900 : mode « scènes » actif confirmé,
  défilement vertical de la section Expertise fonctionne, tous les nouveaux
  textes s'affichent correctement.
- **Correction (même jour) : accent sarcelle du titre principal restauré.**
  Catherine avait vu la capture de l'ancienne version en ligne (pas encore
  redéployée) et signalé que le mouvement/soulignement sarcelle du hero
  semblait avoir disparu. En reformulant le titre en 3 courtes phrases, le
  mot unique géant en sarcelle (`titre-hero__impact` / `mot-avancer`) avait
  été abandonné faute d'un mot évident à mettre en accent. Ajouté une
  nouvelle classe `.mot-accent` (couleur sarcelle-foncé + trait orange animé
  au chargement) sur le premier verbe de chaque ligne (Clarifier / Coordonner
  / Rassembler) dans `site/index.html`, stylée dans
  `site/css/scroll-redesign.css`. **Attention pour la suite** : le site
  n'était pas encore déployé sur `preview.ippersiel-collab-preview.pages.dev`
  au moment de cette confusion — rappeler à Catherine/Matthieu que les
  aperçus qu'elle voit en ligne ne reflètent pas les changements tant qu'on
  n'a pas connecté Cloudflare Pages au nouveau dépôt et poussé.
