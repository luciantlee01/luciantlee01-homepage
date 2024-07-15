import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Link in Bio">
    <Container>
      <Title>
        Personal Link In Bio Page<Badge>2024</Badge>
      </Title>
      <P>
        Welcome to my Link in Bio page! Here, you'll find all the essential 
        links to my professional profiles, projects, and social media. Stay 
        connected and explore my work across various platforms.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages and Tools</Meta>
          <span>JavaScript, HTML, CSS, JSX</span>
        </ListItem>
        <ListItem>
          <Meta>Full Website Link</Meta>
          <Link href="https://luciantlee01.github.io/My-Link-In-Bio-Page/">
            Lucian's Link in Bio Page <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/linkinBio.png" alt="Kaizen EHR" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
