# MISSION — RENDRE LE DÉFILEMENT D’IPPERSIEL COLLAB DISTINCTIF

Modifie et finalise le site contenu dans `Ippersiel_Collab_site_finalb.zip` en suivant les deux références visuelles fournies :

- `references/direction-page-complete.png`
- `references/storyboard-transitions-scroll.png`

Travaille de façon autonome jusqu’à une version finale testée et remets un nouveau ZIP complet. Ne t’arrête pas après un plan et ne demande pas de validation intermédiaire, sauf si un blocage technique rend réellement la réalisation impossible.

## Contexte

La version actuelle est propre et le héros est approuvé. Toutefois, le reste de la page paraît encore trop standard : succession de sections, grilles et blocs qui apparaissent verticalement comme sur beaucoup de sites. L’objectif de cette passe est de transformer le dessous du héros en un récit éditorial animé et mémorable.

## Règles absolues

1. **Conserve le héros actuel.** Tu peux seulement améliorer subtilement sa transition vers la section suivante.
2. **Ne change aucun texte.** Tous les mots actuellement présents dans le site final sont approuvés par Catherine. Ne reformule, ne raccourcis, ne résume et n’invente rien.
3. Les textes visibles dans les maquettes sont seulement des indications graphiques. En cas de différence, le HTML actuel demeure la source officielle.
4. La photo de Catherine peut apparaître dans « À propos », jamais dans le héros.
5. Aucun « 01 / 02 / 03 » décoratif, nulle part.
6. Aucun réseau de petits mots reliés par des lignes.
7. Évite les cartes génériques, les boutons en pilule, les grilles répétitives et les animations `fade-up` utilisées comme solution principale.
8. Préserve le formulaire, les coordonnées, les liens, le SEO, l’accessibilité et toutes les fonctions utiles de la version actuelle.

## Nouvelle idée directrice

Le site doit ressembler à une **publication éditoriale qui se transforme pendant le défilement**. La typographie, les grands plans de couleur, les recadrages et les transitions doivent créer la personnalité. Le turquoise et l’orange doivent être réservés à quelques gestes forts.

Utilise principalement :

- `position: sticky`;
- transformations liées à la progression réelle du défilement;
- `clip-path`, masques ou volets;
- translations horizontales contrôlées;
- changements de terrain minéral, carbone, turquoise et orange;
- typographie monumentale, parfois volontairement recadrée aux bords de l’écran.

N’ajoute pas de grosse bibliothèque d’animation si CSS et JavaScript natif suffisent. Si une petite bibliothèque déjà présente dans le projet est nécessaire, justifie son utilisation et évite toute dépendance fragile.

## Expérience précise au défilement

### Héros vers Positionnement

- Le héros reste visuellement tel qu’approuvé.
- La barre orange se prolonge pendant les derniers instants du héros.
- Elle devient la ligne ou l’impulsion qui introduit « Mettre les idées en ordre et le projet en marche. »
- Le passage doit sembler continu, pas comme deux blocs séparés.

### Positionnement

- Abandonne la mise en page classique « titre, deux paragraphes, quatre éléments égaux ».
- Fais du titre une composition éditoriale surdimensionnée traversant presque toute la largeur.
- Utilise un grand plan turquoise oblique ou plié qui passe sous « en marche » et monte graduellement avec le scroll.
- Les paragraphes et les quatre résultats approuvés restent tous présents, mais intégrés dans des zones éditoriales asymétriques.
- Le plan turquoise devient la transition vers l’Expertise.

### Expertise — scène collante principale

- Transforme cette section en scène plein écran temporairement épinglée.
- Pendant que l’utilisateur défile verticalement, les trois expertises se remplacent horizontalement dans le même espace.
- Un seul grand titre domine à la fois :
  - « Stratégie et positionnement »;
  - « Contenus et rayonnement »;
  - « Projets et collaborations ».
- Le titre sortant demeure brièvement visible comme fragment recadré à gauche; le suivant apparaît à droite derrière un plan turquoise ou carbone.
- Les listes complètes de services restent lisibles dans une colonne plus étroite et changent avec le titre actif.
- Aucun carrousel automatique. Le mouvement dépend du scroll et l’utilisateur garde le contrôle.
- N’affiche aucun numéro décoratif.

### Expertise vers Besoins

- Le dernier grand titre sort latéralement.
- Le terrain carbone se retire comme un rideau ou un panneau coulissant pour révéler le fond minéral.
- La transition doit être douce et plus calme que la scène Expertise.

### Besoins

- Conserve exactement les six besoins.
- Évite la grille conventionnelle de six cases égales.
- Traite chaque phrase comme une grande déclaration éditoriale alternant gauche et droite, avec des espacements et des largeurs variables.
- Des règles pleine largeur peuvent guider la lecture, mais sans relier de petits mots entre eux.
- Les mouvements d’entrée doivent être courts et alternés, sans effet spectaculaire à chaque ligne.

### Besoins vers Accompagnement

- Une règle turquoise s’épaissit progressivement jusqu’à remplir l’écran.
- Ce remplissage devient naturellement la première scène d’accompagnement.

### Accompagnement — déplacement horizontal

