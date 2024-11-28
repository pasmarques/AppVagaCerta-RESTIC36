import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Wrapper, Container, Header, HeaderButtonContainer, ButtonIcon, ButtonText, ContentContainer } from '../Profile/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/AuthContext';
import { View } from 'react-native';

export default function Profile({ navigation }) {

    const { signOut, user, editUser } = useAuth();
    const [nome, setNome] = useState(user?.nome || '');
    const [email, setEmail] = useState(user?.email || '');
    const [senha, setSenha] = useState(user?.senha || '');

    useEffect(() => {
        if (user) {
            setNome(user.nome || '');
            setEmail(user.email  || '');
            setSenha(user.senha || '');
        }
    }, [user]);

    const handleSave = async () => {
        if (user) {
            await editUser(user.id, nome, email, senha); // Chama a função de editar usuário
        }
    };

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
                    <Input label='Nome' value={nome} onChangeText={setNome} />
                    <Input label='E-mail' value={email} onChangeText={setEmail} />
                    <Input label='Senha' value={senha} onChangeText={setSenha} secureTextEntry />
                </ContentContainer>

                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <Button
                        title="Salvar informações"
                        noSpacing={true}
                        variant='primary'
                        onPress={handleSave}
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
