import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Slugtrition">
    <Container>
      <Title>
        Slugtrition <Badge>2024</Badge>
      </Title>
      <P>
      An app that takes a streamlined process to provide simple access to healthy, 
      balanced meals from the users' nutritional needs.
      </P>
      <P>
        So, users can input their own dietary restrictions and needs within the app.
        It will then take data from the dining hall menus from the school that updates
        daily. Next, it will then calculate the nutritional value of each food item and build
        the user their own personalized dining hall meal plan for the day.
      </P>
      <UnorderedList my={4}>
        <ListItem>List height, weight, and dietary restrictions</ListItem>
        <ListItem>Meal plans based on users' BMI </ListItem>
        <ListItem>Show different meals possible for user</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS & Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Dart, C++, Python, HTML, Flutter, Firebase, XCode & Android Studio</span>
        </ListItem>
        <ListItem>
          <Meta>Live Demo</Meta>
        </ListItem>
      </List>
      <iframe src="https://drive.google.com/file/d/1QbyxkMqPTXsP1BpiwlacE7_TDz5drbvM/preview" width="640" height="480" allow="autoplay"></iframe>


      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Box display="flex" justifyContent="center">
            <Image
              maxW={240}
              src="/images/works/appstore.png"
              className="image-appstore"
              alt="Download on App Store"
            />
          </Box>
        </Link>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
