import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph type="secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur
      incidunt in dolorum ipsum suscipit illum error repudiandae iste
      voluptatum! Aliquid ullam quidem aliquam nemo eos autem nobis nisi amet.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=Carvs10&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Carvs10&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
