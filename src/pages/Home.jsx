import Products from "../features/Products/Products"
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