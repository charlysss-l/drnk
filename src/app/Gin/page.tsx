import Image from "next/image";
import Link from 'next/link';
import style from "./page.module.scss";

export default function Gin() {
    return (
        <>
            <section className={style.first_flex}>
                <div className={style.container_first_content}>
                    <ul>
                        <li><h1 className={style.sec1_text1}>fun beGIN</h1></li>
                        <li>
                            <Image
                                src='/assets/images/gin-bilog.png'
                                alt="Gin Bilog"
                                width={1920}
                                height={1080}
                                quality={100}
                            />
                        </li>
                        <li><h1 className={style.sec1_text2}>with GIN</h1></li>
                    </ul>
                </div>


            </section>

            <section className={style.second_flex}>
                <div className={style.container_second_content}>
                    <ul>
                        <li>
                            <video className={style.video_style} autoPlay muted loop>
                                <source src="/assets/images/gin&tonic.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </li>
                        <li> <h1>gin & tonic</h1></li>
                    </ul>
                </div>
            </section>

            <section className={style.third_flex}>
                <div className={style.container_third_content}>
                    <h1>Blue Ruin</h1>
                </div>
                <div className={style.sec3_content_images}>
                    <ul>
                        <li>
                            <Image
                                src="/assets/images/Ruin Beer_1.jpeg"
                                alt="Blue Ruin 1"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/Ruin Beer_2.jpeg"
                                alt="Blue Ruin 2"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/Ruin Beer_3.jpeg"
                                alt="Blue Ruin 3"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/Ruin Beer_4.jpeg"
                                alt="Blue Ruin 4"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/Ruin Beer_5.jpeg"
                                alt="Blue Ruin 5"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>
                    </ul>
                </div>

            </section>


            <section className={style.fourth_flex}>
                <div className={style.sec4_content_images}>
                    <ul>
                        <li>
                            <Image
                                src="/assets/images/img-gin1.jpg"
                                alt=""
                                width={1920}
                                height={1080}
                                quality={100}
                                className={style.sec4_images_sides}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/img-gin2.jpg"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.sec4_images_center}
                            />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/img-gin3.jpg"
                                alt=""
                                width={1920}
                                height={1020}
                                quality={100}
                                className={style.sec4_images_sides}
                            />
                        </li>
                    </ul>
                </div>
            </section>

            <section className={style.fifth_flex}>
                <div className={style.container_fifth_content}>
                    <ul style={{ display: 'flex' }}> {/* Add inline style here */}
                        <li>
                            <Image
                                src="/assets/images/thebar-lime.png"
                                alt=""
                                width={1920}
                                height={1080}
                                quality={100}
                            />
                        </li>
                        <li>
                            <Image
                                src="/assets/images/thebar-pink.png"
                                alt=""
                                width={1920}
                                height={1080}
                                quality={100}
                            />
                        </li>
                        <li>
                            <Image
                                src="/assets/images/thebar-premiumdry.png"
                                alt=""
                                width={1920}
                                height={1080}
                                quality={100}
                            />
                        </li>
                        <li>
                            <h1>Trust me you know <br /> how to sing </h1>
                        </li>
                    </ul>
                </div>
            </section>

        </>

    );
}