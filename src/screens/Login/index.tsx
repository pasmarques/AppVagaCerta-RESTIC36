import { Image } from 'react-native';
import { Wrapper,Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login() {
    return (
        <Wrapper>
            <Image source={BGTop} />

            <Container>

                <Form>
                    <Logo />
                    <Input label='E-mail' placeholder='digite seu e-mail'/>
                    <Input label='Senha' placeholder='digite sua senha'/>
                    <Button title="Entrar" noSpacing={true} variant='primary'/>
                    <TextContainer>
                        <TextBlack>Não tem uma conta?</TextBlack>
                        <TextLinkContainer>
                            <TextLink>
                                    Crie agora mesmo.
                            </TextLink>
                        </TextLinkContainer>
                    </TextContainer>
                </Form>

            </Container>
        </Wrapper>
    );
}
