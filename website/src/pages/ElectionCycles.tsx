import React, { FC } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'

import { getArticle } from '../data'

const ARTICLE = getArticle('election-cycles')

const ElectionCycles: FC = () => {
  return (
    <Box>
      <ArticleHeader
        article={ ARTICLE }
      />
    </Box>
  )
}

export default ElectionCycles