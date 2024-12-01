import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
    ContentContainer,
    Title,
    Description
} from '../Details/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import { Button } from '../../components/Button';
import api from '../../services/api';
import { VagaProps } from '../../utils/Types';
import { Linking } from 'react-native'; // Importar para abrir links

export default function Details({ route, navigation }) {

    const [id, setID] = useState(route.params.id);
    const [vaga, setVaga] = useState<VagaProps>(null);

    const fetchVaga = async () => {
        try {
            const response = await api.get(`/api/vagas/${id}`);
            console.log(response);
            const data = response.data.job;
            setVaga({
                id: data.id,
                title: data.titulo,
                description: data.descricao,
                date: data.dataCadastro,
                phone: data.telefone,
                status: data.status,
                company: data.empresa,
            });
        } catch (error) {
            console.log(error);
        }
    };

   /* const handleWhatsAppContact = () => {
       
        const phoneNumber = '73988540662';
        const whatsappURL = `https://wa.me/+55${phoneNumber}?text=Olá! Estou interessado na vaga ${vaga.title}.`;
    
        // Abrir o WhatsApp com a URL formatada
        Linking.openURL(whatsappURL).catch(err =>
            console.error("Não foi possível abrir o WhatsApp", err)
        );
    }; */ // Teste com número real

    const handleWhatsAppContact = () => {
        if (vaga.phone) {
            const whatsappURL = `https://wa.me/${vaga.phone}?text=Olá! Estou interessado na vaga ${vaga.title}.`;
            Linking.openURL(whatsappURL).catch(err =>
                console.error("Não foi possível abrir o WhatsApp", err)
            );
        }
    };

    useEffect(() => {
        fetchVaga();
    }, [id]);

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
            {vaga ? (
                <Container>
                    <ContentContainer>
                        <Title>{vaga.title}</Title>
                        <Description>{vaga.description}</Description>
                    </ContentContainer>
                    {vaga.status === 'Aberta' && (
                        <Button 
                            title="Entrar em contato" 
                            noSpacing={true} 
                            variant="primary"
                            onPress={handleWhatsAppContact} // Adiciona o redirecionamento
                        />
                    )}
                </Container>
            ) : (
                <Title>Vaga não foi encontrada</Title>
            )}
        </Wrapper>
    );
}