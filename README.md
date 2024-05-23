# Générateur de déclaration d'accessibilité

Cet outil est est une adaptation libre du projet [WAI-statement](https://github.com/w3c/wai-statements) et du travail initié sur [generator-standalone](https://github.com/jorgeponto/generator-standalone).

Il est à destination des startups d'états de [BetaGouv](https://beta.gouv.fr/) pour les accompagner dans leur [démarche d'accessibilité](https://doc.incubateur.net/design/ressources-design/kit-accessibilite/).


## Installation en local

```
python3 -m http.server
```

## Génération de la déclaration en HTML

Le formulaire `#create_accessibility_statement_form` contient les différens champs.

La section `.preview` contient la prévisualisation de la déclaration. Elle est remplie grâce aux réponses :
- `<span data-print="accstmt_date" data-printdefault="DATE"></span>` : affiche la réponse à la question `accstmt_date`, avec la variable `DATE` par défaut.
- L'attribut `data-if="accstmt_date"` affiche le bloc uniquement que si une réponse existe pour la question `accstmt_date`
- L'attribut `data-printfilter="filter"` transforme la réponse. Les filtres acceptés sont `capitalize` et `lowercase`.

