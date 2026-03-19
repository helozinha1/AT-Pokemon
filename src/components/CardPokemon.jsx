import styles from "./CardPokemon.module.css";

export function CardPokemon({ nome, tipo, poder, foto, numero }) {
    return (
   
    
        <div className={styles.card}>
            <img src={foto} alt={nome} className={styles.foto} />
            <p className={styles.numero}><strong>Nº </strong>{numero}</p>
            <h2 className={styles.nome}>{nome}</h2>
            <p className={styles.texto}> <strong>Tipo:</strong>{tipo}</p>
            <p className={styles.texto}> <strong>Poder:</strong> {poder}</p>
        </div>
    );
}