import {
  IArticle,
} from './types'

export const ARTICLES: IArticle[] = [
  {
    routeName: 'it-does-not-represent-me',
    title: 'It does not represent me',
    description: 'I feel that no party’s manifesto aligns with me exactly',
    image: '/img/articles/it-does-not-represent-me.webp',
  },
  {
    routeName: 'its-slow-to-change',
    title: `It's slow to change`,
    description: 'I feel I want to vote to change, long before an election',
    image: '/img/articles/its-slow-to-change.webp',
  },
  {
    routeName: 'its-not-trustworthy',
    title: `It's not trustworthy`,
    description: 'I feel under-equipped to make informed voting decisions and do not know what to trust',
    image: '/img/articles/its-not-trustworthy.webp',
  },
]

export const getArticle = (id: string): IArticle => {
  const article = ARTICLES.find(article => article.routeName === id)
  if(article) return article
  return {
    routeName: 'home',
    title: 'Home',
    description: 'Home',
    image: '/img/logo.png',
  }
}