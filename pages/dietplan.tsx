import Categories from '@/components/Categories'
import { useRouter } from 'next/router'
import { useState } from 'react'
import style from './style.module.scss'

export default function DeitPlan() {
	const router = useRouter()
	const [menuOpen, setMenuOpen] = useState(false)

	const handleClick = (e: any, path: string) => {
		e.preventDefault()
		router.push(path)
	}

	return (
		<>
			<header className={style.header}>
				<nav className={style.navbar}>
					<div className={style.navigation}>
						<div className={style.deitplan}>
							<a className={style.a_link} href='/dietplan'>
								Diet Plan
							</a>
						</div>
						<div className={style.navbar_nav}>
							<a href='#'>Shopping List</a>
							{/* <a href='#'>Popular Recipts</a> */}
							<a href='#'>Notifications</a>
						</div>
					</div>
					<button
						className={style.menu_btn}
						onClick={() => setMenuOpen(prev => !prev)}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='24'
							height='24'
							color='#fff'
							fill='none'
						>
							<path
								d='M4 5L20 5'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M4 12L20 12'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M4 19L20 19'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
					{menuOpen && (
						<div className={style.sidebar}>
							<button
								className={style.close_btn}
								onClick={() => setMenuOpen(prev => !prev)}
							>
								<svg
									viewBox='0 0 512 512'
									fill='currentColor'
									height='26'
									width='26'
									color='#fff'
								>
									<path
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={32}
										d='M368 368L144 144M368 144L144 368'
									/>
								</svg>
							</button>

							<div className={style.side_bar_content}>
								<a href='#'>Shopping List</a>
								{/* <a href='#'>Popular Recipts</a> */}
								<a href='#'>Notifications</a>
							</div>
						</div>
					)}
				</nav>
				<div className={style.test}>
					<Categories />
				</div>
			</header>
		</>
	)
}
