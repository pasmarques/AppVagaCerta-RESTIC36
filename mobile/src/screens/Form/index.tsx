import { Alert, Image } from 'react-native';
import { Wrapper,Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { useState } from 'react';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function FormScreen({navigation}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const {createUser} = useAuth();

    const handleForm = async () => {
        try {
          await createUser(name, email, senha);
        } catch (error: any) {
          Alert.alert('Erro', 'Não foi possível criar usuário. Verifique os campos digitados.');
          console.error(error);
        }
      };
    return (
        <Wrapper>
            <Image source={BGTop} />

            <Container>

                <Form>
                    <Logo />
                    <Input label='Nome' placeholder='digite seu nome' value= {name} onChangeText= {setName}/>
                    <Input label='E-mail' placeholder='digite seu e-mail' value= {email} onChangeText= {setEmail}/>
                    <Input label='Senha' placeholder='digite sua senha' value= {senha} onChangeText= {setSenha}/>
                    <Button title="Entrar" noSpacing={true} variant='primary' onPress= {handleForm}/>
                    <TextContainer>
                        <TextBlack>Já tem uma conta?</TextBlack>
                        <TextLinkContainer onPress={() => navigation.navigate('Login')}>
                            <TextLink>
                                    Faça seu login.
                            </TextLink>
                        </TextLinkContainer>
                    </TextContainer>
                </Form>

            </Container>
        </Wrapper>
    );
}


