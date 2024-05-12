import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'
import Paragraph from '../components/articles/Paragraph'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'

import { getArticle } from '../data'

const ItsSlowToChange: FC = () => {
  const article = useMemo(() => getArticle('its-slow-to-change'), [])
  
  return (
    <Box>
      <ArticleHeader article={article} />
      <Paragraph>
        content will go here...
      </Paragraph>
    </Box>
  )
}

export default ItsSlowToChange