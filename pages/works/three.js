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
  <Layout title="Computer Graphics">
    <Container>
      <Title>
        Computer Graphics<Badge>2024</Badge>
      </Title>
      <P>
        Here is a showcase of my Three.js projects.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages and Tools</Meta>
          <span>JavaScript, HTML, CSS, Three.js</span>
        </ListItem>
        <ListItem>
          <Meta>Full Website Link</Meta>
          <Link href="https://luciantlee01.github.io/CSE160/">
            Lucian's Github Projects <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <UnorderedList my={4}>
          <ListItem>Github Three.js Projects</ListItem>
          <UnorderedList my={4}>
          <ListItem>Asgn 0: Vector Library</ListItem>
            <ListItem>Asgn 1: Painting</ListItem>
            <ListItem>Asgn 2: Blocky 3D Animal</ListItem>
            <ListItem>Asgn 3: Creating Virtual World (Minecraft)</ListItem>
            <ListItem>Asgn 4: Lighting</ListItem>
            <ListItem>Asgn 5: High Level Graphics Library</ListItem>
          </UnorderedList>
          <ListItem>CodeSandbox Projects</ListItem>
          <UnorderedList my={4}>
            <ListItem>
              <Link href="https://codesandbox.io/p/sandbox/2d-drawing-and-transforms-pt7qqx">
              2D Drawing and Transformations <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://codesandbox.io/p/sandbox/exciting-goodall-hn43x9">
              Improving Performance (FPS) <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://codesandbox.io/p/sandbox/rough-shadow-wpj283">
              UV Coordinates and Texturing <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://codesandbox.io/p/sandbox/morning-sea-pzm8g2">
              Multiple Shaders and Complex Vertex Shaders <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://codesandbox.io/p/sandbox/fragment-shaders-and-a-sun-5z3qty">
              Fragment Shaders and a Sun <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </UnorderedList>
      </UnorderedList>
      </List>
      <WorkImage src="/images/works/Three.png" alt="Three" />
      <WorkImage src="/images/works/threeSun.png" alt="ThreeSun" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
