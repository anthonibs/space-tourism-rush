import styles from './Header.module.scss'
import Link from 'next/link'
import Logo from '../../../public/assets/svg/logo.svg'
import Image from 'next/image'
import classNames from 'classnames'

const Header = (props: any) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href={'/'}>
                    <Image className={styles.logo} src={Logo} alt='Logo Space Tourism' />
                </Link>

                <div></div>

                <ul className={styles.navList}>
                    <hr className={styles.line} />
                    <li className={classNames(
                        styles.navItem,
                        // styles.active
                    )}>
                        <span>00</span>
                        <Link className={styles.link} href="/">home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <span>01</span>
                        <Link href="/destination">destination</Link>
                    </li>
                    <li className={styles.navItem}>
                        <span>02</span>
                        <Link href="/crew">crew</Link>
                    </li>
                    <li className={styles.navItem}>
                        <span>03</span>
                        <Link href="/technology">technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header