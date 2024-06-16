import { Link } from "react-router-dom";
const Checkout = () => {
	const products = [
		{
			id: 1,
			name: 'Throwback Hip Bag',
			href: '#',
			color: 'Salmon',
			price: '$90.00',
			quantity: 1,
			imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
			imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
		},
		{
			id: 2,
			name: 'Medium Stuff Satchel',
			href: '#',
			color: 'Blue',
			price: '$32.00',
			quantity: 1,
			imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
			imageAlt:
				'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
		},
		// More products...
	]

	const address = [
		{
			name: 'Tanvir Rana',
			phone: '+88102578551',
			city: 'Meherpur',
			zip: '25645',
			streat: "Mujibnagor",
			email: 'example1@gmail.com'
		},
		{
			name: 'Tanvir Rana',
			phone: '+88102578551',
			city: 'Meherpur',
			zip: '25645',
			streat: "Mujibnagor",
			email: 'example2@gmail.com'
		},
		{
			name: 'Tanvir Rana',
			phone: '+88102578551',
			city: 'Meherpur',
			zip: '25645',
			streat: "Mujibnagor",
			email: 'example3@gmail.com'
		},
		{
			name: 'Tanvir Rana',
			phone: '+88102578551',
			city: 'Meherpur',
			zip: '25645',
			streat: "Mujibnagor",
			email: 'example4@gmail.com'
		},
		{
			name: 'Tanvir Rana',
			phone: '+88102578551',
			city: 'Meherpur',
			zip: '25645',
			streat: "Mujibnagor",
			email: 'example5@gmail.com'
		},
	]

	return (
		<div className="mx-auto max-w-7xl">
			<div className="grid grid-cols-1 gap-x-6 gap-y-10 items-start sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 gap-5">
				<form className="lg:col-span-3 bg-white p-3">
					<h1 className="text-4xl font-semibold border-b py-3 mb-5">Checkout</h1>
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-3">
								<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
									First name
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
									Last name
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="md:col-span-4 col-span-full w-full">
								<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
									Email address
								</label>
								<div className="mt-2 w-full">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-3">
								<label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
									Country
								</label>
								<div className="mt-2">
									<select
										id="country"
										name="country"
										autoComplete="country-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
								</div>
							</div>

							<div className="col-span-full">
								<label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
									Street address
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="street-address"
										id="street-address"
										autoComplete="street-address"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-2 sm:col-start-1">
								<label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
									City
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="city"
										id="city"
										autoComplete="address-level2"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
									State / Province
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="region"
										id="region"
										autoComplete="address-level1"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
									ZIP / Postal code
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="postal-code"
										id="postal-code"
										autoComplete="postal-code"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>

					</div>
					<div className="mt-6 flex items-center justify-end gap-x-6">
						<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
							Reset
						</button>
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Add Address
						</button>
					</div>
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-900">Payments</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Choose from existing addresss
						</p>
						<ul role="list" className="divide-y divide-gray-100">
							{address.map((person) => (
								<li key={person.email} className="flex items-center gap-4">
									<input
										id={person.email}
										name="address"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<div className="flex justify-between gap-x-6 py-5 grow">
										<div className="flex min-w-0 gap-x-4">

											<div className="min-w-0 flex-auto">
												<p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
												<p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
												<p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.city}</p>
											</div>
										</div>
										<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
											<p className="text-sm leading-6 text-gray-900">Phone : {person.phone}</p>
											<p className="text-sm leading-6 text-gray-900">Zip : {person.zip}</p>
										</div>
									</div>
								</li>
							))}
						</ul>
						<div className="mt-10 space-y-10">
							<fieldset>
								<legend className="text-sm font-semibold leading-6 text-gray-900">Choose one</legend>
								<div className="mt-6 space-y-6">
									<div className="flex items-center gap-x-3">
										<input
											id="cash"
											name="payments"
											type="radio"
											className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
										<label htmlFor="cash" className="block text-sm font-medium leading-6 text-gray-900">
											Cash
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="card"
											name="payments"
											type="radio"
											className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
										<label htmlFor="card" className="block text-sm font-medium leading-6 text-gray-900">
											Card
										</label>
									</div>

								</div>
							</fieldset>
						</div>
					</div>
				</form>
				<div className="lg:col-span-2 bg-white p-3">
					<div>
						<h1 className="md:text-4xl text-3xl font-bold tracking-tight text-gray-900">Products</h1>
						<div className="mt-8">
							<div className="flow-root">
								<ul role="list" className="-my-6 divide-y divide-gray-200">
									{products.map((product) => (
										<li key={product.id} className="flex py-6">
											<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
												<img
													src={product.imageSrc}
													alt={product.imageAlt}
													className="h-full w-full object-cover object-center"
												/>
											</div>

											<div className="ml-4 flex flex-1 flex-col">
												<div>
													<div className="flex justify-between text-base font-medium text-gray-900">
														<h3>
															<a href={product.href}>{product.name}</a>
														</h3>
														<p className="ml-4">{product.price}</p>
													</div>
													<p className="mt-1 text-sm text-gray-500">{product.color}</p>
												</div>
												<div className="flex flex-1 items-end justify-between text-sm">
													<p className="text-gray-500">Qty {product.quantity}</p>

													<div className="flex">
														<button
															type="button"
															className="font-medium text-indigo-600 hover:text-indigo-500"
														>
															Remove
														</button>
													</div>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div className="border-t mt-5">
						<div className="flex justify-between text-base font-medium text-gray-900 mt-5">
							<p>Subtotal</p>
							<p>$262.00</p>
						</div>
						<p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
						<div className="mt-6">
							<Link
								to="#"
								className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
							>
								Pay Now
							</Link>
						</div>
						<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
							<p>
								or{' '}
								<Link to={'/'}>
									<button
										type="button"
										className="font-medium text-indigo-600 hover:text-indigo-500 py-5"

									>
										Continue Shopping
										<span aria-hidden="true"> &rarr;</span>
									</button>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Checkout;