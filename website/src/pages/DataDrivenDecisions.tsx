import React, { FC, useMemo } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'
import HeadlineStrapline from '../components/articles/HeadlineStrapline'
import Paragraph from '../components/articles/Paragraph'
import Quote from '../components/articles/Quote'
import ExternalLink from '../components/articles/ExternalLink'
import SerifTypography from '../components/widgets/SerifTypography'

import { getArticle } from '../data'

const DataDrivenDecisions: FC = () => {
  const article = useMemo(() => getArticle('data-driven-decisions'), [])

  return (
    <Box>
      <ArticleHeader article={article} />
      <HeadlineStrapline
        mt={ 1 }
        strapline="Using Science to Make Better Rules for Everyone."
        straplineVariant="h4"
        align="center"
      />
      <Paragraph>
        Right now, people who make rules for the country sometimes base them on what they believe, what's popular, or what's in the news. They might even tell reporters about their ideas first to see how people react before making them official. But this means they might not think about how well the rules will actually work or what could happen because of them in the long run.
      </Paragraph>
      <Paragraph>
        There's a better way to make rules, and it's called the scientific method. It's a step-by-step way to solve problems by watching, asking questions, guessing what might happen, testing the guesses, and looking at the results. If we use this method to make rules, we can make sure they're based on facts and evidence instead of just opinions or what some powerful people want.
      </Paragraph>
      <Paragraph>
        To do this, people who make rules would first have to say exactly what they want the rule to do and how they'll know if it works. They would need to decide what to measure and how to collect and study the information they get.
      </Paragraph>
      <Paragraph>
        One big problem right now is that after a rule is made, no one checks to see if it's actually working the way it was supposed to. If we use the scientific method, the people who make the rules would have to show proof that their rules are doing what they're meant to do. If a rule isn't working, they would need to change it or get rid of it. This would make sure that the rules we have are the best ones for everyone.
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
        author="Thomas Henry Huxley"
        url="https://en.wikipedia.org/wiki/Scientific_method"
      >
        The scientific method, is nothing but the normal working of the human mind.
      </Quote>
      <Paragraph>
        Using science to make rules would be good for a lot of reasons. It would help make sure the rules are fair and based on real facts instead of feelings or what's easy for politicians. People who make rules would have to think about what might happen because of their rules, not just right now but far into the future.
      </Paragraph>
      <Box sx={{ mt: 4, mb: 4 }}>
        <SerifTypography variant="h6" sx={{ mb: 2 }}>
          The Steps of the Scientific Method
        </SerifTypography>
        <ul>
          <li>
            <Paragraph>
              <strong>Observation:</strong> First, we take a good look at what's happening. It's like noticing that traffic jams keep happening at the same spot on your way to work.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <strong>Questioning:</strong> Then, we ask why. Why is this traffic jam happening? Is there a better way to manage policies that affect our lives?
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <strong>Hypothesizing:</strong> Next, we come up with ideas or solutions. Maybe if we change the timing of the traffic lights, it could ease the jam.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <strong>Experimenting:</strong> This is where we test our ideas. Let's try that new traffic light timing and see what happens.
            </Paragraph>
          </li>
          <li>
            <Paragraph>
              <strong>Analyzing Results:</strong> Finally, we look at the data. Did the change help reduce traffic jams? If yes, great! If not, back to the drawing board.
            </Paragraph>
          </li>
        </ul>
      </Box>
      <Paragraph>
        In the past, using the scientific method has helped us do really hard things, like sending a person to the moon. NASA did this by breaking the big problem into smaller parts, testing their ideas, and learning from the results to make their plan better.
      </Paragraph>
      <Paragraph>
        Changing how we make rules won't be easy. It will cost money to collect and study all the information needed. Some people might not like it because they're happy with how things are now, even if it means politicians sometimes make rules that are better for them than for everyone else. But if we use science to make rules, our government can be more open, responsible, and good at helping all people.
      </Paragraph>
      <Quote
        author="Ken Norris"
        url="https://en.wikipedia.org/wiki/Scientific_method"
      >
        The scientific method is nothing more than a system of rules to keep us from lying to each other.
      </Quote>
      <Paragraph>
      So in short, using the scientific method to make rules for the country could be a really big change for the better. By focusing on facts more than opinions and making sure politicians are responsible for their choices, we can make rules that work better and are more fair for everyone. It might be hard, but it's worth it. We should all tell our leaders that we want them to use science to make rules and that we'll hold them responsible for their choices. That's the only way to make a government that truly works for all the people it serves.
      </Paragraph>
    </Box>
  )
}

export default DataDrivenDecisions