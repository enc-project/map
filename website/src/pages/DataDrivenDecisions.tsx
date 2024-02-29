import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'

import { getArticle } from '../data'

const DataDrivenDecisions: FC = () => {
  const article = useMemo(() => getArticle('data-driven-decisions'), [])
  return (
    <Box>
      <ArticleHeader
        article={ article }
      />
    </Box>
  )
}

export default DataDrivenDecisions