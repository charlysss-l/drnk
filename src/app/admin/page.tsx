import Image from "next/image";
import Link from 'next/link';
import style from "./page.module.scss";
import NavigationBar from '../../components/AdminComponent/NavigationBar/NavigationBar';

export default function Admin() {
    return (
        <>
            <NavigationBar />


            <section className={style.third_flex}>
                <div className={style.container_third_content}>
                    <h1>Nice to meet you!</h1>





                </div>
            </section>


        </>
    );
}