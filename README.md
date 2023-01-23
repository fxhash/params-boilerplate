# fx(params) boilerplate

A boilerplate to automate and ease the creation of Generative Tokens on fx(hash) using fx(params).

## Scope
- provide a local environment in which you can iterate and use modern features from the javascript ecosystem
- interactive environment to test your project with different params called fx(lens)
- automate the creation of a .zip file ready to be uploaded on fxhash

## Prerequisitess

- node >= 14
- npm >= 6.14.4

## Getting started

- Clone this repository: `npx degit fxhash/params-boilerplate your_project_name`
- Install dependencies and fx(lens): `npm install`

## Start developing your token project

- `npm start:project`: Starts a local http server with live reloading enabled.
- Visit `http://localhost:3301/` to see your project in the browser

## Start your project with fx(lens)

- `npm start`: Starts two local http server
	- `localhost:3301` serves your project with live reloading
	- `localhost:3000` serves fx(lens) you can connect to a token
- Visìt `http://localhost:3300/?target=http://localhost:3301` to see your local project within fx(lens)


## Publish your project

- `npm run build`: Will create `dist-zipped/project.zip` file

Go to https://fxhash.xyz/sandbox/ and upload the project.zip file in there to see if it works properly. If your token does not work properly, you can iterate easily by updating your files, running $ npm run build again, and upload the zip file again.

Finally, you can mint your token using the same `project.zip` file.
