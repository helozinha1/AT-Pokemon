
import { CardPokemon } from "./components/CardPokemon";
import styles from "./App.module.css"; // Importando como módulo


export function App() {
  const pokemons = [
  { 
id: 1, 
nome: "Bulbasaur", 
tipo: "Planta / Veneno", 
poder: "Chicote de Vinha", 
foto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
  { 
id: 4, 
nome: "Charmander", 
tipo: "Fogo", 
poder: "Lança-Chamas", 
foto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { 
id: 7, 
nome: "Squirtle", 
tipo: "Água", 
poder: "Jato de Água", 
foto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { 
id: 25, 
nome: "Pikachu", 
tipo: "Elétrico", 
poder: "Choque do Trovão", 
foto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
  { 
id: 143, 
nome: "Snorlax", 
tipo: "Normal", 
poder: "Dormir", 
foto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" }
];

  return (
    <>
      <div className={styles.container}> 
        <h1 className={styles.titulo}>Pokedex</h1>
        <div className={styles.listaCards}>
          {pokemons.map((pokemon) => (
            <CardPokemon key={pokemon.id} numero={pokemon.id} nome={pokemon.nome} tipo={pokemon.tipo} poder={pokemon.poder} foto={pokemon.foto} />
          ))}
        </div>
      </div>
    </>
    
  );
}

export default App;
