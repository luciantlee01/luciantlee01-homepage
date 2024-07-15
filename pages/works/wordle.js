import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Wordle">
    <Container>
      <Title>
        Wordle and Solver <Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/wordlelogo.png" alt="icon" />
      </Center>
      <P>
      This is a "guess the secret word" kind of game. For each puzzle, there is a
      particular secret 5-letter English word, and the player tries to infer what it
      is by making a series of guesses. If the player can find the secret word, then
      they win!
      </P>
      <P>
      This solver will work in two different ways -- either the secret word may be
      known to the user and specified to the program (useful for testing purposes, so
      that the program can whittle down the search space until it finds the specified
      word), or the solver can iteratively suggest guesses to the user, so as to
      search for solutions to a live problem.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>C & C++</span>
        </ListItem>
      </List>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://git.ucsc.edu/cse-13s-spring-2022/cse13s_lutlee/-/tree/main/hw6?ref_type=heads">
            <Badge mr={2}>Wordle</Badge>
            「Gitlab」{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://git.ucsc.edu/cse-13s-spring-2022/cse13s_lutlee/-/tree/main/hw7?ref_type=heads">
            <Badge mr={2}>Wordle Solver</Badge>
            「Gitlab」{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
