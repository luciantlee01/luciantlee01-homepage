import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbKaizen from '../public/images/works/kaizenehr_02.png'
import thumbPacman from '../public/images/works/pacMan-01.png'
import thumbEHR from '../public/images/works/ehrUI.png'
import thumbSlugtrition from '../public/images/works/slugtrition-2.png'
import thumbWordle from '../public/images/works/wordlesolver.png'
import thumbLinkinBio from '../public/images/works/linkinBio.png'
import thumbThree from '../public/images/works/three.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works and Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="kaizenEHR" title="Kaizen" thumbnail={thumbKaizen}>
          A web-based all-in-one EHR and practice management solution that empowers 
          private practitioners to build meaningful relationships with their clients.
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            id="pacman"
            title="Pacman Capture the Flag"
            thumbnail={thumbPacman}
          >
            A multi-player capture-the-flag variant of Pacman using artificial intelligence
            and machine learning.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="ehrUI"
            title="Electronic Health Record System"
            thumbnail={thumbEHR}
          >
            An Electronics Health Record System (User Interface). Made for private
            practitioners and their clients.
          </WorkGridItem>
        </Section>

        
        <Section delay={0.1}>
          <WorkGridItem id="slugtrition" thumbnail={thumbSlugtrition} title="Slugtrition">
            A meal planning app that enhances the dining experience on campus at the 
            University of California, Santa Cruz.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="wordle" thumbnail={thumbWordle} title="Wordle and Solver">
          A solver for the game Wordle. Also based on my own version 
          of Wordle, a word-guessing game that has recently become popular.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="linkinBio" thumbnail={thumbLinkinBio} title="Personal Link-in-Bio">
            My personal link in bio page that redirects you to my other social
            platforms.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="three" thumbnail={thumbThree} title="Computer Graphics">
            Defined objects with vertices and meshes, wrote shaders, 
            lighting and shading, projections, transformations in 3D, and texture mapping.
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
