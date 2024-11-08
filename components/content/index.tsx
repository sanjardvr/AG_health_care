import style from "./style.module.scss";

export default function Content() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.firstBox}>
          <div className={style.media}>
            <img src="/images/cb17.jpg" alt="img" className={style.img} />
          </div>
          <div className={style.description}>Cambridge IELTS ACADEMIC 17</div>
        </div>
        <div className={style.secondBox}>
          <div className={style.media}>
            <img src="/images/cb17.jpg" alt="img" className={style.img} />
          </div>
          <div className={style.description}>Cambridge IELTS ACADEMIC 17</div>
        </div>
      </div>
    </div>
  );
}
