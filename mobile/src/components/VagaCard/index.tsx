import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container, Content, OpenButton, Title, Data, Company } from './styles';
import { Feather } from '@expo/vector-icons';

import { RootStackParamList } from '../../utils/Types';
import React from 'react';
import { Text} from 'react-native';

interface Data{
    id: number;
    title: string;
    dataCreated: string;
    company: string;
    status: string;
  }


type Props = NativeStackScreenProps<RootStackParamList>;

export default function VagaCard({id, title, dataCreated, company, status}: Data) {
    const navigation = useNavigation<Props['navigation']>();
    const statusColor = status === 'Aberta' ? 'green' : 'red';
    
    return (
        <Container onPress={() => navigation.navigate('Details', { id })}>
            <Content>
                <Title numberOfLines={1}>{title}</Title>
                <Data>{dataCreated}</Data>
                <Company numberOfLines={1}>{company}</Company>
                <Text numberOfLines={1} 
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: statusColor,
                    }}
                >
                    {status}
                </Text>
            </Content>
            <OpenButton>
                <Feather name="chevron-right" size={24} color={'#3D6CB9'} />
            </OpenButton>
        </Container>
    );
}
