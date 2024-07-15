import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const CharacterSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const CharacterContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="lost-programmer"
    m="auto"
    mt={['-20px', '-6px', '-100px']}
    mb={['-40px', '-1px', '-2px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <CharacterContainer>
      <CharacterSpinner />
    </CharacterContainer>
  )
}

export default Loader
