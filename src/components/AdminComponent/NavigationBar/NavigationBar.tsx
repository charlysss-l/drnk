import Link from 'next/link';
import style from "./NavigationBar.module.scss";

export default function NavigationBar() {
    return (
        <>
            <nav>
                <ul className={style.nav}>
                    <li className={style.nav_items}><Link href="" className={style.nav_link}>Home</Link></li>
                    <li className={style.nav_items}><Link href="/admin/order" className={style.nav_link}>Order</Link></li>
                    <li className={style.nav_items}><Link href="/admin/product" className={style.nav_link}>Product</Link></li>
                    <li className={style.nav_items}><Link href="/admin/customer" className={style.nav_link}>Customer</Link></li>
                </ul>
            </nav>
        </>
    )
}