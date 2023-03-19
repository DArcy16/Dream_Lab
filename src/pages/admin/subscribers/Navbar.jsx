/** @format */

import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const Navbar = ({ navLink, setNavLink, setUrl, setFilter }) => {
	return (
		<>
			<section className="mt-8">
				<div className="w-full flex items-center justify-between py-2">
					<nav className="flex item-center gap-6">
						<h3
							className={`font-semibold ${
								navLink === "all"
									? "text-dreamLabColor1 underline underline-offset-8 decoration-2"
									: null
							} cursor-pointer`}
							onClick={() => {
								setNavLink("all");
								setUrl("");
								setFilter("all")
							}}
						>
							All Subscribers
						</h3>
						<h3
							className={`font-semibold ${
								navLink === "p"
									? "text-dreamLabColor1 underline underline-offset-8 decoration-2"
									: null
							} cursor-pointer`}
							onClick={() => {
								setUrl("");
								setNavLink("p");
								setFilter("all");
							}}
						>
							Request
						</h3>
						<h3
							className={`font-semibold ${
								navLink === "a"
									? "text-dreamLabColor1 underline underline-offset-8 decoration-2"
									: null
							} cursor-pointer`}
							onClick={() => {
								setUrl("");
								setNavLink("a");
								setFilter("all");
							}}
						>
							Active
						</h3>
						<h3
							className={`font-semibold ${
								navLink === "e"
									? "text-dreamLabColor1 underline underline-offset-8 decoration-2"
									: null
							} cursor-pointer`}
							onClick={() => {
								setUrl("");
								setNavLink("e");
								setFilter("all");
							}}
						>
							Expired
						</h3>
					</nav>
					<button className="btn-2 flex gap-2 items-center justify-center px-4 py-2">
						{" "}
						<BsPlusCircleFill /> Add Subscription{" "}
					</button>
				</div>
			</section>
			<div className="w-full h-[0.05rem] bg-grey6 mt-2"></div>
		</>
	);
};

export default Navbar;
