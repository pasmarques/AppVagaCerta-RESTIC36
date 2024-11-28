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

export default function Details({route, navigation }) {

    const [id, setID] = useState(route.params.id)
    const [vaga, setVaga] = useState<VagaProps>(null);

    const fetchVaga = async () => {
        try{
            const response = await api.get(`/api/vagas/${id}`)
            console.log(response)
            const data = response.data.job
            setVaga({
                id: data.id,
                title: data.titulo,
                description: data.descricao,
                date: data.dataCadastro,
                phone: data.telefone,
                status: data.status,
                company: data.empresa,
            })
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchVaga()
    },[id]);
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
                    <Button 
                    title="Entrar em contato" 
                    noSpacing={true} 
                    variant='primary'
                    />
                </Container>
            ) : (
                <Title>Vaga não foi encontrada</Title>
            )}
            
        </Wrapper>
    );
}
