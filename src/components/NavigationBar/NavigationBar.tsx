import Link from 'next/link';
import style from "./NavigationBar.module.scss";

export default function NavigationBar() {
    return (
        <>
            <nav>
                <ul className={style.nav}>
                    <li className={style.nav_items}><Link href="" className={style.nav_link}>Intro</Link></li>
                    <li className={style.nav_items}><Link href="/Beer" className={style.nav_link}>Beer</Link></li>
                    <li className={style.nav_items}><Link href="/Gin" className={style.nav_link}>Gin</Link></li>
                    <li className={style.nav_items}><Link href="/Brandy" className={style.nav_link}>Brandy</Link></li>
                    <li className={style.nav_items}><Link href="/Mix" className={style.nav_link}>Mix</Link></li>
                    <li className={style.nav_items}><Link href="/Shop" className={style.nav_link}>Shop</Link></li>
                    <li className={style.nav_items}><Link href="/LetsConnect" className={style.nav_link}>Let's Connect</Link></li>
                </ul>
            </nav>
        </>
    )
}