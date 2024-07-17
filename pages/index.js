import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGoogle, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoGitlab } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lu·cian Lee
          </Heading>
          <p> /luː.sɪən/ </p>
          <p> noun </p>
          <p> 
                &nbsp; Software Engineer, Web Developer, and Aspiring DJ
          </p>
          <p> 
                &nbsp;
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/IMG_2024.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>


      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a Computer Science student and a front-end developer based in California 
          with a passion for software development. I seek challenging opportunities in 
          solving real-life problems with code. Currently, I am a recent B.S Computer Science
          graduate at the University of California, Santa Cruz and  am also working at Kaizen 
          Electronic Health Records System as a front-end developer.{' '}
          <Link as={NextLink} href="/works/kaizenEHR" passHref scroll={false}>
            Kaizen EHR
          </Link>
          . When not online, I love hanging out with my DJ controller board, creating new music.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="purple"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Kaohsiung (高雄), Taiwan.
        </BioSection>
        <BioSection>
          <BioYear>2023 - present</BioYear>
          Working at Kaizen EHR in San Francisco, California.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Completed the Bachelor of Science Program for Computer Science
          in the Baskin School of Engineering at the University of California, 
          Santa Cruz
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://drive.google.com/drive/folders/1-qbHA955UJbWOrYTNpN0VrrFunYk06Nb?usp=drive_link" target="_blank">
            Music
          </Link>
          , Volleyball, Playing Guitar,{' '}
          <Link href="" target="_blank">
            Photography
          </Link>
          , Machine Learning, Archery, and Golf
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/luciantlee01" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @luciantlee01
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.linkedin.com/in/lucianlee01/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoLinkedin />}
              >
                @lucianlee01
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://instagram.com/lucianlee_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                @lucianlee_
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="mailto:luciantlee01@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGoogle />}
              >
                @luciantlee01
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://git.ucsc.edu/lutlee/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGitlab />}
              >
                @lutlee
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
