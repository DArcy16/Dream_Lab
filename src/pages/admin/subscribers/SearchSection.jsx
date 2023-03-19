/** @format */

import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoFilterSharp } from "react-icons/io5";

const SearchSection = ({ setFilter, setSearchQuery, filterArr }) => {
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		if (e.target.value !== "") {
			setSearchQuery(e.target[0].value);
		}
	};

	const handleSearchInput = (e) => {
		if (e.target.value === "") {
			setSearchQuery("");
		}
	};

	return (
		<>
			<section className="w-full flex items-center justify-between mt-8">
				<div className="w-2/3 flex items-center flex-row  gap-4">
					<BiSearch className="w-6 h-6 text-dreamLabColor1" />
					<form onSubmit={handleSearchSubmit}>
						<input
							id="search"
							name="search"
							placeholder="Search User by name"
							className="w-full border-none bg-white focus:bg-white focus:outline-none"
							onChange={handleSearchInput}
						/>
					</form>
				</div>
				<div className="flex items-center justify-end gap-4">
					<div className="flex items-center gap-2">
						<IoFilterSharp className="w-4 h-4" />
						<p className="text-xs font-semibold">Filter</p>
					</div>
					<div>
						<select
							className=" border border-dreamLabColor2 rounded-md focus:outline-none text-sm font-semibold  text-dreamLabColor2 px-2 py-2 bg-white "
							onChange={(e) => setFilter(e.target.value)}
							defaultValue="all"
						>
							<option value="all">All</option>
							{filterArr === null
								? null
								: filterArr.map((item) => (
										<option value={item.value} key={item.value}>
											{item.name}
										</option>
								  ))}
						</select>
					</div>
				</div>
			</section>
			<div className="w-full h-[0.05rem] bg-grey6 mt-3"></div>
		</>
	);
};

export default SearchSection;
