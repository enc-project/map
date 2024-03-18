import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArticleHeader from '../components/articles/ArticleHeader'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'
import Paragraph from '../components/articles/Paragraph'
import Quote from '../components/articles/Quote'
import ExternalLink from '../components/articles/ExternalLink'

import { getArticle } from '../data'

const PerspectiveGenerator: FC = () => {
  const article = useMemo(() => getArticle('perspective-generator'), [])
  
  return (
    <Box>
      <ArticleHeader article={article} />
      <HeadlineStrapline
        strapline="Harnessing the power of diverse perspectives in decision-making."
      />
      <Paragraph>
        Social media algorithms, in a quest to maximise engagement, have got very good at showing you things that you agree with, and hiding the things that you don't.
      </Paragraph>
      <Paragraph>
        This polarises debate because each side becomes a radical version of itself.
      </Paragraph>
      <Paragraph>
        Now we have large language models, we might feed an issue through what we could call a "perspective generator".
      </Paragraph>
      <Quote
        author="source"
        url="https://example.com/more-info"
      >
        It's job is not to try to persuade you to change your mind, but to remind you that other people have different perspectives.
      </Quote>
      <Paragraph>
        Do you think that current social media algorithms are polarising debate?
      </Paragraph>
      <Paragraph>
        Do you think using a perspective generator would help debate?
      </Paragraph>
      <ExternalLink href="https://example.com/more-info">
        Learn more about perspective generators
      </ExternalLink>
    </Box>
  )
}

export default PerspectiveGenerator