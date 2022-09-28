import {
    Center, Flex, FormControl, FormHelperText, FormLabel, Heading, InputGroup, InputLeftElement, NumberInput,
    NumberInputField, Progress, Skeleton, Text, useToast, VStack
} from '@chakra-ui/react';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchThunk } from '../redux/thunks';
import { Toasts } from './toast.component';

export const Form = ({ url }) => {

    const dispatch = useDispatch();

    const dados = useSelector((state) => state.dados);
    const [valor, setValor] = React.useState(1000.0)
    const [parcelas, setParcelas] = React.useState(12)
    const [mdr, setMdr] = React.useState(2)
    const [resultado, setResultado] = React.useState(false)
    const toast = useToast()

    const fetchHandler = () => {
        dispatch(fetchThunk(url, {valor: parseFloat(valor), parcelas: parseInt(parcelas), mdr: parseFloat(mdr)}))
    }

    const calculoHandler = (e) => {
        toast.closeAll()
        if (e.target.id === 'valor') setValor(e.target.value)
        if (e.target.id === 'parcelas') setParcelas(e.target.value)
        if (e.target.id === 'mdr') setMdr(e.target.value)
    }

    React.useEffect(()=>{
        if (!navigator.onLine) {
            if (!toast.isActive(Toasts.offline.id)) toast(Toasts.offline)
        } else {
            if (dados.status === "lento") if (!toast.isActive(Toasts.lento.id)) toast(Toasts.lento)
            if (dados.status === "erro") if (!toast.isActive(Toasts.erro.id)) toast(Toasts.erro)
            if (dados.status === "esgotado") if (!toast.isActive(Toasts.esgotado.id)) toast(Toasts.esgotado)
            if (dados.status === "sucesso") {
                setResultado(true)
            } else {
                setResultado(false)
            }
            if (dados.status === "conectando") toast.closeAll()
        }

    },[dados.status])

    React.useEffect(()=>{
        const tempo = 750
        const dispara = setTimeout(() => {
            fetchHandler()
        }, tempo);
        
        return ()=>{
            clearTimeout(dispara)
        }

    },[valor, parcelas, mdr])

    return <>
    <Flex  w='640px' h='400px' borderWidth='1px' borderRadius='4px' borderColor='#D7E0E7' borderStyle='solid'
    color='#676767'>

        <Center w='400px' backgroundColor='white' padding='32px'>
            <VStack alignItems='left' spacing='16px' w='100%'>
                <Heading fontSize='24px'>Simule sua Antecipação</Heading>
                <FormControl>
                    <FormLabel>Informe o valor da venda *</FormLabel>
                    <InputGroup>
                        <NumberInput min={1000} defaultValue={1000} precision={2} step={1}  w='100%'>
                            <InputLeftElement children='R$'/>
                            <NumberInputField paddingLeft='40px' value={valor} id='valor'
                             onChange={calculoHandler} onKeyUp={calculoHandler}/>
                        </NumberInput>
                    </InputGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Em quantas parcelas *</FormLabel>
                    <NumberInput min={1} max={12} defaultValue={12} precision={0} step={1}>
                        <NumberInputField value={parcelas} id='parcelas'
                        onChange={calculoHandler} onKeyUp={calculoHandler}/>
                        </NumberInput>
                    <FormHelperText>Máximo de 12 parcelas</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Informe o percentual de MDR *</FormLabel>
                    <NumberInput min={0} defaultValue={2} precision={2} step={0.2}>
                        <NumberInputField value={mdr} id='mdr'
                        onChange={calculoHandler} onKeyUp={calculoHandler}/>
                        </NumberInput>
                    <FormHelperText></FormHelperText>
                </FormControl>
            </VStack>
        </Center>

        <Center w='240px' padding='32px'>
            <VStack alignItems='left' spacing='24px' w='100%'>
                <Heading fontSize='16px' color='#4077BC' fontStyle='italic'>VOCÊ RECEBERÁ:</Heading>
                <Progress size='xs' color='#4077BC' isIndeterminate={!resultado}/>
                <Skeleton isLoaded={resultado}>
                    <Text fontSize='16px' color='#4077BC' fontStyle='italic'>
                        Amanhã: <Text as='b'>{dados.resultado["1"].toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Text>
                    </Text>
                </Skeleton>
                <Skeleton isLoaded={resultado}>
                    <Text fontSize='16px' color='#4077BC' fontStyle='italic'>
                        Em 15 dias: <Text as='b'>{dados.resultado["15"].toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Text>
                    </Text>
                </Skeleton>
                <Skeleton isLoaded={resultado}>
                    <Text fontSize='16px' color='#4077BC' fontStyle='italic'>
                        Em 30 dias: <Text as='b'>{dados.resultado["30"].toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Text>
                    </Text>
                </Skeleton>
                <Skeleton isLoaded={resultado}>
                    <Text fontSize='16px' color='#4077BC' fontStyle='italic'>
                        Em 60 dias: <Text as='b'>{dados.resultado["60"].toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Text>
                    </Text>
                </Skeleton>
                <Skeleton isLoaded={resultado}>
                    <Text fontSize='16px' color='#4077BC' fontStyle='italic'>
                        Em 90 dias: <Text as='b'>{dados.resultado["90"].toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</Text>
                    </Text>
                </Skeleton>
            </VStack>
        </Center>

    </Flex>
    </>
}