import { Center } from '@chakra-ui/react'
import { Form } from "../components/form.component"

export const DelayPage = () => {
    return <>
    <Center bg='#F5F7FA' h='100vh' color='blue'>
        <Form url={'https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=2500'}/>
    </Center>
    
    </>
}
