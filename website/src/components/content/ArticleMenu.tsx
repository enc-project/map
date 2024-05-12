import React, { FC, useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

import { ARTICLES } from '../../data'
import useRouter from '../../hooks/useRouter'
import theme from '../../theme'

const ArticleMenu: FC<{
  
}> = ({
  
}) => {
  const {
    navigate,
  } = useRouter()

  return (
    <List>
      {
        ARTICLES.map((article, index) => (  
          <ListItemButton
            key={ index }
            sx={{
              mb: 2,
            }}
            onClick={() => {
              navigate(article.routeName)
            }}
          >
            <ListItemAvatar>
              <Avatar
                alt={ article.title }
                src={ article.image }
                sx={{
                  border: '1px solid #333',
                  filter: 'grayscale(100%)',
                  width: '140px',
                  height: '140px',
                  mr: 4,
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={ article.title }
              secondary={ article.description }
              primaryTypographyProps={{
                fontSize: '28pt',
                fontFamily: '"Playfair Display", serif',
                color: theme.palette.primary.main,
              }}
              secondaryTypographyProps={{
                fontSize: '18pt',
                fontFamily: '"Playfair Display", serif',
                color: '#666',
              }}
            />
          </ListItemButton>
        ))
      }
    </List>
  )
}

export default ArticleMenu
