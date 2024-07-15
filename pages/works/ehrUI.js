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
  <Layout title="EHR UI">
    <Container>
      <Title>
        EHR User Interface<Badge>2023</Badge>
      </Title>
      <P>
      A UI for an EHR (Electronic Health Record) web application that will enable therapists to manage 
      their practice with the best possible experience.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages and Tools</Meta>
          <span>JavaScript, HTML, CSS, React, Chakra UI</span>
        </ListItem>
        <ListItem>
          <Meta>Full Website Link</Meta>
          <Link href="https://codesandbox.io/p/devbox/relaxed-booth-jsjn6d?embed=1&file=%2Fpublic%2Findex.html">
            EHR CodeSandbox <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>


      <Box>
        <iframe
          src="https://codesandbox.io/p/devbox/relaxed-booth-jsjn6d?embed=1&file=%2Fpublic%2Findex.html"
          style={{ width: '100%', height: '700px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
          title="relaxed-booth-jsjn6d"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
