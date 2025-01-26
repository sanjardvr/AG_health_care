import { getStrapiURL } from '@/utils'
import { Alert, Box, Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import style from './style.module.scss'

export default function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()
	const [active, setActive] = useState(true)
	const [passive, setPassive] = useState(true)

	// * Handling an alert that pop ups after succsessful submit
	const [open, setOpen] = useState(false)
	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') return
		setOpen(false)
	}

	const handleEmail = (event: any) => {
		setEmail(event.target.value)
	}

	const handlePassword = (event: any) => {
		setPassword(event.target.value)
	}

	const handleLogin = async (event: any) => {
		setActive(false)
		setPassive(true)
		if (!email || !password) {
			alert('Please fill in all fields!')
			return
		}

		event.preventDefault()
		try {
			const response = await fetch(
				getStrapiURL(
					`/https://1991-63-176-105-72.ngrok-free.app/api/registers?filters[email][$eq]=${email}&[password][$eq=${password}`
				)
			)

			setEmail('')
			setPassword('')
			router.push('/about')
			// Check if the response is JSON
			//  const contentType = response.headers.get("content-type");
			//  let result;
			//  if (contentType && contentType.includes("application/json")) {
			//    result = await response.json();
			//  } else {
			//    result = await response.text();
			//    console.warn("Expected JSON, but received:", result);
			//    throw new Error("Received non-JSON response from the server");
			//  }

			// if (result.data && result.data.length > 0) {

			//console.log("User found:", result.data[0]);

			//   setEmail('');
			//   setPassword('');
			// } else {

			//   console.log("No user found with these credentials");
			//   alert("Invalid email or password");
			// }
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			setEmail('')
			setPassword('')
		} catch (error) {
			console.error('Error during API request:', error)
		}
	}

	const handleSubmit = async (event: any) => {
		setActive(true)
		setPassive(false)
		if (!email || !password) {
			alert('Please fill in all fields!')
			return
		}
		event.preventDefault()
		const formData = {
			data: {
				email,
				password,
			},
		}

		try {
			const response = await fetch(
				'https://1991-63-176-105-72.ngrok-free.app/api/registers',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			)

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			const result = await response.json()
			console.log('API response:', result)
			setEmail('')
			setPassword('')
			setOpen(true)
		} catch (error) {
			console.error('Error during API request:', error)
		}
	}

	return (
		<>
			<div className={style.wrapper}>
				{/* Logo Section */}
				<div className={style.logo_container}>
					<div className={style.logo}>A&G Health Team</div>
				</div>
				<Box sx={{ width: 500 }}>
					<Snackbar
						style={{ zIndex: 0 }}
						autoHideDuration={3500}
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						open={open}
						onClose={handleClose}
					>
						<Alert
							onClose={handleClose}
							severity='success'
							sx={{ width: '100%' }}
						>
							Request succsess! Now you can Log In
						</Alert>
					</Snackbar>
				</Box>

				<div className={style.image_container}>
					<img
						src='/images/register_bg.jpg'
						alt='Breakfast setting'
						className={style.img}
					/>
					<div className={style.overlay}>
						<div className={style.form_box}>
							<input
								type='text'
								className={style.email}
								placeholder='Email'
								value={email}
								onChange={handleEmail}
							/>
							<input
								type='password'
								className={style.password}
								placeholder='Password'
								value={password}
								onChange={handlePassword}
							/>
						</div>
						<div className={style.submit_box}>
							<div
								className={style.signup}
								onClick={e => handleSubmit(e)}
								style={{
									backgroundColor: active
										? '#59c960'
										: 'rgba(194, 218, 194, 0.322)',
								}}
							>
								Sign Up
							</div>
							<div
								className={style.login}
								onClick={e => handleLogin(e)}
								style={{
									backgroundColor: passive
										? '#59c960'
										: 'rgba(194, 218, 194, 0.322)',
								}}
							>
								Log In
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
