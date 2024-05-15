import Image from "next/image";
import Link from 'next/link';
import style from "./page.module.scss";



export default function Beer() {
    return (
        <>
            <section className={style.first_flex}>
                <div className={style.container_first_content}>
                    <h1 className={style.first_content_text1}>Pair Yourself <br />Some beer</h1>

                    <div className={style.sec1_img1}>
                        <Image
                            src="/assets/images/sanmig-yellow.png"
                            alt="sanmig apple"
                            width={1920}
                            height={1080}
                            quality={100} />
                    </div>


                    <div className={style.first_content_icons}>
                        <ul>
                            <li>
                                <Link href="/Beer">
                                    <Image
                                        src="/assets/images/sanmig-yellow.png"
                                        alt="sanmig apple"
                                        width={1920}
                                        height={1080}
                                        quality={100} />
                                </Link>
                            </li>

                            <li>
                                <Link href="/Beer2">
                                    <Image
                                        src="/assets/images/sanmig-green.png"
                                        alt="sanmig brewed"
                                        width={1920}
                                        height={1080}
                                        quality={100} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={style.second_flex}>
                <div className={style.sec2_content}>
                    <h1> Pirate Beer </h1>
                </div>

                <div className={style.sec2_content_images}>
                    <ul>
                        <li>
                            <Image
                                src="/assets/images/sanmig-green.png"
                                alt="sanmig brewed"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/HP-redhorse3.png"
                                alt="sanmig brewed"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/sanmig-light.png"
                                alt="sanmig brewed"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>


                        <li>
                            <Image
                                src="/assets/images/sanmig-pale-pilsen.png"
                                alt="sanmig brewed"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/tanduay-yellow.png"
                                alt="sanmig brewed"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>
                    </ul>
                </div>
            </section>

            <section className={style.third_flex}>
                <div className={style.sec3_content}>
                    <p>
                        An alcoholic beverage made by brewing and fermentation from cereals, usually malted barley, and flavored with hops and the like for a slightly bitter taste.
                    </p>
                </div>
            </section>

            <section className={style.fourth_flex}>
                <div className={style.sec4_content}>
                    <Image
                        src="/assets/images/img5.jpg"
                        alt="Beer"
                        width={1920}
                        height={1080}
                        quality={100} />
                </div>

            </section>

            <section className={style.fifth_flex}>
                <div className={style.sec5_content}>
                    <h1> Sunshine Dirty Diamond </h1>
                </div>

                <div className={style.sec5_content_images}>
                    <ul>
                        <li>
                            <Image
                                src="/assets/images/heineken.png"
                                alt="Heineken Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/tiger-crystal.png"
                                alt="Tiger Crystal Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/asahi.png"
                                alt="Asahi Super Dry Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>


                        <li>
                            <Image
                                src="/assets/images/manila.png"
                                alt="Manila Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>

                        <li>
                            <Image
                                src="/assets/images/erdinger.png"
                                alt="Erdinger Weissbier Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </li>
                    </ul>
                </div>
            </section>


        </>
    );

}

