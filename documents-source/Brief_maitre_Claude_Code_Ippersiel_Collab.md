# BRIEF MAÎTRE — SITE IPPERSIEL COLLAB

## Mandat

Tu dois concevoir et développer le site officiel d’Ippersiel Collab pour Catherine Ippersiel. Il s’agit d’un site vitrine d’une seule page, en français, destiné à présenter son expertise et à générer des prises de contact qualifiées.

Ce projet doit devenir une pièce de portfolio exceptionnelle. Le résultat doit être nettement supérieur à un site de consultante générique : moderne, éditorial, distinctif, haut de gamme, humain, crédible et parfaitement maîtrisé sur mobile comme sur ordinateur.

Le site précédent réalisé pour le CIEDJ a été apprécié. Ici, il faut atteindre un niveau visuel et expérientiel supérieur tout en respectant entièrement l’identité et les contenus fournis par Catherine.

## Règle de départ

Avant de coder :

1. inspecte le dépôt, les fichiers existants et tous les actifs disponibles;
2. repère la photo professionnelle, les logos noir et blanc, le fichier vectoriel `.ai` et le cahier maître de contenus;
3. conserve l’infrastructure existante si elle est saine;
4. explique brièvement l’approche proposée et la structure des fichiers;
5. ensuite, réalise une première version complète et fonctionnelle sans attendre d’autres validations, sauf si une information bloque réellement l’exécution.

Ne remplace aucun contenu approuvé par du faux texte. Ne crée ni témoignage, ni client, ni prix, ni statistique, ni partenaire fictif.

---

## 1. Objectif stratégique

Le visiteur doit comprendre en moins de 10 secondes :

- qui est Catherine Ippersiel;
- qu’elle travaille en communications stratégiques et collaborations d’impact;
- qu’elle aide à clarifier, structurer et faire avancer des projets utiles, sensibles ou complexes;
- qu’il peut communiquer directement avec elle.

Le site doit inspirer simultanément : confiance, intelligence, clarté, mouvement et proximité.

Publics principaux : organisations, professionnels, entrepreneurs et porteurs de projets à portée sociale ou collective.

Action principale : **Parlons de votre projet** → section Contact.

---

## 2. Concept créatif

### Idée directrice : « Mettre les idées en mouvement »

Construire une expérience éditoriale où les mots, les lignes et les blocs semblent se mettre en ordre au fil du défilement. Le mouvement doit illustrer le travail de Catherine : partir d’une matière complexe, faire ressortir l’essentiel, relier les bonnes personnes et transformer l’intention en action.

Le site ne doit pas ressembler à une agence numérique, à un thème WordPress ni à un produit SaaS. Il doit évoquer un croisement entre :

- une publication éditoriale contemporaine;
- un studio de stratégie reconnu;
- une personnalité forte et accessible;
- une initiative sociale ayant une preuve d’impact réelle.

### Impression recherchée

**Au premier regard :** audace typographique et maîtrise.

**En poursuivant :** clarté, profondeur, méthode et crédibilité.

**À la fin :** envie naturelle d’amorcer une conversation avec Catherine.

---

## 3. Direction artistique

### Palette obligatoire

- Noir carbone : `#0A0A0A`
- Blanc minéral : `#F2F3F5`
- Sarcelle vif : `#00A7A0`
- Orange vif : `#FF5A36`

Proportion générale : environ 80 % noir, blanc ou blanc minéral; 20 % d’accents colorés.

Utiliser les couleurs comme repères de sens et de navigation. Éviter les dégradés décoratifs. Sur les aplats sarcelle et orange, utiliser du texte noir pour conserver le caractère graphique et le contraste.

### Typographies

- Titres et messages courts : **Archivo**
- Textes courants, interface et formulaire : **Source Sans 3**

Charger les polices localement si possible. Prévoir des polices de remplacement stables.

### Langage visuel

- grandes compositions typographiques;
- grille éditoriale visible mais raffinée;
- numéros de sections et repères fins;
- lignes qui se rejoignent, cadres ou axes évoquant la collaboration;
- généreux espaces vides;
- alternance maîtrisée entre aplats noirs et fonds minéraux;
- photo noir et blanc utilisée comme pièce maîtresse, pas comme petite vignette;
- coins plutôt droits ou très légèrement arrondis;
- boutons francs et lisibles;
- aucune banque d’images générique.

