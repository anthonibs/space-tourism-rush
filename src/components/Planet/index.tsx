import styles from './Planet.module.scss'

interface planetProps {
    num: string,
    title: string,
    urlImagem: any
}

const Planet = (props: planetProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.group}>
                <h1 className={styles.subtitle}><span>{props.num}</span> {props.title}</h1>
                <img className={styles.image} src={props.urlImagem.png} alt="Planeta" />
            </div>
        </div>

    )
}

export default Planet