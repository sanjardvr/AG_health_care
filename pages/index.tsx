import { useRouter } from "next/router";
import style from "./style.module.scss";



export default function Home() {

	const router = useRouter();

	const handleClick = (e: any, path: string) => {
		e.preventDefault();
		router.push(path);
	  };
	return (
	<>
	<div className={style.wrapper}>
		<div className={style.logo}></div>
		<div className={style.text_box}>
			<div className={style.img}><img src={'/images/start.jpg'} alt="img" /></div>
			<div className={style.text}>Your journey to wellness starts here. Personalized plans, real results, every day.</div>
		</div>
			<div onClick={(e) => handleClick(e, "/login")} className={style.button}>Get Started</div>
	</div>
	</>
	)
}
