import styled from 'styled-components'

type ButtonProps = {
  primary?: boolean
  fontSize?: string
}

const Button = styled.button<ButtonProps>`
  color: white;
  background-color: ${(props) => (props.primary ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const DangerButton = styled(Button)`
  background-color: red;
  span {
    text-decoration: line-through;
  }
`

function Tests() {
  return (
    <>
      <Button primary>Clique aqui</Button>
      <Button fontSize="14px">Submit</Button>
      <DangerButton as="a">
        <span>Do not click</span>
      </DangerButton>
    </>
  )
}

export default Tests
