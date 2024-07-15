import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { Box, Container, Heading, Link, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

const AboutMe = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Layout title="About Me">
      <Container>
        <Heading as="h3" fontSize={24} mb={4}>
          About Me
        </Heading>

        <Box mb={6}>
          <Text fontSize="lg" color="white" mb={4}>
            Hello! I'm <b>Lucian Lee</b>, a dedicated software developer with a passion for creating innovative solutions and a strong foundation in computer science.
          </Text>
          <Text fontSize="lg" color="white" mb={4}>
            I recently graduated with a <b>B.S. in Computer Science</b> from the University of California, Santa Cruz, where I honed my skills in various programming languages and technologies. Throughout my academic journey, I engaged in numerous projects that allowed me to apply my technical skills and creativity.
          </Text>
          <Text fontSize="lg" color="white" mb={4}>
            From developing a real-time personalized dining hall meal planner to engineering a sophisticated multi-threaded HTTP server, I thrive on tackling complex problems and delivering efficient solutions. My expertise includes programming languages like <b>JavaScript, Python, C/C++, Dart</b>, and tools such as <b>React, Flutter, and Firebase</b>.
          </Text>
          <Text fontSize="lg" color="white" mb={4}>
            In addition to my technical skills, I bring a unique blend of cultural awareness and multilingual abilities, being fluent in <b>English, Mandarin Chinese, and Spanish</b>. My role as President of the Multicultural Mentorship Organization has further developed my leadership and teamwork skills, enabling me to effectively manage and motivate diverse teams.
          </Text>
          <Text fontSize="lg" color="white" mb={4}>
            Currently, I am contributing to the development of an innovative Electronic Health Record system at <b>Kaizen EHR</b>, where I apply my front-end development skills using React, JavaScript, HTML, and CSS to create user-friendly and responsive interfaces. My previous experience as an IT Technical Support intern at Eternal Steel Corporation in Taiwan helped me develop strong problem-solving abilities and customer service skills.
          </Text>
          <Text fontSize="lg" color="white" mb={4}>
            When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or creating new music. Feel free to connect with me through any of the links on my site or drop me a message—I'm always open to new opportunities and collaborations.
          </Text>
        </Box>

        <Heading as="h4" fontSize={20} my={4}>
          Fun Facts
        </Heading>
        <Box mb={6}>
          <Text fontSize="lg" color="white" mb={2}>
            🧑‍💻 I wrote my first line of code at the age of 14!
          </Text>
          <Text fontSize="lg" color="white" mb={2}>
            🌎 I love traveling and have visited over 10 countries.
          </Text>
          <Text fontSize="lg" color="white" mb={2}>
            📚 My favorite book is "Made to Stick: Why Some Ideas Survive and Others Die" by Chip Heath and Dan Heath.
          </Text>
          <Text fontSize="lg" color="white" mb={2}>
            🎧 I enjoy creating music through FL Studio and Serato DJ.
          </Text>
        </Box>

        <Heading as="h4" fontSize={20} my={4}>
          Connect with Me
        </Heading>
        <Box>
          {isClient && (
            <>
              <Text fontSize="lg" color="white" mb={2}>
                LinkedIn: <NextLink href="https://www.linkedin.com/in/lucianlee01/" passHref>
                  <Link color="teal.500" isExternal>lucianlee01</Link>
                </NextLink>
              </Text>
              <Text fontSize="lg" color="white" mb={2}>
                GitHub: <NextLink href="https://github.com/luciantlee01/" passHref>
                  <Link color="teal.500" isExternal>luciantlee01</Link>
                </NextLink>
              </Text>
              <Text fontSize="lg" color="white" mb={2}>
                Email: <NextLink href="mailto:luciantlee01@gmail.com" passHref>
                  <Link color="teal.500" isExternal>luciantlee01@gmail.com</Link>
                </NextLink>
              </Text>
              <Text fontSize="lg" color="white" mb={2}>
                Instagram: <NextLink href="https://www.instagram.com/lucianlee_/" passHref>
                  <Link color="teal.500" isExternal>@lucianlee_</Link>
                </NextLink>
              </Text>
            </>
          )}
        </Box>
      </Container>
    </Layout>
  )
}

export default AboutMe
export { getServerSideProps } from '../../components/chakra'
