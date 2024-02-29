import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'

import { getArticle } from '../data'

const MediaManipulation: FC = () => {
  const article = useMemo(() => getArticle('media-manipulation'), [])
  return (
    <Box>
      <ArticleHeader
        article={ article }
      />
    </Box>
  )
}

export default MediaManipulation