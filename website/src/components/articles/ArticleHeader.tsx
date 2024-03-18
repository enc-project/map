import React, { FC } from 'react'
import { Link } from 'react-router5'
import { SxProps } from '@mui/system'
import Avatar from '@mui/material/Avatar'
import Row from '../widgets/Row'
import Cell from '../widgets/Cell'
import HeadlineStrapline from './HeadlineStrapline'

import theme from '../../theme'

import { getResponsiveSxAmount } from '../../styles'

import useIsLargeScreen from '../../hooks/useIsLargeScreen'

import {
  IArticle,
} from '../../types'

const ArticleHeader: FC<{
  article: IArticle,
  imageSize?: number,
  sx?: SxProps,
}> = ({
  article,
  imageSize = 350,
  sx = {},
}) => {
  const isLargeScreen = useIsLargeScreen()
  return (
    <Row sx={{ ...sx, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: getResponsiveSxAmount(4) }}>
      {
        isLargeScreen && (
          <Cell
            sx={{
              mb: getResponsiveSxAmount(1),
            }}
          >
            <Avatar
              alt={ article.title }
              src={ article.image }
              sx={{
                border: '1px solid #333',
                width: getResponsiveSxAmount(imageSize),
                height: getResponsiveSxAmount(imageSize),
                filter: 'grayscale(100%)',
              }}
            />
          </Cell>
        )
      }
      <Cell
        sx={{
          mt: getResponsiveSxAmount(0),
          '& a': {
            textDecoration: 'none',
          },
          textAlign: 'center',
          color: theme.palette.primary.main,
        }}
      >
        <HeadlineStrapline
          headline={isLargeScreen ? (
            <>
              {article.title}
            </>
          ) : (
            article.title
          )}
        />
      </Cell>
    </Row>
  )
}

export default ArticleHeader
