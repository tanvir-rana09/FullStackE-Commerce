import Products from "../features/Products/components/Products.jsx"
import Navbar from "../features/navbar/Navbar"

const Home = () => {
  return (
	<div>
		<Navbar>
			<Products/>
		</Navbar>
	</div>
  )
}

export default Home