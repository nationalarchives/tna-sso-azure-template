# HTML Generator

This is a HTML template generator specifically designed and developed to work with Microsoft Azure ADB2C templates based on [TNA style guides](http://designguide.livelb.nationalarchives.gov.uk/palette/web-colours/ target="\_blank").

## Installation 🔌

This is a [Node.js](https://nodejs.org/en/ target="\_blank") application, which means you will require node to run the application.

Using your terminal navigate into the folder

`Azure-AD-B2C.CustomUI`

and run

`npm i`

## Making changes 🔧

All assets are in the `assets` folder inside the `Azure-AD-B2C.CustomUI` folder.
Make changes in the assets directory as this will be then need to be compiled into the output folder.

- Templates 🐶 - Contains all the template files
  - includes - This folder includes the main assets like header, footer etc.
  - mocks - these include partials for testing purposes only, to display each state of the application.
- sass - includes all the styles
- img - associated images
- output - final build files. ( Do not directly make changes here ).
- app.js - This is the app that transpiles the files from PUG => HTML

## Usage 🕹️

When making changes to a pug file, you will need to run the build command which is

```sh
npm run build
```

A default browser window will open to preview the changes been made.

When making changes to a scss file, you can run a watch command

```sh
npm run css-watch
```
