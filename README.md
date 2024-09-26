# maquetacion_web_alarma

Este proyecto es una aplicación Angular que utiliza Bootstrap y Angular Material

## Requisitos Previos

- [Node.js](https://nodejs.org/en/) (versión 20.x o superior)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Angular CLI](https://angular.io/cli) (versión 18 o superior)

```bash
npm install -g @angular/cli
npm install
```

Asegurarse de que en el archivo angular.json está configurado Bootstrap en las secciones de styles y scripts.
```bash
"assets": [
              "src/assets",  
              "src/favicon.ico",
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "@angular/material/prebuilt-themes/azure-blue.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.scss"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
            ]
          },

```

Para ejecutar la aplicación en modo de desarrollo:
```bash
ng serve
```
