import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Center, Heading, Image, Link, SimpleGrid, Tooltip, VStack } from '@chakra-ui/react'

export const StartPage = () => {
    return <>
    <Center bg='white' h='100vh' color='blue'>
        <VStack position='relative' spacing='24px'>
            <Image src={'image.png'} borderColor='teal' borderWidth='1px' borderStyle='solid' borderRadius='4px'/>
            <Heading color='teal' fontSize='32px' position='absolute' top='8px'>
                S2 | Teste Técnico - Frontend 
            </Heading>
            <SimpleGrid columns={2} spacing='24px'>
                <Tooltip label='Demonstração padrão do aplicativo' fontSize='sm'>
                    <Button as={Link} href='/default' isExternal colorScheme='teal' size='md' rightIcon={<ExternalLinkIcon />} >
                        Página default
                    </Button>
                </Tooltip>
                <Tooltip label='Demonstração com delay de 2000 ms' fontSize='sm'>
                    <Button as={Link} href='/delay' isExternal colorScheme='teal' size='md' rightIcon={<ExternalLinkIcon />} >
                        Delay de conexão
                    </Button>
                </Tooltip>
                <Tooltip label='Demonstração com erro de tempo esgotado' fontSize='sm'>
                    <Button as={Link} href='/timeout' isExternal colorScheme='teal' size='md' rightIcon={<ExternalLinkIcon />} >
                        Tempo esgotado
                    </Button>
                </Tooltip>
                <Tooltip label='Demonstração com erro de servidor' fontSize='sm'>
                    <Button as={Link} href='/error' isExternal colorScheme='teal' size='md' rightIcon={<ExternalLinkIcon />} >
                        Erro no servidor
                    </Button>
                </Tooltip>
                <Tooltip label='Github bosilveira' fontSize='sm'>
                    <Button as={Link} href='https://github.com/bosilveira/s2-teste-tecnico-frontend' colorScheme='blue' size='md' rightIcon={<ExternalLinkIcon />} >
                        Github @bosilveira
                    </Button>
                </Tooltip>
                <Tooltip label='Github bosilveira' fontSize='sm'>
                    <Button as={Link} href='https://www.linkedin.com/in/bosilveira' colorScheme='blue' size='md' rightIcon={<ExternalLinkIcon />} >
                        LinkedIn @bosilveira
                    </Button>
                </Tooltip>
            </SimpleGrid>
        </VStack>
    </Center>
    
    </>
}
