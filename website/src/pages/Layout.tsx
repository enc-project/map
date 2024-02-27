import React, { useState, FC } from 'react'
import styled from '@mui/system/styled'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 240

const AppBarSpacer = styled('div')(({ theme }: any) => theme.mixins.toolbar)

const Layout: FC = ({ children }) => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))

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
            color: '#000'
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
          {
            isLargeScreen && (
              <Typography variant="h6" noWrap component="div">
                ENC Project
              </Typography>
            )
          }
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Menu Item 1" />
          </ListItem>
        </List>
      </Drawer>
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
