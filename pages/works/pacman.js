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
  Image,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Pacman">
    <Container>
      <Title>
        Capture The Flag Pacman <Badge>2023</Badge>
      </Title>
      <P>
        A multi-player capture-the-flag variant of Pacman using artificial intelligence
        and machine learning. Battle your defensive and offensive agents against other
        players!
      </P>
      <P>
        The gifs below display one of many games my AI pacman, both defensive and offensive agents,
        battled against other students at UC Santa Cruz.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python & Visual Studio Code</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/luciantlee01/pacman-ctf">
            Pacman Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tournament</Meta>
          <Link href="http://raz.ucsc.edu/cse140-f23/tournaments/">
            Pacman Tournament <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Box align="center" my={4}>
        <Image
          src="/images/works/pacman-1.gif"
          alt="Capture The Flag Pacman GIF"
          borderRadius="lg"
        />
      </Box>
      <Box align="center" my={4}>
        <Image
          src="/images/works/pacman-2.gif"
          alt="Capture The Flag Pacman GIF"
          borderRadius="lg"
        />
      </Box>
      <Box align="center" my={4}>
        <Image
          src="/images/works/pacman-3.gif"
          alt="Capture The Flag Pacman GIF"
          borderRadius="lg"
        />
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
