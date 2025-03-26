import { useEffect, useState } from "react"

export default function Fetch() {
        //  dado, seta o dado,        estado inicial
    const [ data, setData ] = useState({})

    // console.log(data, 'estado inicial')

        // mock
    const url = 'https://viacep.com.br/ws/04935090/json/'

    useEffect(() => {
        console.log('rodou useEffect')
    }, [])

    // console.log(data, 'estado depois do setData')

    return (
        <div className="">
            <h1>Fetch</h1>
        </div>
    )
}