import { Container, AuthButton } from './styles';

export const AuthButtons = () => {
  return (
    <Container>
      <AuthButton>
        <img src="/images/icons/google.svg" alt="Google" />
        Entrar com Google
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/github.svg" alt="Github" />
        Entrar com Github
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/rocket.svg" alt="Rocket" />
        Entrar como visitante
      </AuthButton>
    </Container>
  );
};
