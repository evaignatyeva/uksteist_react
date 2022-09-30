import React from 'react'

import {
  ChakraProvider,
  Box
} from '@chakra-ui/react'

//
import '@fontsource/montserrat'

//
import theme from './theme/theme'

//
import NavBar from './components/NavBar/Index'
import Header from './components/Header/Index'
import Plots from './components/Plots/index'
import LanguageProvider from './context/LanguageProvider'

function App() {
  return (
    <ChakraProvider
      theme={theme}
    >
      <LanguageProvider>
        <Box>
          <NavBar />
          <Header />
          <Plots />
        </Box>
      </LanguageProvider>
    </ChakraProvider >
  );
}

export default App;