Éviter absolument : mosaïque de cartes génériques, bulles flottantes, vagues abstraites, excès d’ombres, effets vitrés, icônes 3D, animations gadgets et esthétique « template IA ».

### Logo

Utiliser le logo vectoriel `.ai` si le flux de travail permet de le convertir proprement en SVG. Sinon, utiliser la version JPG appropriée en conservant ses proportions exactes. Ne jamais redessiner approximativement le logo. Prévoir la version noire sur fond clair et la version blanche sur fond noir.

---

## 4. Expérience et animations

Le mouvement doit être sobre, fluide et intentionnel :

- révélation typographique du H1, ligne par ligne;
- apparition légère des blocs au défilement;
- mots ou repères qui se déplacent de quelques pixels pour suggérer la mise en ordre;
- lignes de grille ou traits qui se dessinent au passage;
- transitions de couleur franches entre les grandes sections;
- chiffre « 10 000+ » spectaculaire et mémorable;
- effets de survol subtils sur les expertises, les besoins et les appels à l’action;
- indicateur de section active dans la navigation si cela reste élégant.

Le site doit rester rapide. Privilégier CSS et des animations légères. Utiliser une bibliothèque d’animation seulement si elle apporte une vraie valeur et ne fragilise pas le site.

Respecter `prefers-reduced-motion`. Aucune information ne doit dépendre d’une animation. Aucun scroll hijacking. Aucun délai artificiel au chargement.

---

## 5. Architecture de la page

### Navigation fixe

Logo à gauche. Liens : Expertise, Réalisations, Approche, À propos. Bouton contrasté : **Parlons de votre projet**.

Ancres :

- `#accueil`
- `#expertise`
- `#realisations`
- `#approche`
- `#a-propos`
- `#contact`

Sur mobile : logo à gauche, menu accessible à droite et appel à l’action dans le menu. Prévoir le bon décalage des ancres sous le menu fixe.

### Section 1 — Accueil / Hero

Surtitre : **COMMUNICATIONS STRATÉGIQUES**

H1 : **Des communications qui font avancer les choses.**

Introduction : **J’accompagne les organisations et les personnes qui portent des projets utiles, sensibles ou complexes afin de les rendre plus clairs, plus visibles et plus mobilisateurs.**

CTA : **Parlons de votre projet**

Direction proposée : premier écran presque plein format, à forte dominante noire ou minérale. Le H1 doit être massif et occuper deux ou trois lignes. Mettre le mot **avancer** en mouvement ou en couleur, sans nuire à la lecture. Intégrer la présence de Catherine avec un cadrage éditorial de sa photo; éviter le traditionnel portrait à droite dans une petite colonne.

### Section 2 — Positionnement / Manifeste

Repère : **CE QUE JE FAIS**

H2 : **Mettre les idées en ordre et le projet en marche.**

Texte :

**Une communication efficace éclaire un enjeu, rassemble les bonnes personnes et transforme une intention en action.**

**Chaque mandat commence par une lecture attentive du contexte. La stratégie, les contenus et les outils prennent ensuite une forme adaptée aux personnes concernées et aux résultats recherchés.**

Créer une composition qui donne physiquement l’impression que les éléments s’alignent ou se structurent au défilement.

### Section 3 — Expertise

Repère : **EXPERTISE**

H2 : **Trois leviers pour faire avancer un projet.**

Présenter les trois expertises comme trois chapitres éditoriaux numérotés, pas comme trois cartes SaaS identiques.

#### 01 — Stratégie et positionnement

**Définir une direction claire, dégager l’essentiel et construire des messages qui soutiennent vos objectifs.**

- Stratégies et plans de communication
- Diagnostic de communication
- Positionnement et messages clés
- Analyse des publics, des enjeux et des risques
- Accompagnement lors de situations sensibles

#### 02 — Contenus et rayonnement

**Rendre un sujet accessible, crédible et suffisamment fort pour rejoindre les publics concernés.**

- Rédaction, révision et langage clair
- Architecture et contenus Web
- Relations médias
- Préparation aux entrevues et aux prises de parole
- Contenus pour les médias sociaux
- Outils d’information et de sensibilisation

#### 03 — Projets et collaborations

**Relier les bonnes personnes et transformer une intention en projet cohérent, mobilisateur et réalisable.**

