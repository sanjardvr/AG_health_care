import Link from 'next/link'

const breakfastData = [
	{
		imagePath: '/images/breakfast1.jpg',
		title: 'No sugar, vegetarian, high-protein',
		href: 'https://t.me/dietdetails',
		// description:
		// 	'This recipe is one that our recipe developers turn to quite often. Cherry tomatoes are reliably sweet and readily available year-round. If you don’t have ricotta cheese, you can swap in cottage cheese, Greek yogurt or mascarpone. While we favor runny yolks and like how they coat the toast and tomatoes, hard yolks are just fine too. Simply cook the eggs a minute or two longer.',
		// ingridients:
		// 	'Ingredients\n½ cup whole-milk ricotta cheese 2 tablespoons chopped fresh basil, plus leaves for garnish 1 teaspoon grated lemon zest ⅜ teaspoon salt, divided 1 tablespoon extra-virgin olive oil, divided 2 cups cherry tomatoes 2 large eggs 2 slices crusty whole-wheat bread (½-inch-thick), toasted Crushed red pepper for garnish (optional)',
		// directions:
		// 	'Directions\n1 Combine ricotta, basil, lemon zest and ⅛ teaspoon salt in a medium bowl. \n2 Heat 1½ teaspoons oil in a medium nonstick skillet over medium-high heat. Add tomatoes in a single layer; cook, stirring occasionally, until starting to blister, about 5 minutes. Transfer to a medium bowl.\n3 Wipe the skillet clean. Heat the remaining 1½ teaspoons oil over medium-low heat. Carefully crack eggs into the pan, leaving space between them. Sprinkle the eggs with ⅛ teaspoon salt. Cover and cook until the whites are just set, about 1 minute, 30 seconds. Uncover and cook until the whites are completely set and the yolks are still runny, about 1 minute, 30 seconds.\n4 Spread the reserved ricotta mixture evenly over 1 side of each toast slice (¼ cup each); spoon the tomatoes over the ricotta mixture (scant ¾ cup each). Sprinkle with the remaining ⅛ teaspoon salt. Top each toast with 1 fried egg. Garnish with basil leaves and/or sprinkle with crushed red pepper, if desired.',
	},
	{
		imagePath: '/images/breakfast2.jpeg',
		title: 'High-protein, vegetarian',
		href: 'https://t.me/dietdetails',
		// description:
		// 	"Eating dessert for breakfast has never been easier, thanks to this twist on a classic banana split. We swap in strained yogurt (e.g., Greek-style or skyr) for ice cream, but you will still get the same ice-cream-scoop look because the yogurt's thicker consistency helps it hold its shape well. Plus, strained yogurt has more protein for staying power. Pineapple and coconut give this banana split tropical vibes.",
		// ingridients:
		// 	'Ingredients\n¼ cup almond butter\n1 tablespoon cacao powder\n3 tablespoons water\n2 tablespoons pure maple syrup, divided\n¼ cup heavy cream\n4 ripe bananas, peeled and halved lengthwise\n1 cup low-fat coconut strained yogurt\n1 cup whole-milk chocolate strained yogurt (see Tip)\n½ cup diced pineapple\n4 tablespoons granola\n2 tablespoons chocolate chips\n2 tablespoons unsweetened shredded coconut',
		// direction:
		// 	'Directions\n1 Whisk almond butter, cacao powder, water and 1 tablespoon maple syrup in a small bowl until smooth.\n2 Whisk cream and the remaining 1 tablespoon maple syrup in a small bowl until soft peaks form.\n3 Arrange 2 banana halves on each of 4 plates. Use an ice-cream scoop to divide coconut and chocolate yogurts among the bananas. Drizzle the almond sauce over the yogurt. Divide pineapple, granola, chocolate chips and coconut among the banana splits. Top with the whipped cream.',
	},
	{
		imagePath: '/images/breakfast3.jpeg',
		title: 'Vegetarian, Strawberry Alergy!',
		href: 'https://t.me/dietdetails',
		// description:
		// 	'Anti-Inflammatory Strawberry–Passion Fruit Green Smoothie\nThis anti-inflammatory smoothie draws its bright tropical flavor from frozen passion fruit pieces available in the frozen fruit section of well-stocked supermarkets or natural-foods stores. To make this with fresh passion fruit, you’ll need 4 medium-size ripe purple passion fruits. Cut the fruits in half crosswise, gently scoop out the jelly-coated seeds, place in a blender (discarding shells) and puree until smooth. Freeze the puree in an ice cube tray before blending into the smoothie. If you can’t find passion fruit at all, substitute with frozen pineapple.',
		// ingridients:
		// 	'Ingredients\n2 cups packed baby spinach\n1 cup hulled fresh strawberries\n1/3 cup frozen unsweetened seedless passion fruit (about 15 pieces; such as Pitaya Foods)\n1/2 cup unsweetened coconut milk beverage\n1 tablespoon hemp seeds\n1 tablespoon salted roasted pistachios or pistachio butter',
		// direction:
		// 	'Directions\n1 Place spinach, strawberries, passion fruit, coconut milk, hemp seeds and pistachios (or pistachio butter) in a blender. Process until smooth, about 30 seconds. Pour into a glass and serve immediately.',
	},
	{
		imagePath: '/images/breakfast4.jpeg',
		title: 'Diabites-friendly',
		href: 'https://t.me/dietdetails',
		// description:
		// 	'Feta, Egg & Spinach Breakfast Taco\nIt does not get easier than this healthy breakfast taco that is ready in just five minutes. Kale or arugula will work just as well if you do not have spinach on hand. If you want an over-hard egg instead, and notice the egg is browning too quickly, add a tablespoon or two of water to the pan to help steam the egg and set the yolk faster.',
		// ingridients:
		// 	'Ingredients\n1 teaspoon avocado oil or canola oil\n1 corn tortilla\n1 cup lightly packed baby spinach\n1 large egg\n2 tablespoons crumbled feta cheese\nHot sauce for garnish (optional)',
		// direction:
		// 	'Directions\n1 Heat oil in a small nonstick skillet over medium heat. Cook tortilla, flipping once, until softened, about 1 minute total; transfer to a plate. Add spinach to the pan; cook, stirring, until just barely wilted, about 1 minute. Transfer to the tortilla. Sprinkle feta in an egg-sized circle in the pan, leaving an open spot in the center. Break egg into the feta. Cover and cook until the egg is done to your liking, about 2 minutes for over easy. Transfer to the spinach and drizzle with hot sauce, if desired.',
	},
	{
		imagePath: '/images/breakfast5.jpeg',
		title: 'Healthy fat, fiber-rich',
		href: 'https://t.me/dietdetails',
		// description:
		// 	'Copycat Dunkin’ Avocado Toast\nThis copycat Dunkin’ avocado toast is inspired by the popular menu item. We love the flavors of creamy, mashed avocado spread over a slice of toasted sourdough bread, topped with a sprinkle of everything bagel seasoning for added flavor and texture. It’s a quick and easy way to enjoy the flavors of the original without having to leave your house!',
		// ingridients:
		// 	'Ingredients\n½ small avocado\n½ teaspoon lemon juice\n⅛ teaspoon ground pepper\nPinch of sea salt\n1 slice sourdough bread, toasted\n½ teaspoon everything bagel seasoning',
		// direction:
		// 	'Directions\n1 Combine ½ avocado, ½ teaspoon lemon juice, ⅛ teaspoon pepper and a pinch of salt in a small bowl. Gently mash with a fork. Top 1 slice sourdough toast with the avocado mixture. Sprinkle with ½ teaspoon everything bagel seasoning.',
	},
	{
		imagePath: '/images/breakfast6.jpeg',
		title: 'Dairy Allergy!',
		href: 'https://t.me/dietdetails',
	},
]

