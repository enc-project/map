import React, { FC } from 'react'
import { SxProps } from '@mui/system'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Row from '../widgets/Row'
import Cell from '../widgets/Cell'
import SerifTypography from '../widgets/SerifTypography'

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
          textAlign: 'center',
        }}
      >
        <SerifTypography
          variant="h2"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
          }}
        >
          { article.title }
        </SerifTypography>
        <SerifTypography
          variant="h6"
          gutterBottom
          sx={{
            color: '#666',
          }}
        >
          { article.description }
        </SerifTypography>
        <Divider 
          sx={{
            mt: getResponsiveSxAmount(4),
            mb: getResponsiveSxAmount(4),
          }}
        />
      </Cell>
    </Row>
  )
}

export default ArticleHeader
