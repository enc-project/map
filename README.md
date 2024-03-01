# enc project

Trust in politics is eroding.
Politicans seem to say one thing but then do another.

Our [political system](https://en.wikipedia.org/wiki/1708_British_general_election) was invented [before electricity](https://en.wikipedia.org/wiki/Electricity).
Now we have the Internet, blockchains and generative AI.

We can change this, if enough of us want to.

> I know that I know nothing ([plato](https://en.wikipedia.org/wiki/I_know_that_I_know_nothing))

We don't presume to tell you how to reform the political system.

At the same time:

> to get the right answer on the Internet, first put the wrong answer ([cunningham](https://meta.wikimedia.org/wiki/Cunningham%27s_Law))

So, here are some wrong answers to get the conversation started.

If you have any opinions, PLEASE tell your friends, your family, your colleagues.

 * [red, green OR blue](articles/red-green-OR-blue.md)
 * [it's so slow](articles/election-cycle.md)
 * [perspectives matter](articles/perspective-generator.md)
 * [media manipulation](articles/media-manipulation.md)
 * [data driven decisions](articles/data-driven-decisions.md)

# how to contribute

Start talking to your friends, your family, your colleagues.  Discuss why you dis-agree with this, or agree.

Share these pages on your socials, and ask for feedback.

The solutions do not lie within these pages, they lie within the conversations that these pages start.

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