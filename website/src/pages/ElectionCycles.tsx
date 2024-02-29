import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'

import { getArticle } from '../data'

const ElectionCycles: FC = () => {
  const article = useMemo(() => getArticle('election-cycles'), [])
  return (
    <Box>
      <ArticleHeader
        article={ article }
      />
    </Box>
  )
}

export default ElectionCycles