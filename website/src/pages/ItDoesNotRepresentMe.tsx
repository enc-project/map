import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'
import Paragraph from '../components/articles/Paragraph'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'

import { getArticle } from '../data'

const ItDoesNotRepresentMe: FC = () => {
  const article = useMemo(() => getArticle('it-does-not-represent-me'), [])
  
  return (
    <Box>
      <ArticleHeader article={article} />
      <Paragraph>
        Propaganda is a powerful tool. The world has seen (many times) that you can sway an entire population through narrative and storytelling.
      </Paragraph>
    </Box>
  )
}

export default ItDoesNotRepresentMe