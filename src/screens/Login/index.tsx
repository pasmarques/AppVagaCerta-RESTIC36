import { Image} from 'react-native';
import { Wrapper,Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer} from './styles';
import { useState } from 'react';

import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';
import { Alert } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { signIn } = useAuth();

    const handleLogin = async () => {
        try {
          await signIn(email, senha);
        } catch (error: any) {
          Alert.alert('Erro', 'Não foi possível fazer login. Verifique suas credenciais.');
          console.error(error);
        }
      };
      
    return (
        <Wrapper>
            <Image source={BGTop} />

            <Container>

                <Form>
                    <Logo />
                    <Input label='E-mail' 
                    placeholder='digite seu e-mail' 
                    value = {email}
                    onChangeText={setEmail}/>
                    <Input label='Senha' 
                    placeholder='digite sua senha'
                    value = {senha}
                    onChangeText={setSenha}/>
                    <Button 
                    title="Entrar" 
                    noSpacing={true} 
                    variant='primary'
                    onPress={handleLogin}
                    />
                    <TextContainer>
                        <TextBlack>Não tem uma conta?</TextBlack>
                        <TextLinkContainer onPress={() => navigation.navigate('FormScreen')}>
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
