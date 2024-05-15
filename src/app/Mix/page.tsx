import Image from "next/image"
import Link from "next/link"
import style from "./page.module.scss"
export default function Mix() {
    return (
        <>
            <section className={style.first_flex}>
                <div className={style.container_first_content}>
                    <ul>
                        <li>
                            <Image
                                src="/assets/images/gatorade-blue.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.gatorade}
                            />
                        </li>
                        <li>
                            <Image
                                src="/assets/images/plus.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.plus}
                            />
                        </li>
                        <li>
                            <Image
                                src="/assets/images/tanduay-light.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.tlight}
                            />
                        </li>
                        <li>
                            <Image
                                src="/assets/images/plus.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.plus}
                            />
                        </li>
                        <li>
                            <Image
                                src="/assets/images/soju-fresh.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.soju}
                            />
                        </li>
                    </ul>
                    <h1> Life Starts</h1>
                    <h2><span>Gradient</span> Cocktail</h2>
                </div>
            </section>


            <section className={style.second_flex}>
                <div className={style.container_second_content}>
                    <h2>With a <br /> good mix</h2>
                    <h1>Margarita Mix</h1>

                    <ul>
                        <li>
                            <Image
                                src="/assets/images/tang-dalandan.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.tang}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/plus.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.plus}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/gatorade-blue.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.gatorade}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/plus.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.plus}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/gsm-blue.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.gsm_blue}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/plus.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.plus}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/sprite.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.sprite}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/plus.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.plus}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/lemon.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.lemon}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/plus.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.plus}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/salt.png"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.salt}
                            />
                        </li>
                    </ul>
                </div>
            </section>

            <section className={style.third_flex}>
                <div className={style.container_third_content}>

                    <Image
                        src="/assets/images/img4.jpg"
                        alt="Instagram Captured"
                        width={1920}
                        height={1080}
                        quality={100}
                    />

                    <h1 className={style.sec3_text1}>Experiment your <br /> own mix</h1>
                </div>
            </section>











        </>
    )
}