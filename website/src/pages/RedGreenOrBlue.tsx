import React, { FC } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'
import Paragraph from '../components/articles/Paragraph'

import { getArticle } from '../data'
import { getResponsiveSxAmount } from '../styles'

const ARTICLE = getArticle('red-green-or-blue')

const RedGreenOrBlue: FC = () => {
  return (
    <Box>
      <ArticleHeader
        article={ ARTICLE }
      />
      <Paragraph>
        Test
      </Paragraph>
    </Box>
  )
}

export default RedGreenOrBlue