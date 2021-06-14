import React from "react";

const RoundedButton = ({ children, className, ...rest }) => {
	return (
		<button
			className={`p-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-full dark:bg-gray-800 hover:bg-green-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700 ${className}`}
			{...rest}>
			{children}
		</button>
	);
};

export default RoundedButton;
