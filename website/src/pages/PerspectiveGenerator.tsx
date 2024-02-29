import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'

import { getArticle } from '../data'

const PerspectiveGenerator: FC = () => {
  const article = useMemo(() => getArticle('perspective-generator'), [])
  return (
    <Box>
      <ArticleHeader
        article={ article }
      />
    </Box>
  )
}

export default PerspectiveGenerator