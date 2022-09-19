import Link from 'next/link'
import styles from './Homes.module.scss'
import Layout from '../../components/Layout'

const Homes = () => {
    return (
        <Layout title='Home' background={styles.background}>
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.group}>
                        <div className={styles.center}>
                            <h2 className={styles.subtitle}>So, you want to travel to</h2>
                            <h1 className={styles.title}>Space</h1>
                            <p className={styles.text}>
                                Let’s face it; if you want to go to space, you might as well genuinely go to
                                outer space and not hover kind of on the edge of it. Well sit back, and relax
                                because we’ll give you a truly out of this world experience!
                            </p>
                        </div>
                    </div>

                    <div className={styles.group}>
                        <button className={styles.btn}>
                            <Link href="/destination">Explore</Link>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Homes