- Conception et structuration de projets
- Mobilisation de partenaires
- Coordination de projets de communication
- Consultation et concertation
- Conception de rencontres et d’activités
- Accompagnement d’initiatives à portée sociale

Sur ordinateur, on peut utiliser une mise en page alternée, un changement d’aplat ou un léger effet de section épinglée si celui-ci demeure naturel. Sur mobile, chaque expertise doit rester simple et parfaitement lisible.

### Section 4 — Reconnaissance du besoin

Repère : **QUAND FAIRE APPEL À IPPERSIEL COLLAB**

Afficher chaque situation sur une ligne numérotée, généreuse et interactive :

- Vous portez un projet complexe que vous souhaitez rendre plus clair.
- Votre organisation prépare une prise de parole importante.
- Un projet mobilise plusieurs équipes ou partenaires.
- Vos communications gagneraient à suivre une direction plus cohérente.
- Votre équipe souhaite ajouter une ressource stratégique expérimentée.
- Votre cause mérite de rejoindre de nouveaux publics.

### Section 5 — Formes d’accompagnement

H2 : **Un accompagnement adapté à la réalité du projet.**

**Mandat ciblé** — Clarifier un besoin, préparer une prise de parole ou produire un outil précis.

**Projet structurant** — Concevoir et déployer une démarche de communication comprenant plusieurs étapes ou partenaires.

**Accompagnement continu** — Agir comme ressource stratégique auprès d’une équipe ou d’une direction sur une période définie.

Mention : **Chaque mandat fait l’objet d’une proposition adaptée à sa portée. Une tarification modulée peut être offerte aux organismes à but non lucratif selon le contexte et les ressources disponibles.**

Créer une présentation précise et élégante qui aide à se projeter dans un mandat, sans transformer ces options en forfaits commerciaux.

### Section 6 — Réalisation phare / Bagage de vie

Repère : **RÉALISATION CHOISIE**

H2 : **Une idée simple. Un impact concret.**

Projet : **Bagage de vie**

Accroche : **Transformer une indignation en mouvement collectif.**

Texte : **Fondée par Catherine Ippersiel, Bagage de vie a mobilisé des partenaires dans plusieurs régions du Québec autour d’un geste concret pour préserver la dignité des jeunes placés. Depuis 2019, l’initiative a permis de remettre plus de 10 000 bagages à des jeunes pris en charge par la protection de la jeunesse.**

- Contribution : conception, positionnement, relations médias et déploiement régional
- Mobilisation : fondations, communautés, partenaires et médias
- Portée : plusieurs régions du Québec

Le chiffre **10 000+** doit devenir l’un des moments visuels les plus puissants du site. Il doit toujours rester accompagné de son explication. Ne pas inventer d’autres chiffres. Prévoir une structure technique évolutive permettant d’ajouter plus tard une autre réalisation.

### Section 7 — Approche

Repère : **MA FAÇON DE TRAVAILLER**

H2 : **Collab traduit ma façon de travailler.**

#### 01 — Comprendre le contexte

Écouter, questionner et cerner les enjeux, les personnes concernées et les résultats recherchés.

#### 02 — Rendre l’essentiel visible

Hiérarchiser l’information, trouver les mots justes et préserver toute la richesse du sujet.

#### 03 — Faire avancer concrètement

Transformer la réflexion en décisions, en outils et en actions que les équipes peuvent réellement utiliser.

Conclusion : **Selon la nature du mandat, je travaille directement avec vos équipes ou je réunis des collaborateurs spécialisés. Cette souplesse permet de bâtir la bonne combinaison d’expertises autour de chaque projet.**

Visualiser ces trois mouvements comme une progression claire, sans diagramme corporatif banal.

### Section 8 — À propos

Repère : **À PROPOS**

Nom : **Catherine Ippersiel**

Titre : **Stratège en communications d’impact, projets et collaborations**

Biographie :

**Depuis plus de dix ans, j’accompagne des organisations, des entrepreneurs et des projets à portée sociale dans le développement de leur positionnement, de leurs communications et de leurs collaborations.**

**Mon parcours en communications publiques, en relations médias et en conseil stratégique m’amène à intervenir dans des environnements complexes où les mots, le contexte et les parties prenantes comptent particulièrement.**

