#!/usr/bin/env python3
"""Génère la page de comparaison en sarcelle à partir du site de production.

La variante ne duplique aucun actif : elle réutilise la feuille de styles,
le script, les polices et les images du site, et n'ajoute qu'une
déclaration de couleur. Relancer ce script après toute modification du site.
"""
import re, sys, pathlib

racine = pathlib.Path(__file__).resolve().parent.parent
source = racine / 'site' / 'index.html'
surcharge = (racine / 'outils' / 'variante-sarcelle.css').read_text(encoding='utf-8')
cible = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else racine / 'publication' / 'variante-sarcelle'
cible.mkdir(parents=True, exist_ok=True)

h = source.read_text(encoding='utf-8')

# la page vit un cran plus bas : les ressources partagées remontent d'un niveau
h = re.sub(r'(href|src)="(css|js|assets)/', r'\1="../\2/', h)
h = re.sub(r'srcset="([^"]+)"', lambda m: 'srcset=' + '"' + m.group(1).replace('assets/', '../assets/') + '"', h)
h = h.replace('href="politique-confidentialite.html"', 'href="../politique-confidentialite.html"')
h = h.replace('action="merci.html"', 'action="../merci.html"')

# page de comparaison : hors index, et signalée comme telle
h = h.replace('<title>', '<meta name="robots" content="noindex, nofollow">\n<title>')
h = h.replace('| Communications stratégiques et d’impact</title>',
              '| Variante sarcelle</title>')
h = re.sub(r'<link rel="canonical"[^>]*>\n', '', h)

# la seule différence de fond
h = h.replace('<link rel="stylesheet" href="../css/site.css">',
              '<link rel="stylesheet" href="../css/site.css">\n<style>\n'
              + surcharge.strip() + '\n</style>')

(cible / 'index.html').write_text(h, encoding='utf-8')
print('variante écrite :', cible / 'index.html')
