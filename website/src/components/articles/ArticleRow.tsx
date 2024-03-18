import React, { FC } from 'react'
import { Link } from 'react-router5'
import Avatar from '@mui/material/Avatar'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import SerifTypography from '../widgets/SerifTypography'
import Row from '../widgets/Row'
import Cell from '../widgets/Cell'
import Container from '@mui/material/Container'
import theme from '../../theme'

import { getResponsiveSxAmount } from '../../styles'
import { IArticle } from '../../types'

import InternalLink from '../articles/InternalLink'

const ArticleRow: FC<{
  article: IArticle,
  imageSize?: number,
  sx?: SxProps,
  mt?: number,
  mb?: number,
}> = ({
  article,
  imageSize = 160,
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
    <Container
      maxWidth="lg"
    >
      <Row sx={ rowSx }>
        <Cell
          sx={{
            pt: getResponsiveSxAmount(1),
          }}
        >
          <Link
            routeName={ article.routeName }
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
          </Link>
        </Cell>
        <Cell grow sx={{
          pl: getResponsiveSxAmount(2),
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
          <SerifTypography
            variant="h3"
            sx={{
              mt: 0,
              mb: 1,
              '& a': {
                textDecoration: 'none',
              },
            }}
          >
            <InternalLink routeName={ article.routeName }>
              { article.title }
            </InternalLink>
          </SerifTypography>
          <SerifTypography
            variant="body1"
            sx={{
              mt: 1,
              mb: 2,
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
            <InternalLink
              routeName={ article.routeName }
            >
              view article
            </InternalLink>
          </SerifTypography>
        </Cell>
      </Row>
    </Container>
  )
}

export default ArticleRow
