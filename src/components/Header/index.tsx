import styles from './Header.module.scss'
import Link from 'next/link'
import Logo from '../../../public/assets/svg/logo.svg'
import MenuHamburger from '../../../public/assets/svg/icon-hamburger.svg';
import BtnClosed from '../../../public/assets/svg/icon-close.svg';
import Image from 'next/image'
import classNames from 'classnames'
import { useState } from 'react';
import css from 'classnames';

const Header = () => {

    const [btnHamburger, setBtnHamburger] = useState(MenuHamburger)
    const [active, setActive] = useState(false)

    function meuActive() {
        if (btnHamburger == MenuHamburger) {
            setActive(true)
            setBtnHamburger(BtnClosed)
        } else {
            setActive(false)
            setBtnHamburger(MenuHamburger)
        }
    }


    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.nav__logo}>
                    <Image className={styles.logo} src={Logo} alt='Logo Space Tourism' />
                </div>

                <div >
                    {/* Divisão entre logo e a barra de navegação*/}
                </div>

                <div className={styles.menu__hamburger} onClick={() => meuActive()}>
                    <Image src={btnHamburger} />
                </div>

                <ul className={css({
                    [styles.navList]: true,
                    [styles['navList--active']]: active
                })}>
                    <div className={styles.line}></div>
                    <li className={classNames(
                        styles.navItem,
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