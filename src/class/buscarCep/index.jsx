import { useState } from 'react'
import styles from './style.module.css'

export default function BuscaCep() {

    const [ cep, setCep ] = useState('')
    const [ data, setData ] = useState(null)

    const handleBuscar = () => {
        if(!cep) return
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(result => setData(result))
    }
    console.log(cep, 'debug cep')
    console.log(data, 'debug data')

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Busque o seu CEP</h1>
            <input maxLength={8} onChange={(e) => setCep(e.target.value)} type="number" className={styles.input} />
            <button className={styles.button} onClick={handleBuscar}>pesquisar
            </button>
            {
                data && (
                    <div className="">
                        <p>endereço: {data.logradouro}</p>
                        <p>cidade: {data.localidade}</p>
                        <p>bairro: {data.bairro}</p>
                    </div>
                )
            }
        </div>
    )
}