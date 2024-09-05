import Image from "next/image";
import Link from 'next/link';
import style from "./page.module.scss";
import NavigationBar from '../../components/NavigationBar/NavigationBar';


export default function Home() {
  return (
    <>
      <NavigationBar />
      <section className={style.first_flex}>
        <div className={style.container_first_content}>
          <video className={style.video_style} autoPlay muted loop>
            <source src="/assets/images/INTRO.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={style.overlay_text}> get
            <span className={style.span_text1}> drnk</span>
          </div>
        </div>
      </section>

      <section className={style.second_flex}>
        <div className={style.container_second_image}>
          <Image
            src="/assets/images/img1.jpg"
            alt="First Image"
            width={1920}
            height={1080}
            quality={100} />

          <div className={style.second_overlay_text}>
            <h1>drnk</h1>
            <Link href="">
              Shop Now
            </Link>

          </div>
        </div>
      </section>


      <section className={style.third_flex}>
        <div className={style.container_third_content}>
          <h1>Nice to meet you!</h1>
          <h2>TELL US YOUR <br />FAVORITE DRINK.</h2>

          <div className={style.container_third_icons} >
            <ul>
              <li>
                <Link href="">
                  <Image
                    src="/assets/images/beer.png"
                    alt="beer"
                    width={1920}
                    height={1080}
                    quality={100} />
                </Link>
              </li>

              <li>
                <Link href="">
                  <Image
                    src="/assets/images/gin.png"
                    alt="gin"
                    width={1920}
                    height={1080}
                    quality={100} />
                </Link>
              </li>

              <li>
                <Link href="">
                  <Image
                    src="/assets/images/brandy.png"
                    alt="brandy"
                    width={1920}
                    height={1080}
                    quality={100} />
                </Link>
              </li>

              <li>
                <Link href="">
                  <Image
                    src="/assets/images/mix-drinks.png"
                    alt="mix"
                    width={1920}
                    height={1080}
                    quality={100} />
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </section>


    </>
  );
}