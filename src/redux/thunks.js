import axios from "axios";

const limite = 2000
const timeout = 5000
const temporizador = new AbortController();

export const fetchThunk = (url, data) => (dispatch) => {
    const lento = setTimeout(()=>{
        dispatch({
            type: "@fetch.lento",
            payload: null
        })
    }, limite)
    dispatch({
        type: "@fetch.conectando",
        payload: data
    })
    axios.post(url, {
        amount: data.valor,
        installments: data.parcelas,
        mdr: data.mdr,
        days: [1, 15, 30, 60, 90]
    }, {
        timeout: timeout, 
        signal: temporizador.signal,
        headers: { "Content-Type": "application/json" } })
        .then((success) => {
            clearTimeout(lento)
            dispatch({
                type: "@fetch.sucesso",
                payload: success.data
            })
        })
        .catch((error) => {
            clearTimeout(lento)
            if (error.code === 'ECONNABORTED') {
                dispatch({
                    type: "@fetch.esgotado",
                    payload: null
                })
            }

            if (error.response?.status === 408) {
                dispatch({
                    type: "@fetch.esgotado",
                    payload: null
                })
            }
            if (error.response?.status === 500) {
                dispatch({
                    type: "@fetch.erro",
                    payload: null
                })
            }
        }
    )
}
