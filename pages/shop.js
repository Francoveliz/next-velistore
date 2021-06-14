import React from "react";
import { ProductCard, SearchBar } from "../components";
import products from "../assets/data/products";

const shop = () => {
	return (
		<div className="container">
			<div className="my-10">
				<SearchBar />
			</div>
			<div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
				{products.map(product => (
					<ProductCard {...product} />
				))}
			</div>
		</div>
	);
};

export default shop;
