import Link from 'next/link'

const breakfastData = [
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Non allergic',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast2.jpg',
		title: 'High Protein',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Vegetarian',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Non allergic',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Non allergic',
		href: '/food',
	},
]

const lunchData = [
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Non allergic',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast2.jpg',
		title: 'High Protein',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Vegetarian',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Non allergic',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Non allergic',
		href: '/food',
	},
]

const dinnerData = [
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Non allergic',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast2.jpg',
		title: 'High Protein',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Vegetarian',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Non allergic',
		href: '/food',
	},
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'Non allergic',
		href: '/food',
	},

	//We can add more in the future, if we want:
	// {
	// 	imagePath: '/images/breakfast1.jpg',
	// 	title: 'Non allergic',
	// 	href: '/food',
	// },
]

const Categories = () => {
	return (
		<div className='categories_section'>
			<div className='category'>
				<h2 className='category_title'>Breakfast</h2>
				<div className='category_list'>
					{breakfastData.map((data, index) => (
						<div className='category_card' key={index}>
							<img
								src={data.imagePath}
								className='category_image'
								alt={data.title}
							/>
							<div className='category_content'>
								<h2 className='title'>{data.title}</h2>
								<Link href={data.href} className='link'>
									View details
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='category'>
				<h2 className='category_title'>Lunch</h2>
				<div className='category_list'>
					{lunchData.map((data, index) => (
						<div className='category_card' key={index}>
							<img
								src={data.imagePath}
								className='category_image'
								alt={data.title}
							/>
							<div className='category_content'>
								<h2 className='title'>{data.title}</h2>
								<Link href={data.href} className='link'>
									View
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='category'>
				<h2 className='category_title'>Dinner</h2>
				<div className='category_list'>
					{dinnerData.map((data, index) => (
						<div className='category_card' key={index}>
							<img
								src={data.imagePath}
								className='category_image'
								alt={data.title}
							/>
							<div className='category_content'>
								<h2 className='title'>{data.title}</h2>
								<Link href={data.href} className='link'>
									View
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Categories
