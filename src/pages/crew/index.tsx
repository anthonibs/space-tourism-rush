import Image from "next/image"
import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import styles from './Crew.module.scss'

const Crew = () => {

    const [crew, setCrew] = useState([])
    const [person, setPerson] = useState({})

    useEffect(() => {
        loadCrew()
    }, [])

    const loadCrew = async () => {
        try {
            const response: Response = await fetch('http://localhost:3050/crew')
            const dados = await response.json()
            setCrew(dados)
        } catch (error) {
            console.log('Erro no servidor')
        }
    }

    function selection(e: []) {
        setPerson(e)
    }


    return (
        <Layout title="Crew" background={styles.background}>
            <section className={styles.container}>
                <div className={styles.layout}>
                    <aside className={styles.information}>
                        <div className={styles.information_wrap}>
                            <h1 className={styles.title}><span className={styles.title_nro}>02</span>Meet your crew</h1>
                            <div>
                                <h3 className={styles.titleProf}>{person.role}</h3>
                                <h2 className={styles.name}>{person.name}</h2>
                                <div className={styles.wrap}>
                                    <p className={styles.description}>
                                        {person.bio}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.sliderFlex}>
                                {crew.map(e => (
                                    <div key={e.name}>
                                        <button
                                            onClick={() => selection(e)}
                                            className={styles.btnSlider}>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <aside className={styles.profile}>
                        <div className={styles.profile_img}>
                            <Image src="/assets/crew/image-douglas-hurley.webp" width={550} height={600} alt="" />
                        </div>
                    </aside>
                </div>
            </section>
        </Layout>
    )
}

export default Crew