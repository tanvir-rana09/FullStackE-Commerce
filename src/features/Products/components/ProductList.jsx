import { Link } from "react-router-dom";

const ProductList = ({products}) => {
	
	return (

		<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 bg-white">
			<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				{products.map((product) => (
					<Link to={'/product-details'} key={product.id} >
						<div className="group relative">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
								<img
									src={product.thumbnail}
									alt={product.title}
									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<p>
											<span aria-hidden="true" className="absolute inset-0" />
											{product.title}
										</p>
									</h3>
									<p className="mt-1 text-sm text-gray-500">{product.rating}</p>
								</div>
								<div className="">
								<p className="text-sm font-medium text-gray-900">${Math.round(product.price*(1-(product.discountPercentage/100)))}</p>
								<p className="text-sm font-medium text-gray-500 line-through">${product.price}</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default ProductList