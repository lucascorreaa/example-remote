import { useState } from "react";
import "./styles.css";

export default function ApiPokemon() {
  // aloca o nome do pokemon que vem do input
  const [pokemon, setPokemon] = useState("");
  // aloca o dado que vem da API
  const [data, setData] = useState(null);
  // informa quando está carregando
  const [loading, setLoading] = useState(false);
  // variável para trazer a informação caso tenha erro
  const [erro, setErro] = useState(null)
  // variável que dispara uma função
  const handleGetPokemon = () => {
    // verifica se tem texto dentro da variável pokemon
    if (!pokemon) return;
    // limpar o dado do ultimo pokemon
    setData(null)
    // limpar o erro anterior
    setErro(null)
    // usuário clicou e antes de começar a processar, eu coloco para carregar
    setLoading(true);
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res.json())
        .then((result) => {
          // salvando o dado do pokemon na variável
          setData(result);
          //  desligando o loading
          setLoading(false);
        })
        .catch(() => {
          setErro('Ocorreu um erro ao buscar o pokemon!')
          setLoading(false)
        })
    }, 10000)
  };
  

  console.log(data);
  return (
    <div className="">
      <h1>Busque seu Pokemon Favorito</h1>
      <input
        type="text"
        placeholder="Quem é esse pokemon?"
        onChange={(e) => setPokemon(e.target.value)}
        value={pokemon}
      />
      <button
        // caso não tenha nenhum nome o botão fica disabled
        disabled={pokemon.length <= 0 ? true : false}
        onClick={handleGetPokemon}
      >
        Gotta Catch
      </button>
      {/* quando o loading tiver true mostra o paragrafo */}
      {loading && <p>Carregando...</p>}
      {/* quando a Promisse for rejeitada mostra o erro */}
      {erro && <p>{erro}</p>}
      {/* quando o data da API chegar, traz as informações */}
      {
        data && 
        <div className="">
        <img src={data.sprites.versions['generation-v']['black-white'].animated.front_default} alt={`Foto do ${pokemon}`} />
            <p>{data.name}</p>
        </div>
      }
    </div>
  );
}
