import React, { FC } from 'react'
import { ThemeProvider as OriginalThemeProvider } from '@mui/material/styles'
import theme from '../theme'

import {
  RouterContextProvider,
} from './router'

import {
  SnackbarContextProvider,
} from './snackbar'

import {
  LoadingContextProvider,
} from './loading'

// we do this because of a strange typescript error whilst trying to render the theme
const ThemeProvider = OriginalThemeProvider as any

const AllContextProvider: FC = ({ children }) => {
  return (
    <RouterContextProvider>
      <SnackbarContextProvider>
        <LoadingContextProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </LoadingContextProvider>
      </SnackbarContextProvider>
    </RouterContextProvider>
  )
}

export default AllContextProvider