**J’aime comprendre rapidement un univers, faire ressortir ce qui compte réellement et transformer une matière dense en communications claires, humaines et structurées.**

**J’ai également fondé Bagage de vie, une initiative citoyenne qui a permis de remettre plus de 10 000 bagages à des jeunes pris en charge par la protection de la jeunesse au Québec.**

**À travers Ippersiel Collab, je transforme des idées en stratégies, en collaborations et en projets capables de produire un impact concret.**

Utiliser la photographie professionnelle noir et blanc comme un grand portrait éditorial, idéalement dans une composition asymétrique ou pleine hauteur. Respecter le cadrage, ne pas appliquer de filtre coloré qui dénature le portrait et assurer un bon point focal sur mobile.

Ajouter le lien LinkedIn seulement lorsque l’URL exacte est fournie. Ne pas inventer l’adresse.

### Section 9 — Contact

Repère : **UN PROJET EN TÊTE?**

H2 : **Commençons par une conversation.**

Texte : **Une première conversation permet de préciser le besoin, le contexte et la forme d’accompagnement la plus utile. Écrivez-moi quelques lignes sur votre projet et je prendrai contact avec vous.**

Coordonnées :

- `catherine@ippersielcollab.ca`
- Québec — Mandats réalisés au Québec et à distance

Boutons :

- **Écrire à Catherine**
- **Voir mon profil LinkedIn** — masquer ou désactiver proprement tant que l’URL exacte n’est pas fournie.

Formulaire :

- Nom — obligatoire
- Organisation — facultatif
- Courriel — obligatoire
- Parlez-moi de votre projet — contexte, objectif et échéancier
- Bouton : **Envoyer ma demande**

Sous le formulaire : **Les renseignements transmis servent au suivi de votre demande.**

Succès : **Merci. Votre message a bien été envoyé.**

Erreur : **Une erreur est survenue. Vous pouvez écrire directement à catherine@ippersielcollab.ca.**

Le formulaire doit fonctionner réellement. Utiliser une solution simple, sécuritaire et compatible avec l’hébergement choisi. Ajouter validation, prévention minimale du spam, états de chargement, message de succès et message d’erreur. Ne pas exposer de clé secrète dans le code public.

### Pied de page

- Ippersiel Collab
- Communications stratégiques et collaborations d’impact
- catherine@ippersielcollab.ca
- ippersielcollab.ca
- Québec
- © 2026 Ippersiel Collab. Tous droits réservés.
- Politique de confidentialité
- LinkedIn

Responsable de la protection des renseignements personnels : Catherine Ippersiel — catherine@ippersielcollab.ca.

Créer une vraie page ou modale accessible de politique de confidentialité adaptée aux technologies réellement utilisées. Ne pas prétendre utiliser des outils absents.

---

## 6. Exigences techniques et qualité

Choisir une base moderne, simple à entretenir et adaptée au dépôt existant. Ne pas changer de framework sans raison. Le résultat final doit :

- être entièrement responsive;
- fonctionner sur Chrome, Safari, Firefox et Edge récents;
- être impeccable sur iPhone et Android;
- conserver un texte courant d’au moins 18 px sur ordinateur et 16 px sur mobile;
- utiliser une structure HTML sémantique;
- permettre une navigation complète au clavier;
- montrer clairement le focus des liens, boutons et champs;
- respecter les contrastes WCAG AA;
- respecter `prefers-reduced-motion`;
- offrir des zones tactiles suffisamment grandes;
- optimiser les images en AVIF/WebP avec dimensions définies et chargement approprié;
- éviter les sauts de mise en page;
- viser d’excellents résultats Lighthouse, particulièrement performance, accessibilité et SEO;
- ne produire aucune erreur dans la console;
- ne contenir aucun lien mort ni bouton décoratif sans action.

Créer des composants réutilisables sans surarchitecturer. Conserver les contenus dans une structure facile à modifier. Ajouter des commentaires uniquement là où ils aident réellement à maintenir le projet.

---

## 7. SEO, métadonnées et partage

Un seul H1 : **Des communications qui font avancer les choses.**

Utiliser des H2 pour les grandes sections et des H3 pour les expertises, les formes d’accompagnement et les étapes de l’approche.

Métadonnées :

