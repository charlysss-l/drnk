import Image from "next/image";
import Link from 'next/link';
import style from "./page.module.scss";



export default function Beer2() {
    return (
        <>
            <section className={style.first_flex}>
                <div className={style.container_first_content}>
                    <h1 className={style.first_content_text1}>Pair Yourself <br />Some beer</h1>

                    <div className={style.sec1_img1}>
                        <Image
                            src="/assets/images/sanmig-green.png"
                            alt="sanmig brewed"
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
                    <h1 className={style.sec2_text1}> Most Popular <span>Beers</span> in the World </h1>

                    <div className={style.sec2_row}>

                        <div className={style.sec2_column}>
                            <Image
                                src="/assets/images/beer2_img1.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                            <Image
                                src="/assets/images/beer2_img2.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />

                            <Image
                                src="/assets/images/beer2_img3.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />

                            <Image
                                src="/assets/images/beer2_img4.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />

                            <Image
                                src="/assets/images/beer2_img5.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </div>

                        <div className={style.sec2_column}>
                            <Image
                                src="/assets/images/beer2_img6.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                            <Image
                                src="/assets/images/beer2_img7.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />

                            <Image
                                src="/assets/images/beer2_img8.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />

                            <Image
                                src="/assets/images/beer2_img9.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />

                            <Image
                                src="/assets/images/beer2_img10.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </div>

                        <div className={style.sec2_column}>
                            <Image
                                src="/assets/images/beer2_img11.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                            <Image
                                src="/assets/images/beer2_img12.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />

                            <Image
                                src="/assets/images/beer2_img13.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />

                            <Image
                                src="/assets/images/beer2_img14.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />

                            <Image
                                src="/assets/images/beer2_img15.jpg"
                                alt="Beer"
                                width={1920}
                                height={1080}
                                quality={100} />
                        </div>

                    </div>

                </div>
            </section>



        </>
    );
}