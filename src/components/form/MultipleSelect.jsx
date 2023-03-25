/** @format */

import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const MultipleSelect = ({
	items,
	selectedItems,
	setSelectedItems,
	isLoading,
	showOption,
	setShowOption,
	label,
}) => {
	const handleSelect = (e) => {
		if (selectedItems.some((item) => item.name === e.target.outerText)) {
			setSelectedItems(
				selectedItems.filter(
					(item) => item.name.toLowerCase() !== e.target.outerText.toLowerCase()
				)
			);
		} else {
			setSelectedItems([...selectedItems, { name: e.target.outerText }]);
		}
	};

	return (
		<div className="w-full mt-3">
			<label htmlFor="author" className="font-semibold">
				{label}
			</label>

			<div className="w-full relative mt-2">
				<div className="w-full flex items-center justify-between bg-white rounded-md outline outline-1 outline-grey/30 focus:outline-2 py-2 px-4">
					<div className="flex basis-5/6 flex-wrap items-center gap-2">
						{selectedItems.length > 0 ? (
							selectedItems.map((item) => (
								<div className="w-fit flex items-center gap-2 px-2 py-1 text-sm border border-grey2 rounded-lg flex-shrink-0">
									{item.name}
									<RxCross2
										className="w-4 h-4 cursor-pointer"
										onClick={() =>
											setSelectedItems(
												selectedItems.filter(
													(selectedItem) => selectedItem.name !== item.name
												)
											)
										}
									/>
								</div>
							))
						) : (
							<h2
								className="text-grey2 cursor-pointer"
								onClick={() => setShowOption(!showOption)}
							>
								Choose
							</h2>
						)}
					</div>
					<div
						className="flex items-center gap-2 cursor-pointer"
						onClick={() => setShowOption(!showOption)}
					>
						|
						{showOption ? (
							<IoIosArrowUp className="w-5 h-5" />
						) : (
							<MdOutlineKeyboardArrowDown className="w-6 h-6" />
						)}
					</div>
				</div>

				{showOption && (
					<ul className="w-full bg-white shadow-md border-x border-grey6 absolute top-12 left-0 rounded-md outline outline-white z-50 px-6 py-4 space-y-2">
						{!isLoading &&
							items.map((item) => (
								<li
									className={`py-1 px-2 mx-auto border ${
										selectedItems.some((selectedItem) =>
											item.name.includes(selectedItem.name)
										)
											? " border-dreamLabColor2 text-dreamLabColor2 hover:ring-1 hover:ring-dreamLabColor2/60 hover:text-dreamLabColor2 hover:border-dreamLabColor2"
											: "border-grey text-grey hover:ring-1 hover:ring-grey2/60 hover:text-grey hover:border-grey"
									} rounded-md text-center cursor-pointer`}
									key={item.id}
									name={item.name}
									onClick={handleSelect}
								>
									{item.name}
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default MultipleSelect;
