import { useEffect, useState } from 'react'
import css from 'classnames'
import Planet from '../Planet'
import styles from './Info.module.scss'


const Info = () => {
    const [data, setData] = useState([])
    const [planeta, setPlaneta] = useState({
        name: "moon",
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        png: '/assets/destination/image-moon.png',
        distance: '384,400 KM',
        travel: '3 days'
    })


    useEffect(() => {
        loadData()
    }, [])


    const loadData = async () => {
        const response: Response = await fetch('http://localhost:3050/destinations')
        const dados = await response.json()
        setData(dados)
    }

    function select(planet: any) {
        setPlaneta(planet)
    }



    return (
        <div className={styles.division}>
            <Planet urlImagem={planeta} num="01" title="Pick your destination" />

            <div className={styles.group}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            {data.map(e => (
                                <li key={e.name}>
                                    <button className={css({
                                        [styles.list__btn]: true,
                                        [styles['list__btn--active']]: e.name === planeta.name ? true : false
                                    })}
                                        onClick={() => select(e)}>
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
                    <hr className={styles['dividing-line']} />
                    <div className={styles.flex}>
                        <div className={styles.control}>
                            <p>avg. distance</p>
                            <span>{planeta.distance}</span>
                        </div>
                        <div className={styles.control}>
                            <p>est. travel time</p>
                            <span>{planeta.travel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Info