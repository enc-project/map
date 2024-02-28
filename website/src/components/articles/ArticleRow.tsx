import React, { FC } from 'react'
import { Link } from 'react-router5'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import SerifTypography from '../widgets/SerifTypography'
import Row from '../widgets/Row'
import Cell from '../widgets/Cell'

import { getResponsiveSxAmount } from '../../styles'

const ArticleRow: FC<{
  title: string,
  description: string,
  image: string,
  routeName: string,
  imageSize?: number,
  sx?: SxProps,
  mt?: number,
  mb?: number,
}> = ({
  title,
  description,
  image,
  routeName,
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
      <Cell>
        <Box
          component="img"
          src={ image }
          alt={ title }
          sx={{
            width: getResponsiveSxAmount(imageSize),
            height: 'auto',
            border: '1px solid #333'
          }}
        />
      </Cell>
      <Cell grow sx={{
        pl: getResponsiveSxAmount(2),
      }}>
        <SerifTypography
          variant="h4"
          sx={{
            mt: 0,
            mb: 1,
          }}
        >
          { title }
        </SerifTypography>
        <SerifTypography
          variant="body1"
          sx={{
            mt: 0,
            mb: 1,
          }}
        >
          { description }
        </SerifTypography>
        <SerifTypography
          variant="caption"
          sx={{
            mt: 0,
            mb: 3,
          }}
        >
          <Link routeName={ routeName }>view article</Link>
        </SerifTypography>
      </Cell>
    </Row>
  )
}

export default ArticleRow
