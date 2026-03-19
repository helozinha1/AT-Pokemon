import styles from "./CardPokemon.module.css";

export function CardPokemon({ nome, tipo, poder, foto }) {
    return (
   
    
        <div className={styles.card}>
            <img src={foto} alt={nome} className={styles.foto} />
            <h2 className={styles.nome}>{nome}</h2>
            <p className={styles.texto}> <strong>Tipo:</strong>{tipo}</p>
            <p className={styles.texto}> <strong>Poder:</strong> {poder}</p>
        </div>
    );
}