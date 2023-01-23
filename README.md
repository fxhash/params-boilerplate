# fx(params) boilerplate

A boilerplate to automate and ease the creation of Generative Tokens on fx(hash) using fx(params).

## Scope
- provide a local environment in which you can iterate and use modern features from the javascript ecosystem
- interactive environment to test your project with different params called fx(lens)
- automate the creation of a .zip file ready to be uploaded on fxhash

## Prerequisites

- node >= 14
- npm >= 6.14.4

## Getting started

- Clone this repository: `npx degit fxhash/params-boilerplate your_project_name`
- Install dependencies and fx(lens): `npm install`

## Start developing your token project

- `npm start:project`: Starts a local http server with live reloading enabled.
- Visit `http://localhost:3301/` to see your project in the browser

### fxhash snippet
fxhash requires you to use a javascript code snippet so that the platform can inject some code when tokens will be generated from your Generative Token. The code snippet is already in the `index.html` file of this boilerplate, so you don't have to add it yourself.

**During the development stages, the snippet will generate a random hash each time the page is refreshed**. This way, it helps you reproduce the conditions in which your token will be executed on fxhash.

The code snippet exposes the `$fx` object with the following structure: 

```typescript
{
	hash: String, // a random 64 characters hexadecimal string. This particular variable will be hardcoded with a static hash when someone mints a token from your GT
	rand: () => Number, // a PRNG function that generates deterministic PRN between 0 and 1. Simply use it instead of Math.random().
	preview: () => void, // trigger for capture module
	isPreview: Boolean, // is TRUE when capture module is running the project
	params: (definitions) => void, // sets your projects fx(params) definitions
	getParam: (id: string) => any, // get transformed fx(params) value by id
	getParams: () => any, // get all transformed fx(params) values
	getRawParam: (id: string) => any, // get raw fx(params) value by id 
	getRawParams: () => any, // get all raw fx(params) values
	getDefinitions: () => any, // get all fx(params) definitions
	features: (features) => void, // sets your projects features
	getFeature: (id: string) => any, // get feature by id
	getFeatures: () => any, // get all features
}
```

*The index.js of this boilerplate quickly demonstrates how to use whole "SDK"*.

## Start your project with fx(lens)

- `npm start`: Starts two local http server
	- `localhost:3301` serves your project with live reloading
	- `localhost:3000` serves fx(lens) you can connect to a token
- Visìt `http://localhost:3300/?target=http://localhost:3301` to see your local project within fx(lens)

## Publish your project

- `npm run build`: Will create `dist-zipped/project.zip` file

Go to https://fxhash.xyz/sandbox/ and upload the project.zip file in there to see if it works properly. If your token does not work properly, you can iterate easily by updating your files, running $ npm run build again, and upload the zip file again.

Finally, you can mint your token using the same `project.zip` file.
