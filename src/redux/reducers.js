const dados = JSON.parse(sessionStorage.getItem("dados"))

const initialState = dados
    ? { ...dados } : { 
        valor: 1000.00,
        parcelas: 12,
        mdr: 2,
        status: "conectando",
        erro: null,
        resultado: {
            "1": 0,
            "15": 0,
            "30": 0,
            "60": 0,
            "90": 0
        }
     }

export const fetchReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "@fetch.conectando": 
            state = { ...state, status: "conectando", ...payload }
            sessionStorage.setItem("dados", JSON.stringify(state))
            return state
        case "@fetch.lento": 
            state = { ...state, status: "lento" }
            sessionStorage.setItem("dados", JSON.stringify(state))
            return state
        case "@fetch.sucesso":
            state = { ...state, status: "sucesso", resultado: { ...payload } }
            sessionStorage.setItem("dados", JSON.stringify(state))
            return state
        case "@fetch.cancelado":
            state = { ...state, status: "cancelado", }
            sessionStorage.setItem("dados", JSON.stringify(state))
            return state
        case "@fetch.erro":
            state = { ...state, status: "erro"  }
            sessionStorage.setItem("dados", JSON.stringify(state))
            return state
            case "@fetch.esgotado":
            state = { ...state, status: "esgotado" }
            sessionStorage.setItem("dados", JSON.stringify(state))
            return state
        default:
            return state
    }
}
