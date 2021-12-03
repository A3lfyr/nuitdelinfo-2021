# WikiSafe

Outil de recherche des Sauveteurs en Mer

Lien de l'application : https://upssi.net

Une maquette plus complète est disponible sur le lien suivant : https://www.figma.com/file/L8dvnxbLfGWW9NBN2NAQ3R/N2I-2021?node-id=6%3A23. Cette dernière comprend des points que l'ont n'a pas eu le temps de développer pendant la nuit, dont des notions d'accessibilités.

## Installation

Notre applications se divise en plusieurs parties : un frontend développé en Vue.JS, une API RESTFUL (backend) développé en Node JS ainsi qu'une base de donnée MongoDB. La base de donnée est déjà pré-rempli et hébergé sur un serveur distant, une documentations est disponible dans le dossier `backend/bdd`.

Les informations d'installations seront données pour un système unix.

### Backend

Prérequis :

- npm
- nodejs

Dans un premier temps il faut installer les packages :

```bash
$ cd backend/api/
$ npm install
```

Puis on peut lancer l'application :

```bash
$ npm start
```

### Frontend

Prérequis :

- npm
- nodejs

Dans un premier temps il faut installer les packages :

```bash
$ cd frontend
$ npm install
```

Puis on peut lancer l'application :

```bash
$ npm run serve
```
