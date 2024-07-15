import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Kaizen EHR">
    <Container>
      <Title>
        Kaizen EHR <Badge>2021-</Badge>
      </Title>
      <P>
        A telehealth service with seamless scheduling, in-platform messaging, 
        and frictionless billing powered by Zoom. As an electronic health records 
        system, it also offers powerful live platform reporting dashboard along 
        with customizable client profiles and secured shared documents with clients.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://projectkaizen.io">
          https://projectkaizen.io <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>macOS/iOS/Windows/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React, Vite, Supabase, Chakra UI, Sass UI</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/kaizenehr_01.png" alt="Kaizen EHR" />
      <WorkImage src="/images/works/kaizenehr_02.png" alt="Kaizen EHR" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
