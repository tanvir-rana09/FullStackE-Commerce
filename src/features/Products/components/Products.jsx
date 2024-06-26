import { useEffect, useState } from 'react'
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition,
	TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductList from './ProductList'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllBrandsAsync, fetchAllCategoriesAsync, fetchAllProductsAsyncByFilter, selectAllProducts, selectAllbrands, selectAllcategories } from '../productsSlice'

const sortOptions = [
	{ name: 'Top rated', sort: 'rating', order: 'desc', current: false },
	{ name: 'Price: Low to High', sort: 'price', order: 'asc', current: false },
	{ name: 'Price: High to Low', sort: 'price', order: 'desc', current: false },
]



function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}


const Products = () => {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
	const [filter, setFilter] = useState({})
	const [sort, seSort] = useState({})
	const dispatch = useDispatch()
	const products = useSelector(selectAllProducts)
	const categories = useSelector(selectAllcategories)
	const brands = useSelector(selectAllbrands)
	const [page, setPage] = useState(1)
	const ITEM_PER_PAGE = 10



	const filters = [
		{
			id: 'brands',
			name: 'Brands',
			options: brands
		},
		{
			id: 'category',
			name: 'Category',
			options: categories
		},
	
	]


	useEffect(() => {
		// dispatch(fetchAllProductsAsync())
	}, [dispatch])

	const filterHandle = (e, section, option) => {
		const newFilter = { ...filter }
		console.log(newFilter);
		if (e.target.checked) {
			if (newFilter[section.id]) {
				newFilter[section.id].push(option.value)
			} else {
				newFilter[section.id] = [option.value]
			}
		} else {
			const index = newFilter[section.id].findIndex(el => el === option.value)
			console.log(index);
			newFilter[section.id].splice(index, 1)
		}
		setFilter(newFilter)

	}

	const handleSort = (e, option) => {
		let sort = { _sort: option.sort, _order: option.order }
		seSort(sort)
	}
	const handlePage = (e, page) => {
		setPage(page)
	}

	useEffect(() => {
		const pagination = { _page: page, _limit: ITEM_PER_PAGE }
		dispatch(fetchAllProductsAsyncByFilter({ filter, sort, pagination }))
	}, [filter, dispatch, sort,page])


	useEffect(()=>{
		dispatch(fetchAllCategoriesAsync())
		dispatch(fetchAllBrandsAsync())
	},[dispatch])

	return (
		<div className="bg-white">
			<div>
				{/* Mobile filter dialog */}
				<Transition show={mobileFiltersOpen}>
					<Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
						<TransitionChild
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black bg-opacity-25" />
						</TransitionChild>

						<div className="fixed inset-0 z-40 flex">
							<TransitionChild
								enter="transition ease-in-out duration-300 transform"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
									<div className="flex items-center justify-between px-4">
										<h2 className="text-lg font-medium text-gray-900">Filters</h2>
										<button
											type="button"
											className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
											onClick={() => setMobileFiltersOpen(false)}
										>
											<span className="sr-only">Close menu</span>
											<XMarkIcon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>

									{/* Filters */}
									<form className="mt-4 border-t border-gray-200">
										<h3 className="sr-only">Categories</h3>

										{filters.map((section, i) => (
											<Disclosure as="div" key={i} className="border-t border-gray-200 px-4 py-6">
												{({ open }) => (
													<>
														<h3 className="-mx-2 -my-3 flow-root">
															<DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
																<span className="font-medium text-gray-900">{section.name}</span>
																<span className="ml-6 flex items-center">
																	{open ? (
																		<MinusIcon className="h-5 w-5" aria-hidden="true" />
																	) : (
																		<PlusIcon className="h-5 w-5" aria-hidden="true" />
																	)}
																</span>
															</DisclosureButton>
														</h3>
														<DisclosurePanel className="pt-6">
															<div className="space-y-6">
																{section.options.map((option, optionIdx) => (
																	<div key={optionIdx} className="flex items-center">
																		<input
																			id={`filter-mobile-${section.id}-${optionIdx}`}
																			name={`${section.id}[]`}
																			defaultValue={option.value}
																			type="checkbox"
																			defaultChecked={option.checked}
																			onChange={(e) => filterHandle(e, section, option)}
																			className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																		/>
																		<label
																			htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
																			className="ml-3 min-w-0 flex-1 text-gray-500"
																		>
																			{option.label}
																		</label>
																	</div>
																))}
															</div>
														</DisclosurePanel>
													</>
												)}
											</Disclosure>
										))}
									</form>
								</DialogPanel>
							</TransitionChild>
						</div>
					</Dialog>
				</Transition>

				<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
						<h1 className="md:text-4xl text-3xl font-bold tracking-tight text-gray-900">Products</h1>

						<div className="flex items-center">
							<Menu as="div" className="relative inline-block text-left">
								<div>
									<MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
										Sort
										<ChevronDownIcon
											className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
											aria-hidden="true"
										/>
									</MenuButton>
								</div>

								<Transition
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="py-1">
											{sortOptions.map((option, i) => (
												<MenuItem key={i}>
													{({ focus }) => (
														<p
															onClick={(e) => handleSort(e, option)}
															className={classNames(
																option.current ? 'font-medium text-gray-900' : 'text-gray-500',
																focus ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm cursor-pointer'
															)}
														>
															{option.name}
														</p>
													)}
												</MenuItem>
											))}
										</div>
									</MenuItems>
								</Transition>
							</Menu>

							<button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
								<span className="sr-only">View grid</span>
								<Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
							</button>
							<button
								type="button"
								className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className="sr-only">Filters</span>
								<FunnelIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>

					<section aria-labelledby="products-heading" className="pb-24 pt-6">
						<h2 id="products-heading" className="sr-only">
							Products
						</h2>

						<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
							{/* Filters */}
							<form className="hidden lg:block">
								<h3 className="sr-only">Categories</h3>


								{filters.map((section, i) => (
									<Disclosure as="div" key={i} className="border-b border-gray-200 py-6">
										{({ open }) => (
											<>
												<h3 className="-my-3 flow-root">
													<DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
														<span className="font-medium text-gray-900">{section.name}</span>
														<span className="ml-6 flex items-center">
															{open ? (
																<MinusIcon className="h-5 w-5" aria-hidden="true" />
															) : (
																<PlusIcon className="h-5 w-5" aria-hidden="true" />
															)}
														</span>
													</DisclosureButton>
												</h3>
												<DisclosurePanel className="pt-6">
													<div className="space-y-4">
														{section.options.map((option, optionIdx) => (
															<div key={optionIdx} className="flex items-center">
																<input
																	id={`filter-${section.id}-${optionIdx}`}
																	name={`${section.id}[]`}
																	defaultValue={option.value}
																	type="checkbox"
																	onChange={(e) => filterHandle(e, section, option)}
																	defaultChecked={option.checked}
																	className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																/>
																<label
																	htmlFor={`filter-${section.id}-${optionIdx}`}
																	className="ml-3 text-sm text-gray-600"
																>
																	{option.label}
																</label>
															</div>
														))}
													</div>
												</DisclosurePanel>
											</>
										)}
									</Disclosure>
								))}
							</form>

							{/* Product grid */}
							<div className="lg:col-span-3"><ProductList products={products} /></div>
						</div>
					</section>
				</main>
			</div>
			<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
				<div className="flex flex-1 justify-between sm:hidden">
					<div

						className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
					>
						Previous
					</div>
					<div

						className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
					>
						Next
					</div>
				</div>
				<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
					<div>
						<p className="text-sm text-gray-700">
							Showing <span className="font-medium">{(page -1) * ITEM_PER_PAGE+1 }</span> to <span className="font-medium">{page*ITEM_PER_PAGE}</span> of{' '}
							<span className="font-medium">{30}</span> results
						</p>
					</div>
					<div>
						<nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
							<div

								className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
							>
								<span className="sr-only">Previous</span>
								<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
							</div>
							{
								Array.from(Array(3), ((el, i) => (
									<div
										key={i}
										onClick={(e) => handlePage(e, i + 1)}
										aria-current="page"
										className={`relative cursor-pointer z-10 inline-flex items-center ${i+1 === page ? ' bg-indigo-600 text-white' : 'text-gray-400'} px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
									>
										{i + 1}
									</div>
								)))
							}

							<div
								className="relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
							>
								<span className="sr-only">Next</span>
								<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products