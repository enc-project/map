import React, { FC } from 'react'
import { Link } from 'react-router5'
import Avatar from '@mui/material/Avatar'
import Row from '../widgets/Row'
import Cell from '../widgets/Cell'
import HeadlineStrapline from './HeadlineStrapline'

import { getResponsiveSxAmount } from '../../styles'

import {
  IArticle,
} from '../../types'

const ArticleHeader: FC<{
  article: IArticle,
}> = ({
  article,
}) => {
  return (
    <Row>
      <Cell
        sx={{
          mr: getResponsiveSxAmount(3),
        }}
      >
        <Avatar
          alt={ article.title }
          src={ article.image }
          sx={{
            border: '1px solid #000',
            width: getResponsiveSxAmount(60),
            height: getResponsiveSxAmount(60),
          }}
        /> 
      </Cell>
      <Cell
        sx={{
          '& a': {
            textDecoration: 'none',
          }
        }}
      >
        <HeadlineStrapline
          headline={(
            <>
              <Link routeName="home">ENC</Link>&nbsp;:&nbsp;
            </>
          )}
        />
      </Cell>
      <Cell grow>
        <HeadlineStrapline
          headline={ article.title }
        />
      </Cell>
    </Row>
  )
}

export default ArticleHeader
