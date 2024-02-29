import React, { FC } from 'react'
import { Link } from 'react-router5'
import Avatar from '@mui/material/Avatar'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import SerifTypography from '../widgets/SerifTypography'
import Row from '../widgets/Row'
import Cell from '../widgets/Cell'

import { getResponsiveSxAmount } from '../../styles'
import { IArticle } from '../../types'

const ArticleRow: FC<{
  article: IArticle,
  imageSize?: number,
  sx?: SxProps,
  mt?: number,
  mb?: number,
}> = ({
  article,
  imageSize = 150,
  mt = 6,
  mb = 6,
  sx = {},
}) => {

  const rowSx: SxProps = {
    alignItems: 'flex-start',
    mt: getResponsiveSxAmount(mt),
    mb: getResponsiveSxAmount(mb),
    ...sx,
  }

  return (
    <Row sx={ rowSx }>
      <Cell
        sx={{
          pt: getResponsiveSxAmount(1),
        }}
      >
        <Link routeName={ article.routeName }>
          <Avatar
            alt={ article.title }
            src={ article.image }
            sx={{
              border: '1px solid #333',
              width: getResponsiveSxAmount(imageSize),
              height: getResponsiveSxAmount(imageSize),
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          />
        </Link>
      </Cell>
      <Cell grow sx={{
        pl: getResponsiveSxAmount(2),
      }}>
        <SerifTypography
          variant="h4"
          sx={{
            mt: 0,
            mb: 1,
            '& a': {
              textDecoration: 'none',
            },
          }}
        >
          <Link routeName={ article.routeName }>
            { article.title }
          </Link>
        </SerifTypography>
        <SerifTypography
          variant="body1"
          sx={{
            mt: 0,
            mb: 1,
          }}
        >
          { article.description }
        </SerifTypography>
        <SerifTypography
          variant="caption"
          sx={{
            mt: 0,
            mb: 3,
          }}
        >
          <Link routeName={ article.routeName }>view article</Link>
        </SerifTypography>
      </Cell>
    </Row>
  )
}

export default ArticleRow
