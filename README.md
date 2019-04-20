# generator-standalone

This is an attempt to adapt the [WAI-statement](https://github.com/w3c/wai-statements) Generator to create the Portuguese a11y statement Generator.

## General idea of the PT a11y statement Generator

According to the PT legislation we'll have one a11y statement per each website or app.

We need:
- input model: [PT a11y statement](http://acessibilidade.tk/a11y/a11y-modelo-pt-input)
- to create sections with static text and/or questions;
- conditional text, questions or entire sections dependent of previous input variables;
- the sections can have a custom heading title or don't have any title (for example in the introduction we don't need a title);
- avoid abstract questions like "The website/app ..." and increase natural writing based on the previous answers: "The website ..."

To the questions, we need:
- input text fields (for example: name of the entity;
- checkbox fields and/or combobox fields (for example: yes or no; website or app);
- dynamic fields (for example: report(s) of study(ies); reasons for not conforming; sections conform, ...

Input/Output:
- input:
  - create a new a11y statement;
  - open an a11y statement from my computer or from a URL;
- output:
  - an a11y statement in HTML w/ all the variables mapped (get it directly from the content page - ideally - or "maybe" from a json referenced in the `<head>` of the page) that the entity can copy and paste in their website;
  - a json file w/ the variables that the entity can use to generate their personal a11y statement with one condition: the entity must to put in the a11y statement page the json data referenced in the `<head>` of the page;

