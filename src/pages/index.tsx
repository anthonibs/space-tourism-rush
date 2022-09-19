import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Homes from './home'
import styles from './index.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Home" background={styles.background}>
        <Homes/>
      </Layout>
    </>
  )
}

export default Home
