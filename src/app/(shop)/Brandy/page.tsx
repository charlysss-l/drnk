import Image from "next/image";
import Link from 'next/link';
import style from "./page.module.scss"

export default function Brandy() {
    return (
        <>
            <section className={style.first_flex}>
                <div className={style.container_first_content}>
                    <div className={style.textContainer}>
                        <h1>Get Drnk</h1>
                        <h2>With Some light</h2>
                    </div>
                    <Image
                        src="/assets/images/alfonso-light.png"
                        alt="your_image_description"
                        width={1920}
                        height={1020}
                        quality={100}
                    />
                </div>
            </section>

            <section className={style.second_flex}>
                <div className={style.container_second_content}>
                    <ul>
                        <li>
                            <Image
                                src="/assets/images/img-bar1.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                quality={100}
                                className={style.sec2_images_sides}
                            />
                        </li>
                        <li>
                            <Image
                                src="/assets/images/img-bar2.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                quality={100}
                                className={style.sec2_images_center}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/img-bar3.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                quality={100}
                                className={style.sec2_images_sides}
                            />
                        </li>
                    </ul>
                </div>
            </section>

            <section className={style.third_flex}>
                <div className={style.container_third_content}>
                    <Image
                        src="/assets/images/emperador-light.png"
                        alt=""
                        width={1920}
                        height={1080}
                        quality={100}
                    />

                    <div className={style.textContainer_third}>
                        <h1>You don't miss your ex,<br />it's just<span> brandy</span></h1>
                    </div>
                </div>
            </section>

            <section className={style.fourth_flex}>
                <div className={style.container_fourth_content}>
                    <div className={style.textContainer_fourth}>
                        <h1>Every Good Day<br /> Starts with a  <br />coffee</h1>
                    </div>
                    <Image
                        src="/assets/images/emperador-coffee.png"
                        alt=""
                        width={1920}
                        height={1020}
                        quality={100}
                    />
                </div>
            </section>



        </>
    )
}