- Les trois formules ne doivent plus ressembler à trois cartes côte à côte.
- Crée une scène plein écran où le scroll vertical entraîne un déplacement horizontal entre trois paysages visuels continus :
  - « Mandat ciblé » sur un terrain turquoise;
  - « Projet structurant » sur un terrain carbone texturé très subtil;
  - « Accompagnement continu » sur un terrain orange ou minéral avec forte présence orange.
- Chaque formule occupe presque tout l’écran lorsqu’elle devient active.
- Les séparations peuvent être diagonales comme dans le storyboard.
- Conserve intégralement les descriptions et la mention de tarification.
- Sur mobile, remplace l’épinglage horizontal par trois scènes verticales fluides et pleinement lisibles.

### Accompagnement vers Bagage de vie

- Le dernier plan orange se contracte pour devenir la barre située près du `10 000+`.
- Le fond passe au carbone sans coupure brutale.

### Réalisation — Bagage de vie

- Fais-en le moment de preuve le plus fort de la page.
- Le `10 000+` devient monumental et peut rester brièvement épinglé.
- Une copie ou une forme turquoise décalée vient s’aligner derrière le nombre pendant le scroll.
- La barre orange issue de la section précédente complète le mouvement.
- Tous les textes, chiffres et renseignements actuels doivent demeurer présents et lisibles.
- Le mouvement ne doit jamais rendre le chiffre ambigu.

### Approche

- Supprime la présentation en trois colonnes avec ligne et nœuds.
- Crée une nouvelle scène collante sur fond minéral.
- Les trois titres approuvés occupent successivement le même grand emplacement pendant le scroll :
  - « Comprendre le contexte »;
  - « Rendre l’essentiel visible »;
  - « Faire avancer concrètement ».
- Chaque description apparaît avec son titre et demeure assez longtemps pour être lue.
- Le passage d’un titre au suivant utilise un large masque turquoise ou un recadrage typographique, pas un simple fondu.
- Aucun numéro décoratif.

### Approche vers À propos

- Cette transition doit être une signature du site.
- À la fin de « Faire avancer concrètement », de grands volets carbone montent depuis le bas ou traversent la scène.
- Entre ces volets, le portrait réel de Catherine apparaît progressivement.
- Le masque turquoise devient une ligne de recadrage verticale.
- La transition aboutit à une composition de type couverture de magazine.

### À propos

- Utilise le portrait réel déjà intégré au projet.
- Compose « Catherine Ippersiel » en très grand, partiellement recadré, sans nuire à la reconnaissance du nom.
- Place la biographie complète dans une colonne calme et très lisible.
- Le résultat doit être humain, éditorial et crédible, pas une carte « membre de l’équipe ».

### Contact et pied de page

- Le passage vers le contact ralentit visuellement.
- « Commençons par une conversation. » devient une grande composition noire sur fond minéral.
- Une ligne turquoise part du titre et se prolonge jusqu’au formulaire ou à son premier champ.
- Préserve intégralement le formulaire fonctionnel, ses validations et ses états accessibles.
- Termine avec un pied de page carbone sobre.

## Hiérarchie des animations

Les mouvements forts sont réservés à quatre moments :

- Expertise horizontale;
- Accompagnement horizontal;
- alignement du `10 000+`;
- transformation Approche vers le portrait.

Les autres passages doivent soutenir ces moments avec des transitions plus calmes. N’anime pas chaque paragraphe. L’objectif est un rythme cinématographique, pas une démonstration d’effets.

## Mobile, accessibilité et performance

- Le site doit fonctionner à partir de 320 px de largeur.
- Les expériences collantes doivent avoir une version mobile simplifiée, sans débordement horizontal ni texte coupé involontairement.
- Respecte `prefers-reduced-motion` : tout le contenu doit être visible et logique sans animation.
- Le clavier, les focus, le menu, les ancres et le formulaire doivent rester accessibles.
- Utilise `requestAnimationFrame` pour les calculs liés au scroll et évite les gestionnaires lourds.
- Ne provoque pas de sauts de mise en page importants.
- Vérifie le contraste sur les plans turquoise et orange.

## Travail demandé

1. Décompresse `Ippersiel_Collab_site_finalb.zip` et inspecte le site existant.
2. Observe entièrement les deux références visuelles.
3. Conserve une copie intacte de la version reçue.
4. Implémente la nouvelle direction dans le vrai HTML, CSS et JavaScript.
5. Vérifie visuellement le site dans un navigateur aux formats ordinateur, tablette et téléphone.
6. Teste le défilement complet, y compris en sens inverse.
7. Teste la réduction des mouvements, le menu, les ancres, les liens et le formulaire.
8. Corrige les erreurs console, les débordements, les textes masqués et les transitions brusques.
9. Compare le texte final au HTML de départ afin de confirmer qu’aucun mot approuvé n’a changé ou disparu.
10. Produis un nouveau ZIP du projet complet, directement téléchargeable et déployable.

## Définition de terminé

Le travail n’est pas terminé si tu fournis seulement un plan, quelques extraits de code ou une seule section. Il est terminé lorsque la page complète est reconstruite, que les transitions fonctionnent réellement, que le site est solide sur mobile et que le ZIP final a été créé.

À la fin, indique seulement :

- le chemin du projet modifié;
- les fichiers principaux modifiés;
- les tests réellement effectués;
- le lien vers le ZIP final;
- les rares éléments qui nécessitent encore un jugement visuel humain.

Commence maintenant et poursuis de façon autonome jusqu’au résultat final.
