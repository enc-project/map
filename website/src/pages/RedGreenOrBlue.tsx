import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'
import Paragraph from '../components/articles/Paragraph'

import { getArticle } from '../data'
import { getResponsiveSxAmount } from '../styles'

const RedGreenOrBlue: FC = () => {
  const article = useMemo(() => getArticle('red-green-or-blue'), [])
  return (
    <Box>
      <ArticleHeader
        article={ article }
      />
      <Paragraph>
        Test
      </Paragraph>
    </Box>
  )
}

export default RedGreenOrBlue