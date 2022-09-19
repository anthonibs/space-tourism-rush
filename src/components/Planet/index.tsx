import Image from "next/image"
import styles from './Planet.module.scss'

interface planetProps {
    num: string,
    title: string,
    image: any
}

const Planet = (props: planetProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.group}>
                <h1 className={styles.subtitle}>{props.num} {props.title}</h1>
                <Image className={styles.image} src={props.image} alt="Planeta" />
            </div>
        </div>

    )
}

export default Planet