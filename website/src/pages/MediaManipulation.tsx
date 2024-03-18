import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArticleHeader from '../components/articles/ArticleHeader'
import Paragraph from '../components/articles/Paragraph'
import Quote from '../components/articles/Quote'
import ExternalLink from '../components/articles/ExternalLink'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'

import { getArticle } from '../data'

const MediaManipulation: FC = () => {
  const article = useMemo(() => getArticle('media-manipulation'), [])
  
  return (
    <Box>
      <ArticleHeader article={article} />
      <HeadlineStrapline
        strapline="Navigating the complexities of media influence on public opinion."
      />
      <Paragraph>
        Propaganda is a powerful tool. The world has seen (many times) that you can sway an entire population through narrative and storytelling.
      </Paragraph>
      <Paragraph>
        Especially if that message is hammered home, all day, every day, like it is in today's 24-hour news cycle, then people tend towards conforming with that message.
      </Paragraph>
      <Paragraph>
        Owning some newspapers and TV stations really helps, especially if your objective is to say to an entire country:
      </Paragraph>
      <Quote
        author="source"
        url="https://en.wikipedia.org/wiki/Hand_(card_game)"
      >
        look at the hand, definitely don't look over here
      </Quote>
      <Paragraph>
        We need some tools to counter what is clearly propaganda. Now that large language models exist, what happens if we filter the news through a <strong>lens</strong>?.
      </Paragraph>
      <Paragraph>
        It's very important that each person can decide for themselves what type of lens they want, otherwise we have just passed the power of media manipulation from one group (news sources) to another (AI companies).
      </Paragraph>
      <Paragraph>
        People can control how their AI behaves because of <ExternalLink href="https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)">fine tuning</ExternalLink>. This means each person can create their own lens and decide what characteristics they want to filter out or highlight.
      </Paragraph>
      <Paragraph>
        Removing bias from the news is a very difficult problem.
      </Paragraph>
      <Paragraph>
        Do you think the media manipulating peoples views is a problem? How might we use AI to help solve this?
      </Paragraph>
    </Box>
  )
}

export default MediaManipulation