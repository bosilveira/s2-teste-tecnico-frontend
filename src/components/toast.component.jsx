
const lento = {
    id: 'lento',
    title: 'Sua conexão parece lenta',
    description: 'Por favor aguarde o carregamento',
    status: 'warning',
    isClosable: false,
    duration: 4000,
    position: 'top',
}

const erro = {
    id: 'erro',
    title: 'Não foi possível conectar ao servidor',
    description: 'Por favor verifique sua conexão',
    status: 'error',
    isClosable: true,
    duration: null,
    position: 'top',
}

const offline = {
    id: 'offline',
    title: 'Seu browser está offline',
    description: 'Por favor revise as configurações do aplicativo',
    status: 'info',
    isClosable: false,
    duration: null,
    position: 'top',
}

const esgotado = {
    id: 'esgotado',
    title: 'Tempo de conexão esgotado',
    description: 'Por favor verifique as configurações de rede',
    status: 'error',
    isClosable: false,
    duration: null,
    position: 'top',
}

export const Toasts = {lento, erro, offline, esgotado}