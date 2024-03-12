import React, { useMemo } from 'react'

import Box from '@mui/material/Box'
import ArticleHeader from '../components/articles/ArticleHeader'
import Paragraph from '../components/articles/Paragraph'
import Quote from '../components/articles/Quote'
import ExternalLink from '../components/articles/ExternalLink'

import { getArticle } from '../data'

const ElectionCycles = () => {
  const article = useMemo(() => getArticle('election-cycles'), [])
  return (
    <Box>
      <ArticleHeader article={article} />
      <Paragraph>
        Back in the Bronze age of computers - we used to release software on CD's, which inevitably had bugs - small errors that result from an oversight of the programmer. We would put up with the bugs in our software until a new CD (or cassette tape) would be released like 6 months later.
      </Paragraph>
      <Paragraph>
        It was not an efficient system.
      </Paragraph>
      <Paragraph>
        Now we have the Internet, these days Amazon releases new code and bug fixes more than one hundred thousand times per day. This is possible because of a thing called continuous integration, which puts a focus on tests to make sure that when a problem is discovered, a fix can be applied quickly and that fix has not actually made things worse.
      </Paragraph>
      <Paragraph>
        This means when things are not working, or could be done more efficiently, they can be changed, quickly.
      </Paragraph>
      <Quote
        author="source"
        url="https://iq.opengenus.org/companies-have-high-deployment-rate/"
      >
        It's important that this is done using a data and test driven approach. Each time a change is proposed, we must propose how that change will be tested and by what metric we will call it a success.
      </Quote>
      <Paragraph>
        In politics, we put our faith in people to make the right decisions. If we notice that they are doing a bad job, we have to wait 5 years to vote them out and fix the bug.
      </Paragraph>
      <Paragraph>
        Could we design a system which lets us collectively decide on a course of action on a single issue (see political parties)?
      </Paragraph>
      <Paragraph>
        Rather than wait for an election cycle and then hope the new person makes good decisions, we could be constantly testing and iterating on the decisions we make as a population.
      </Paragraph>
      <ExternalLink href="https://iq.opengenus.org/companies-have-high-deployment-rate/">
        Learn more about companies with high deployment rates
      </ExternalLink>
    </Box>
  )
}

export default ElectionCycles