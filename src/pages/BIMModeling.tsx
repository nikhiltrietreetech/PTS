import SubServiceHero from '../components/SubServiceHero'
import Details from '../components/Details'
import ToolsUsed from '../components/ToolsUsed'
import WhyChooseUs from '../components/WhyChooseUs'

const Page = () => (
	<>
		{' '}
		<header
			id="navbar"
			style={{
				backgroundColor: 'lightgray',
				width: '100vw',
				height: '10vh',
				textAlign: 'center',
			}}
		>
			heading section
		</header>
		<div
			style={{
				backgroundColor: 'lightblue',
				width: '100vw',
				height: '80vh',
				textAlign: 'center',
			}}
		>
			Main Content here
		</div>
		<footer
			style={{
				backgroundColor: 'lightcyan',
				width: '100vw',
				height: '10vh',
				textAlign: 'center',
			}}
		>
			Footer here
		</footer>
		{/* <SubServiceHero />
		<Details />
		<ToolsUsed />
		<WhyChooseUs /> */}
	</>
)

export default Page
