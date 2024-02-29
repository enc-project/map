import React, { FC } from 'react'
import { Link } from 'react-router5'
import { SxProps } from '@mui/system'
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
  sx?: SxProps,
}> = ({
  article,
  sx = {},
}) => {
  return (
    <Row sx={ sx }>
      <Cell
        sx={{
          mr: getResponsiveSxAmount(3),
        }}
      >
        <Avatar
          alt={ article.title }
          src={ article.image }
          sx={{
            border: '1px solid #333',
            width: getResponsiveSxAmount(60),
            height: getResponsiveSxAmount(60),
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
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
