import React from 'react';
import { Feather } from '@expo/vector-icons';
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
    ContentContainer,
} from '../Profile/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import Input from '../../components/Input'
import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/AuthContext';
import { View } from 'react-native';


export default function Profile({navigation }) {

    const { signOut, user } = useAuth();

    return (
        <Wrapper>
            <Header>
                <HeaderButtonContainer onPress={() => navigation.goBack()}>
                    <ButtonIcon>
                        <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
                    </ButtonIcon>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </HeaderButtonContainer>
                <Logo />
            </Header>

            <Container>
                <ContentContainer>
                    <Input label='Nome' placeholder='digite seu nome'/>
                    <Input label='E-mail' placeholder='digite seu e-mail'/>
                    <Input label='Senha' placeholder='digite sua senha'/>
                </ContentContainer>

                <View style= {{flexDirection: 'row', gap: 20}}>
                    <Button 
                        title="Salvar informações" 
                        noSpacing={true} 
                        variant='primary'
                        />
                    <Button 
                        title="Sair da conta" 
                        noSpacing={true} 
                        variant="secondary"
                        onPress={signOut}
                        />
                </View>
                
            </Container>
        </Wrapper>
    );
}
