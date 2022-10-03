import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import styles from './Technology.module.scss'
import css from 'classnames';


const Technology = () => {

    useEffect(() => {
        loadTechnology()
    }, [])

    const [data, setData] = useState([])
    const [technology, setTechnology] = useState({
        name: "Launch vehicle",
        images: {
            portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
            landscape: "/assets/technology/image-launch-vehicle-landscape.jpg"
        },
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    })



    async function loadTechnology() {
        const response = await fetch('http://localhost:3050/technology')
        const data = await response.json()

        return setData(data)
    }


    return (
        <Layout title="Technology" background={styles.background}>
            <section className={styles.container}>
                <div className={styles.container__grid}>
                    <header className={styles.header}>
                        <h2 className={styles.header__title}><span className={styles.header__number}>03</span>space launch 101</h2>
                    </header>

                    <aside className={styles.control__info}>
                        <article className={styles.control__group}>
                            <nav className={styles.control__navigation}>
                                {data.map((btn, index) => (
                                    <button
                                        key={btn.name}
                                        onClick={() => setTechnology(btn)}
                                        className={css({
                                            [styles.button__tech]: true,
                                            [styles['button__tech--active']]: btn.name === technology.name ? true : false
                                        })}
                                    >
                                        {index = index + 1}
                                    </button>
                                ))}
                            </nav>
                            <div className={styles.control__wrapper}>
                                <h4 className={styles.subtitle}>the terminology...</h4>
                                <h2 className={styles.name}>{technology.name}</h2>
                                <p className={styles.description}>{technology.description}</p>
                            </div>
                        </article>
                    </aside>

                    <aside className={styles.control__img}>
                        <img src={technology.images.landscape} />
                    </aside>
                </div>
            </section>
        </Layout>
    )
}


export default Technology