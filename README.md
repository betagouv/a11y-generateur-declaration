# Générateur de déclaration d'accessibilité

Cet outil est est une adaptation libre du projet [WAI-statement](https://github.com/w3c/wai-statements) et du travail initié sur [generator-standalone](https://github.com/jorgeponto/generator-standalone).

Il est à destination des startups d'états de [BetaGouv](https://beta.gouv.fr/) pour les accompagner dans leur [démarche d'accessibilité](https://doc.incubateur.net/design/ressources-design/kit-accessibilite/).



# Attributs

Les attributs permettent de générer l'attestation : 
- data-if="accstmt_date" : n'affiche le bloc que si une réponse existe pour la question "accstmt_date"
- data-printfilter="filter" : transforme la réponse (filtres acceptés : capitalize, lowercase)
- data-print="accstmt_date" data-printdefault="DATE" : affiche la réponse à la question accstmt_date, avec la variable DATE par défaut.