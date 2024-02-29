import React, { FC } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'

import { getArticle } from '../data'

const ARTICLE = getArticle('data-driven-decisions')

const DataDrivenDecisions: FC = () => {
  return (
    <Box>
      <ArticleHeader
        article={ ARTICLE }
      />
    </Box>
  )
}

export default DataDrivenDecisions