import React, { FC, useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

import { ARTICLES } from '../../data'
import useRouter from '../../hooks/useRouter'

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
            onClick={() => {
              navigate(article.routeName)
            }}
          >
            <ListItemAvatar>
              <Avatar alt={ article.title } src={ article.image } sx={{ border: '1px solid #333', filter: 'grayscale(100%)' }}/>
            </ListItemAvatar>
            <ListItemText
              primary={ article.title }
            />
          </ListItemButton>
        ))
      }
    </List>
  )
}

export default ArticleMenu