- Titre SEO : **Ippersiel Collab | Communications stratégiques et d’impact**
- Méta-description : **Ippersiel Collab accompagne les organisations et les porteurs de projets en stratégie de communication, rédaction, relations médias, langage clair, coordination et mobilisation.**
- URL canonique : `https://ippersielcollab.ca/`
- Nom du site : Ippersiel Collab
- Langue : `fr-CA`

Ajouter les métadonnées Open Graph et les données structurées pertinentes de type `ProfessionalService` ou `Person`, en n’inscrivant que des informations vérifiées. Créer un favicon cohérent à partir de l’identité, sans déformer le logo.

Textes alternatifs :

- Logo : « Ippersiel Collab »
- Portrait : « Catherine Ippersiel, stratège en communications d’impact »
- Éléments purement décoratifs : attribut `alt` vide

---

## 8. Mesure et protection des renseignements personnels

Prévoir une mesure sobre et respectueuse de la vie privée pour :

- clics sur l’adresse courriel;
- envois du formulaire;
- clics LinkedIn;
- consultation de la section Réalisations;
- provenance des demandes qualifiées lorsque disponible légalement.

Ne pas installer automatiquement de traceur envahissant. Documenter précisément toute collecte. La politique de confidentialité doit correspondre aux outils réellement intégrés et aux données réellement recueillies.

---

## 9. Critères visuels non négociables

La première version ne sera pas considérée terminée si elle ressemble à un assemblage de sections standards. Avant de conclure :

1. vérifier que le hero est mémorable même sans animation;
2. vérifier que la typographie paraît conçue, pas seulement grossie;
3. vérifier que chaque changement de section crée un nouveau rythme;
4. vérifier que le chiffre 10 000+ constitue un moment fort;
5. vérifier que la photo de Catherine est traitée avec respect et présence;
6. vérifier que le site reste professionnel pour une direction d’organisation;
7. vérifier que la couleur soutient le message sans dominer Catherine;
8. vérifier qu’aucun effet ne ralentit ou ne complique la lecture;
9. vérifier la cohérence exacte entre ordinateur, tablette et mobile;
10. éliminer tout élément qui paraît générique, gratuit ou généré automatiquement.

---

## 10. Processus d’exécution attendu

### Étape A — Audit et proposition

- Inspecter tous les actifs et le code existant.
- Résumer la direction choisie en 8 à 12 points.
- Identifier uniquement les informations réellement manquantes : URL LinkedIn, destination finale du formulaire et, s’il y a lieu, visuels autorisés de Bagage de vie.

### Étape B — Construction complète

- Réaliser toutes les sections.
- Intégrer les contenus exacts.
- Construire le responsive en même temps que la version ordinateur.
- Brancher toutes les interactions réelles.
- Préparer la politique de confidentialité selon les outils retenus.

### Étape C — Validation visuelle

- Lancer le site localement.
- Produire des captures pleine page aux formats ordinateur, tablette et mobile.
- Inspecter chaque section : alignement, débordement, lisibilité, rythme, contraste et cadrage photo.
- Corriger les problèmes observés avant de présenter la version.

### Étape D — Validation technique

- Exécuter le lint, le build et les tests existants.
- Vérifier tous les liens, ancres, états du formulaire et interactions clavier.
- Vérifier l’absence d’erreurs console.
- Auditer performance, accessibilité et SEO.
- Corriger tout échec pertinent.

### Étape E — Livraison de la V1

Présenter :

- ce qui a été construit;
- la logique de la direction artistique;
- les captures ordinateur et mobile;
- les résultats des vérifications;
- les trois décisions encore requises, s’il en reste;
- les commandes simples pour lancer et déployer le site.

Ne pas déclarer le projet terminé seulement parce que le code compile. Le livrable doit être visuellement vérifié, fonctionnel et prêt à être montré à Catherine.

---

## 11. Principe éditorial final

La voix demeure claire, affirmative, humaine et concrète. Employer naturellement : clarifier, structurer, relier, mobiliser, accompagner, faire avancer, rendre accessible et donner une direction.

Éviter les expressions creuses comme « propulser vers le sommet », « révolutionner », « catalyseur de changement », « solution 360 » ou « voies inexplorées ».

Chaque phrase doit présenter une contribution, une action ou une possibilité. Le site doit donner l’impression que Catherine possède la maturité nécessaire pour comprendre les situations complexes et l’énergie nécessaire pour les faire avancer.

