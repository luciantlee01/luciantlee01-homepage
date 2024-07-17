import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../programmer-loader'
import Cursor from './cursor'
import { useContext } from 'react'
import { ThemeContext } from '@emotion/react'

const LazyVoxelDog = dynamic(() => import('../programmer'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  const { theme } = useContext(ThemeContext)
  
  return (
    <Box as="main" pb={8}>
      <Cursor theme={theme} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lucian's homepage" />
        <meta name="author" content="Lucian Lee" />
        <meta name="author" content="luciantlee01" />
        <meta property="og:site_name" content="Lucian Lee" />
        <meta name="og:title" content="Lucian Lee" />
        <meta property="og:type" content="website" />
        <title>Lucian Lee - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
    </Box>
  )
}

export default Main
