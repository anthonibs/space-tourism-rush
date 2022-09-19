import { useEffect, useState } from 'react'
import Planet from '../Planet'
import styles from './Info.module.scss'


const Info = (props: any) => {
    const [data, setData] = useState([])
    const [planeta, setPlaneta] = useState([])

    useEffect(() => {
        loadData()
    }, [])


    const loadData = async () => {
        const response: Response = await fetch('http://localhost:3050/destinations')
        const dados = await response.json()
        setData(dados)
    }

    function select(planet: any) {
        console.log("Planeta selecionado ", planet)
        setPlaneta(planet)
    }


    return (
        <div className={styles.division}>
            <Planet image={planeta} num="01" title="Pick your destination" />

            <div className={styles.group}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            {data.map(e => (
                                <li key={e.name}>
                                    <button onClick={() => { select(e) }}>
                                        {e.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <h1 className={styles.title}>
                        {planeta.name}
                    </h1>
                    <p className={styles.text}>
                        {planeta.description}
                    </p>
                    <hr />
                    <div className={styles.flex}>
                        <div className={styles.control}>
                            <p>avg. distance</p>
                            <p>{planeta.distance}</p>
                        </div>
                        <div className={styles.control}>
                            <p>est. travel time</p>
                            <p>{planeta.travel}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}


export default Info