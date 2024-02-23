import React, { useState, FC } from 'react'
import { styled } from '@mui/system'
import { CSSObject } from '@mui/material/styles'
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
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MenuIcon from '@mui/icons-material/Menu'

interface MainProps {
  open: boolean
}

const drawerWidth = 240

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<MainProps>(({ theme, open }: any) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions?.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  marginBottom: '56px', // Adjust this based on your footer's height to ensure content isn't hidden behind the footer
} as CSSObject))

const AppBarSpacer = styled('div')(({ theme }: any) => theme.mixins.toolbar)

const nums: number[] = []

for (let i=0; i<1000; i++) {
  nums.push(i)
}

const Layout: FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
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
      <Main open={open}>
        <AppBarSpacer />
        <Container maxWidth="xl">
          {
            nums.map(num => {
              return (
                <Typography gutterBottom key={ num }>
                  {num} this is the home page
                </Typography>
              )
            })
          }
        </Container>
      </Main>
      <Box component="footer" sx={{ p: 2, backgroundColor: 'lightgrey', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1100 }}> // Updated here
        <Typography variant="body1">Your Footer Content Here</Typography>
      </Box>
    </Box>
  )
}

export default Layout