const lunchData = [
	{
		imagePath: '/images/lunch1.webp',
		title: 'Non allergic, High-protein. Not for vegans!',
		href: 'https://t.me/dietdetails',
	},
	{
		imagePath: '/images/lunch2.jpeg',
		title: 'High Protein. Not for vegans!',
		href: 'https://t.me/dietdetails',
	},
	{
		imagePath: '/images/lunch3.jpeg',
		title: 'High protein, Non-allergic',
		href: 'https://t.me/dietdetails',
	},
]

const dinnerData = [
	{
		imagePath: '/images/dinner1.webp',
		title: 'Non allergic. High protein',
		href: 'https://t.me/dietdetails',
	},
	{
		imagePath: '/images/dinner2.jpeg',
		title: 'High Protein, Non-allergic',
		href: 'https://t.me/dietdetails',
	},
	{
		imagePath: '/images/dinner3.jpg',
		title: 'High Protein, Non-allergic',
		href: 'https://t.me/dietdetails',
	},
	{
		imagePath: '/images/dinner4.jpg',
		title: 'Refreshing, Low-calorie, High in antioxidants',
		href: 'https://t.me/dietdetails',
	},

	//We can add more in the future, if we want:
	// {
	// 	imagePath: '/images/breakfast1.jpg',
	// 	title: 'No sugar, vegetarian, high-protein',
	// 	href: 'https://t.me/dietdetails',
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
									View details
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
									View details
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
