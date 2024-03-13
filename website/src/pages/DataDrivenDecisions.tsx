import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'
import Paragraph from '../components/articles/Paragraph'
import Quote from '../components/articles/Quote'
import ExternalLink from '../components/articles/ExternalLink'

import { getArticle } from '../data'

const DataDrivenDecisions: FC = () => {
  const article = useMemo(() => getArticle('data-driven-decisions'), [])

  return (
    <Box>
      <ArticleHeader article={article} />
      <HeadlineStrapline
        strapline="Introducing the scientific method in decision making."
      />
      <Paragraph>
        This article will introduce the scientific method, and how it can be used to make decisions.
      </Paragraph>
      <Paragraph>
        It will highlight that when policy is proposed, the main focus will be "how will this be tested".
      </Paragraph>
      <Paragraph>
        Then we can start to see the effectiveness of that policy and no single person feels like they have to "convince" people that their idea was the good idea.
      </Paragraph>
      <Box
        sx={{
          display: 'flex',
          width: '800px',
          flexDirection: 'column',
          justifyContent: 'center',
          mx: 'auto',
          mt: 5,
          mb: 7,
          }}
        >
        <Box
          component='img'
          src="/img/article-headers/data-driven-decisions-2.webp"
          alt="Data Driven Decisions"
          sx={{
            borderRadius: 2,
          }}
        />
        <caption>Mission Control Apollo 11 - via Midjourney</caption>
      </Box>
      <Quote
        author="source"
        url="https://en.wikipedia.org/wiki/Scientific_method"
      >
        The scientific method is a process for experimentation that is used to explore observations and answer questions.
      </Quote>
      <Paragraph>
        By applying this method to policy making, we can shift the focus from convincing to testing and evaluating based on data.
      </Paragraph>
      <ExternalLink href="https://en.wikipedia.org/wiki/Scientific_method">
        Learn more about the scientific method
      </ExternalLink>
    </Box>
  )
}

export default DataDrivenDecisions