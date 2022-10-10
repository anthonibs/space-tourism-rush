import { useEffect, useState } from "react"
import css from "classnames"
import Layout from "../../components/Layout"
import styles from './Crew.module.scss'
import database from '../../backend/data.json'

const Crew = () => {

    const [crew, setCrew] = useState<any[]>([])
    const [person, setPerson] = useState({
        name: "Douglas Hurley",
        png: "/assets/crew/image-douglas-hurley.png",
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    })

    useEffect(() => {
        // loadCrew()
        setCrew(database.crew)
    }, [])

    // const loadCrew = async () => {
    //     try {
    //         const response: Response = await fetch('http://localhost:3050/crew')
    //         const dados = await response.json()
    //         setCrew(dados)

    //         return dados
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    function selection(select: any) {
        setPerson(select)
    }


    return (
        <Layout title="Crew" background={styles.background}>
            <section className={styles.container} id="message-error">
                <div className={styles.layout}>
                    <h1 className={styles.title}>
                        <span>02</span>
                        Meet your crew
                    </h1>
                    <aside className={styles.information}>
                        <div className={styles.information_wrap}>
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
                                            className={css({
                                                [styles.btnSlider]: true,
                                                [styles['btnSlider--active']]: e.name === person.name ? true : false

                                            })}>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <aside className={styles.profile}>
                        <div className={styles.profile_img}>
                            <img src={person.png} alt={person.name} />
                            <div className={styles.line}></div>
                        </div>
                    </aside>
                </div>
            </section >
        </Layout >
    )
}

export default Crew