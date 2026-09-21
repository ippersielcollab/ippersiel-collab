# Site Ippersiel Collab

Site vitrine d’une seule page pour Catherine Ippersiel — communications
stratégiques et collaborations d’impact.

Tout le contenu publié provient du **cahier maître de contenus** et du **brief**
fournis par Catherine. Aucun texte, chiffre, témoignage ou partenaire n’a été
inventé.

---

## 1. Où se trouvent les fichiers

| Dossier | Contenu |
|---|---|
| `site/` | **le site publié** — c’est ce dossier, et lui seul, qui est mis en ligne |
| `site/index.html` | la page principale, avec tous les textes |
| `site/css/site.css` | toute la mise en forme |
| `site/js/site.js` | les comportements : menu, révélations, compteur, formulaire |
| `site/assets/img/` | la photo de Catherine, déclinée en trois largeurs |
| `site/assets/logo/` | le logo en vectoriel, plus l’icône d’onglet |
| `site/assets/fonts/` | les polices Archivo et Source Sans 3, hébergées ici |
| `actifs-sources/` | les fichiers originaux, hors ligne : logo vectoriel, logos JPG, photo |
| `documents-source/` | le brief et le cahier maître de contenus de Catherine |
| `outils/` | le gabarit qui sert à régénérer l’image de partage |
| `apercus/` | les captures du site livré, pour montrer le résultat |

Un second document, `GUIDE-MODIFICATIONS.md`, indique la ligne exacte où changer
chaque texte.

---

## 2. Voir le site sur votre ordinateur

1. Dans l’onglet **Terminal**, à côté de cette conversation, placez-vous dans le
   dossier du projet et lancez le petit serveur local :

```bash
cd /Users/matthieugariepy/Projects/IppersielCollab/site && python3 -m http.server 8788
```

2. Ouvrez ensuite votre navigateur à l’adresse `http://127.0.0.1:8788`.
3. Pour arrêter le serveur, revenez dans le Terminal et appuyez sur `Ctrl` + `C`.

Aucune installation n’est nécessaire : le site est fait de fichiers simples, sans
étape de compilation.

---

## 3. Modifier un texte

1. Ouvrez `site/index.html`.
2. Cherchez la phrase à changer : elle s’y trouve telle qu’elle apparaît à
   l’écran.
3. Enregistrez, puis rechargez la page dans le navigateur.

Les textes ne sont pas dispersés : chaque section du fichier porte un commentaire
qui indique son numéro et son nom (`SECTION 03 · EXPERTISE`, par exemple).

---

## 4. Mettre le site en ligne

Le site est prêt pour **Netlify**, qui traite aussi le formulaire sans qu’aucune
clé secrète n’apparaisse dans le code.

1. Créez un compte sur netlify.com.
2. Glissez-déposez le dossier `site/` dans la zone de dépôt de Netlify, ou
   connectez le dépôt de code si vous en créez un.
3. Le fichier `netlify.toml` à la racine indique déjà quoi publier (`site/`),
   ainsi que les en-têtes de sécurité et de cache.
4. Dans Netlify, section **Forms**, vous verrez apparaître le formulaire
   « contact ». Ajoutez-y l’adresse `catherine@ippersielcollab.ca` comme
   destinataire des notifications.
5. Branchez enfin le nom de domaine `ippersielcollab.ca`.

### Utiliser un autre service que Netlify

Ouvrez `site/js/site.js` et inscrivez l’adresse de réception à la première
variable :

```js
var ENDPOINT_FORMULAIRE = 'https://formspree.io/f/votre-identifiant';
```

Laissée vide, cette variable garde le mode Netlify.
**Si vous changez d’hébergeur, corrigez aussi le point 05 de la page
`site/politique-confidentialite.html`**, qui nomme Netlify.

---

## 5. Régénérer l’image de partage

L’image affichée quand le lien est partagé sur LinkedIn ou par message se trouve
dans `site/assets/img/partage-ippersiel-collab.jpg`. Son gabarit est
`outils/gabarit-image-partage.html`.

Pour la refaire après un changement de texte, dans l’onglet **Terminal** :

1. Lancez un serveur **à la racine du projet** (et non dans `site/`) :

```bash
python3 -m http.server 8788
```

2. Dans un second onglet du Terminal, produisez l’image :

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --window-size=1200,630 --screenshot=/tmp/partage.png --virtual-time-budget=5000 http://127.0.0.1:8788/outils/gabarit-image-partage.html
```

3. Convertissez-la et remplacez l’ancienne :

```bash
sips -z 630 1200 /tmp/partage.png -s format jpeg -s formatOptions 86 --out /Users/matthieugariepy/Projects/IppersielCollab/site/assets/img/partage-ippersiel-collab.jpg
```

Plus simple : demandez-le à Claude Code, qui refera le rendu et l’optimisation.

---

## 6. Mesure d’audience et vie privée

Aucun traceur n’est installé et aucun témoin n’est déposé. Les polices sont
hébergées sur le site : le navigateur ne contacte donc aucun service externe.

Le code prévoit déjà les points de mesure (clics sur le courriel, envois du
formulaire, consultation de la section Réalisations, clics LinkedIn). Ils ne
transmettent rien tant qu’aucun outil n’est ajouté. Pour activer une mesure
respectueuse de la vie privée, il suffit d’ajouter le script de Plausible dans
`site/index.html` — **puis de mettre à jour la politique de confidentialité**,
qui affirme aujourd’hui qu’aucun outil n’est installé.

---

## 7. Trois décisions à confirmer avec Catherine

1. **L’adresse exacte du profil LinkedIn.** Trois emplacements l’attendent, déjà
   écrits et mis en commentaire dans `site/index.html` : section À propos,
   boutons de la section Contact, pied de page. Il suffit de retirer les balises
   de commentaire et de remplacer `ADRESSE-EXACTE`.
2. **La destination finale du formulaire.** Netlify est configuré par défaut. À
   confirmer, car la politique de confidentialité le nomme.
3. **Les visuels de Bagage de vie.** La section Réalisations est aujourd’hui
   entièrement typographique. Si des photos autorisées existent, elles y
   trouveront naturellement leur place, et la structure permet déjà d’ajouter une
   deuxième réalisation.

---

## 8. Ce qui a été vérifié

- 96 textes approuvés comparés au mot près avec le cahier maître : tous présents.
- Aucune erreur dans la console, aucune requête en échec.
- Aucun défilement horizontal de 360 px à 1920 px.
- Contrastes conformes au niveau AA, navigation complète au clavier, indicateur
  de focus visible partout.
- `prefers-reduced-motion` respecté : sans animation, tout reste lisible.
- 198 ko au chargement, 7 requêtes, aucun décalage de mise en page (CLS 0).
