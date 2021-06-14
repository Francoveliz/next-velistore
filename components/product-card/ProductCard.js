import React from "react";
import { RoundedButton } from "../";
import { PlusIcon } from "../../assets/icons";

const ProductCard = ({ name, weight, brand, price, tags }) => {
	return (
		<div className="w-full px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800 ">
			<div className="mb-4">
				<h1 className="mt-2 text-4xl font-semibold text-green-800 dark:text-white mb-2">
					{name}
				</h1>
				<div className="flex justify-between items-center">
					<p class="text-xl  mb-2">{brand}</p>
					<p className="">{`${weight} Gr.`}</p>
				</div>
			</div>
			<div className="mb-6 flex flex-wrap gap-2 ">
				{tags
					? tags.map(tag => (
							<span class="px-3 py-1 font-bold text-xs text-green-800 uppercase bg-green-200 rounded-full dark:bg-green-300 dark:text-green-900">
								{tag}
							</span>
					  ))
					: ""}
			</div>
			<div className="flex justify-between items-center my-3">
				<p className="text-4xl font-semibold text-green-800">{`$${price}`}</p>
				<div className="flex justify-center">
					<RoundedButton>
						<PlusIcon className="w-6 h-6" />
					</RoundedButton>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
