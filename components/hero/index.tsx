import Link from "next/link";
import style from "./style.module.scss";
export default function Hero() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>
          <h1>Get Ready for your exam</h1>
        </div>
        <div className={style.box}>
          <div className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntLorem
          </div>
          <Link href={'/signup'} className={style.link}><div className={style.button}>Get Started</div></Link>
        </div>
        <div className={style.media}>
          <img src="/images/hero.png" alt="hero" className={style.img} />
        </div>
      </div>
    </div>
  );
}
