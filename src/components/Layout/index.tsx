import Head from 'next/head';
import Header from '../Header';

interface LayoutProps {
    title: string,
    children?: any,
    background?: any
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>

            <Header />
            <main className={props.background}>
                {props.children}
            </main>
        </>
    )
}

export default Layout