import style from "./style.module.scss";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footer}>
        <div className={style.logo}>Master9</div>
        <div className={style.menu}>
          <div className={style.card}>
            <div className={style.title}>Tests </div>
            <ol className={style.child}>
              <li>Cambridge 17</li>
              <li>Cambridge 16</li>
              <li>Cambridge 15</li>
            </ol>
          </div>

          <div className={style.card}>
            <div className={style.title}>Source</div>
            <ol>
              <li>How to improve Speaking?</li>
              <li>Top band 9 words</li>
              <li>Skibidi Rizz Ohio</li>
            </ol>
          </div>

          <div className={style.card}>
            <div className={style.title}>Contacts</div>
            <ol>
              <li>About Us</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie</li>
            </ol>
          </div>
        </div>
      </div>
      <div className={style.copyright}>Master9 Team 2024</div>
    </div>
  );
}
