# Générateur de déclaration d'accessibilité

## À propos

Cet outil est à destination des startups d'états de [BetaGouv](https://beta.gouv.fr/) pour les accompagner dans leur [démarche d'accessibilité](https://doc.incubateur.net/design/ressources-design/kit-accessibilite/).

C'est une adaptation libre du projet [WAI-statement](https://github.com/w3c/wai-statements) et du travail initié sur [generator-standalone](https://github.com/jorgeponto/generator-standalone), adapté aux spécificités françaises de la déclaration d'accessibilité.

## Installation en local

```
python3 -m http.server
```

## Génération de la déclaration en HTML

Le fichier `index.html` contient :
- le formulaire d'informations (`#create_accessibility_statement_form`)
- la prévisualisation de la déclaration (section `.preview`)


La déclaration est générée via des attributs :
- **Afficher une valeur** avec `data-print`. Par exemple, `<span data-print="accstmt_date"></span>` affiche la réponse à la question `#accstmt_date`.
- **Afficher une valeur par défaut** avec `data-printdefault`. Par exemple, `<span data-print="accstmt_date" data-printdefault="DATE"></span>` affiche la variable DATE si le champ `#accstmt_date` est resté vide.
- **Afficher un bloc seulement si la réponse est non-vide** avec `data-if`. Par exemple, `<span data-if="accstmt_date" data-print="accstmt_date" ></span>` affiche le bloc uniquement que si une réponse existe pour la question `#accstmt_date`. L'attribut `data-if="a,b"` affiche le bloc si au moins une valeur existe.
- **Transformer une réponse** avec `data-printfilter`. Par exemple `<span data-print="accstmnt_conformance" data-printfilter="lowercase">` affiche le taux de conformité en casse bas. Les filtres acceptés sont `capitalize` et `lowercase`.
