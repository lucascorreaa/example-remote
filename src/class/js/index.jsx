export default function Js({ fullName, age }) {
    // objeto
    let brand = {
        name: 'Suporte',
        founded: 2023,
        city: 'São Paulo'
    }
    // desestruturação de objeto
    const { city } = brand

    return <h1>nome completo: {fullName}, {age}</h1>

}