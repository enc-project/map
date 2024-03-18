import React, { useState, FC } from 'react'
import { Link } from 'react-router5'
import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'

import { ARTICLES } from '../data'

import useIsLargeScreen from '../hooks/useIsLargeScreen'
import useRouter from '../hooks/useRouter'

const drawerWidth = 320

const AppBarSpacer = styled('div')(({ theme }: any) => theme.mixins.toolbar)

const Layout: FC = ({ children }) => {
  const isLargeScreen = useIsLargeScreen()
  const { navigate } = useRouter()

  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            '& a': {
              textDecoration: 'none',
              color: '#000',
            },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link routeName="home">
            <Box
              component="img"
              src="/img/logo.png"
              sx={{
                width: '38px',
                mr: 2,
              }}
            />
          </Link>
          {
            isLargeScreen && (
              <Typography variant="h6" noWrap component="div">
                <Link routeName="home">
                  ENC Project
                </Link>
              </Typography>
            )
          }
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: 1500,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Button onClick={handleDrawerClose}>
          <ChevronLeftIcon /> Close
        </Button>
        <Divider />
        <List>
          <ListItem button onClick={() => {
            navigate('home')
            handleDrawerClose()
          }}>
            <ListItemAvatar>
              <Avatar alt="ENC Project" src="/img/logo.png" sx={{ border: '1px solid #333' }}/>
            </ListItemAvatar>
            <ListItemText
              primary="Home"
            />
          </ListItem>
          <Divider />
          {
            ARTICLES.map((article, index) => (  
              <ListItem button key={ index } onClick={() => {
                navigate(article.routeName)
                handleDrawerClose()
              }}>
                <ListItemAvatar>
                  <Avatar alt={ article.title } src={ article.image } sx={{ border: '1px solid #333', filter: 'grayscale(100%)' }}/>
                </ListItemAvatar>
                <ListItemText
                  primary={ article.title }
                />
              </ListItem>
            ))
          }
        </List>
      </Drawer>
      <Box
        sx={{
          display: open ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(3px)',
          zIndex: 1200,
        }}
        onClick={handleDrawerClose}
      />
      <Box
        sx={{
          flexGrow: 1,
          marginBottom: '56px',
        }}
      >
        <AppBarSpacer />
        <Container maxWidth="lg">
          { children }
        </Container>
      </Box>
      <Box
        component="footer"
        sx={{
          p: 2,
          backgroundColor: '#f8f8f8',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
        }}
      >
        <Typography variant="body1">&copy; ENC Project {new Date().getFullYear()}</Typography>
      </Box>
    </Box>
  )
}

export default Layout
