import {
  IArticle,
} from './types'

export const ARTICLES: IArticle[] = [
  {
    routeName: 'red-green-or-blue',
    title: 'red, green OR blue?',
    description: 'We have to vote for a single party that collapses our entire political viewpoint into a single colour.  Perhaps we could use technology to vote for panels for experts across lots of topics instead?',
    image: '/img/article-headers/red-green-blue.png',
  },
  {
    routeName: 'election-cycles',
    title: 'It\'s sooo slow...',
    description: 'We only get to vote on a party once every 5 years.  Amazon deploys new code every 11.7 seconds.  Perhaps we could use technology to vote on things more often?',
    image: '/img/article-headers/election-cycles.jpg',
  },
  {
    routeName: 'media-manipulation',
    title: 'Media manipulation',
    description: 'Billionaire funded media companies use algorithms to manipulate us into clicking on things.  Perhaps we could use technology to make it easier to see the truth?',
    image: '/img/article-headers/media-manipulation.jpg',
  },
  {
    routeName: 'perspective-generator',
    title: 'Perspective generator',
    description: 'Debates are becoming increasingly polorised and social media echo chambers do not help.  Perhaps we could use technology to see things from other people\'s perspectives?',
    image: '/img/article-headers/perspective-generator.jpg',
  },
  {
    routeName: 'data-driven-decisions',
    title: 'Data Driven Decisions',
    description: 'Politicians make populist decisions to get re-elected, they sell these decisions using emotional rhetoric.  Perhaps we could use the scientific method to make decisions using data and tests?',
    image: '/img/article-headers/data-driven-decisions.jpg',
  },
]