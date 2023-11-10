import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  switchTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>João Victtor</Title>
      <Paragraph type="secondary" fontSize={16}>
        Carvs10
      </Paragraph>
      <Description type="primary" fontSize={12}>
        Engenheiro Front-end
      </Description>
      <ThemeButton onClick={props.switchTheme}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
