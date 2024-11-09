// import { useRouter } from 'next/router'
// import style from './style.module.scss'

// export default function Home() {
// 	const router = useRouter()

// 	const handleClick = (e: any, path: string) => {
// 		e.preventDefault()
// 		router.push(path)
// 	}
// 	return (
// 		<>
// 			<div className={style.wrapper}>
// 				<div className={style.logo_container}>
// 					<div className={style.logo}>A&G team</div>
// 				</div>

// 				<div className={style.image_container}>
// 					<div className={style.image}></div>
// 				</div>

// 				<div className={style.text_box}>
// 					<div className={style.text}>
// 						Your journey to wellness starts here. Personalized plans, real
// 						results, every day.
// 					</div>
// 				</div>
// 			</div>

//
// 		</>
// 	)
// }

// import { useRouter } from 'next/router'
// import style from './style.module.scss'

// export default function Home() {
// 	const router = useRouter()

// 	const handleClick = (e: any, path: string) => {
// 		e.preventDefault()
// 		router.push(path)
// 	}

// 	return (
// 		<>
// 			<div className={style.wrapper}>
// 				{/* Logo Section */}
// 				<div className={style.logo_container}>
// 					<div className={style.logo}>A&G Health Team</div>
// 				</div>

// 				{/* Image Section */}
// 				<div className={style.image_container}>
// 					<div className={style.image}>
// 						<img
// 							src='/images/start.jpg'
// 							alt='Breakfast setting'
// 							className={style.img}
// 						/>
// 					</div>
// 				</div>

// 				{/* About Text and Button */}
// 				<div className={style.text_box}>
// 					<div className={style.text}>
// 						Your journey to wellness starts here. Personalized plans, real
// 						results, every day.
// 					</div>
// 					<button
// 						onClick={e => handleClick(e, '/register')}
// 						className={style.button}
// 					>
// 						Register Now
// 					</button>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

import { useRouter } from 'next/router'
import style from './style.module.scss'

export default function Home() {
	const router = useRouter()

	const handleClick = (e: any, path: string) => {
		e.preventDefault()
		router.push(path)
	}

	return (
		<>
			<div className={style.wrapper}>
				{/* Logo Section */}
				<div className={style.logo_container}>
					<div className={style.logo}>A&G Health Team</div>
				</div>

				<div className={style.image_container}>
					<img
						src='/images/homebanner.jpg'
						alt='Breakfast setting'
						className={style.img}
					/>
					<div className={style.overlay}>
						<div className={style.animationBox}>
							<img
								src='/images/home1.jpg'
								alt='img'
								className={style.modify_img}
							/>
							<img
								src='/images/home2.jpg'
								alt='img'
								className={style.modify_img}
							/>
							<img
								src='/images/home3.jpg'
								alt='img'
								className={style.modify_img}
							/>
							<img
								src='/images/home4.jpg'
								alt='img'
								className={style.modify_img}
							/>
						</div>

						<div className=''>
							<div className={style.text}>
								<h2 className={style.gradientText}>
									Put your diet on Autopilot
								</h2>
								Your journey to wellness starts here. Personalized plans, real
								results, every day.
							</div>
							<button
								onClick={e => handleClick(e, '/register')}
								className={style.button}
							>
								Register Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
