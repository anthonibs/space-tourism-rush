import Info from "../../components/Info"
import Layout from "../../components/Layout"
import styles from './Destination.module.scss'

const Destination = () => {
    return (
        <Layout title='Destination' background={styles.background}>
            <section className={styles.section}>
                <Info />
            </section>
        </Layout>
    )
}

export default Destination