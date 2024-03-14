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
        strapline="Using Science to Make Better Rules for Everyone."
      />
      <Paragraph>
        Right now, rules are often based on beliefs, popularity, or current events, without a thorough examination of their long-term impact. The scientific method offers a more objective approach to rule-making, focusing on evidence and facts rather than opinions or political convenience.
      </Paragraph>
      <Paragraph>
        By adopting the scientific method, rule-makers would need to clearly define their goals, decide on measurable outcomes, and commit to evaluating the effectiveness of their policies. This process ensures that policies are tested and adjusted based on data, rather than being left unexamined.
      </Paragraph>
      <Paragraph>
        The lack of follow-up on the impact of policies is a significant issue. Utilizing the scientific method requires policymakers to provide evidence of a policy's success or failure, promoting accountability and the possibility of policy revision or removal if it doesn't work as intended.
      </Paragraph>
      <Paragraph>
        Implementing science in policy-making has numerous benefits, including fairness, reliance on factual evidence, and consideration of long-term consequences. It encourages policymakers to think critically about the implications of their decisions.
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
        Historical successes, such as NASA's Apollo missions, demonstrate the power of the scientific method in tackling complex problems through systematic testing and learning. Applying this method to policymaking can lead to more effective and equitable rules.
      </Paragraph>
      <Paragraph>
        While integrating science into policymaking presents challenges, including costs and resistance from those content with the status quo, the potential benefits for government transparency, accountability, and effectiveness are immense. It's a call to action for citizens to demand evidence-based policymaking from their leaders.
      </Paragraph>
      <Paragraph>
        This methodical approach can be applied to policy-making to ensure decisions are based on evidence and can withstand scrutiny.
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
        Observation involves taking a close look at the current situation, questioning why things are the way they are, hypothesizing potential solutions, experimenting with these solutions, and finally, analyzing the results to see if the problem has been effectively addressed.
      </Paragraph>
      <Paragraph>
        By focusing on facts more than opinions and ensuring politicians are accountable for their decisions, we can create policies that are more effective and fair. It may be challenging, but the potential to improve government transparency, accountability, and effectiveness makes it a worthwhile endeavor.
      </Paragraph>
      <Quote
        author="Ken Norris"
        url="https://en.wikipedia.org/wiki/Scientific_method"
      >
        The scientific method is nothing more than a system of rules to keep us from lying to each other.
      </Quote>
      <Paragraph>
        We should all encourage our leaders to adopt the scientific method in policy-making, holding them accountable for their decisions. This is the path to a government that truly serves the interests of all its citizens.
      </Paragraph>
    </Box>
  )
}

export default DataDrivenDecisions