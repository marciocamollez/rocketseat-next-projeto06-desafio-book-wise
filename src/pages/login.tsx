import {
  LogoContainer,
  LogoSection,
  WelcomeSection
} from '../../styles/pages/login';
import { AuthButtons } from '../components/AuthButtons';

import { Heading, Text } from '../components/Typography';

export default function Login() {
  return (
    <LogoContainer>
      <LogoSection>
        <img src="/images/logo.svg" alt="" />
      </LogoSection>
      <WelcomeSection>
        <Heading size="lg" color="gray-100">
          Boas Vindas
        </Heading>
        <Text color="gray-200">Faça seu login ou acesse como visitante</Text>
        <AuthButtons />
      </WelcomeSection>
    </LogoContainer>
  );
}
