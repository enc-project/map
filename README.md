# how to develop

Instructions for contributing to the development of this project.

There are various ways to help:

 * Create an [issue](https://github.com/enc-project/map/issues) if you have comments or feedback on the website
 * Create or edit an [article](https://github.com/enc-project/map/tree/main/articles) - articles becomes long-form content on the website
 * Create or edit a [note](https://github.com/enc-project/map/tree/main/notes) - notes might become articles or not, use the notes folder as a scratch-pad for ideas
 * Develop on the [website](https://github.com/enc-project/map/tree/main/website) - the website is a static site, built with [vite](https://vitejs.dev)

## running website locally

```bash
git clone git@github.com:enc-project/map.git
cd map/website
yarn install
yarn dev
```

This will open a server listening to http://localhost:8080 (or possibly a different port if 8080 is already in use).

## contributing to the website

If you make changes to the website, please do so on a branch, and then create a pull request as the production website is currently setup to deploy on pushes to the `main` branch.