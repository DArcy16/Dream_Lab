/** @format */

import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

import { RxCross2 } from "react-icons/rx";

const BookContentDrawer = ({setShowDrawer, setPage, page, data}) => {
    const drawerRef = useRef();

    const handleRemoveDrawer = (e) => {

        if(e.target === drawerRef.current) 
        {
            setShowDrawer(false)
        }
    }



    useEffect(() => {
        document.addEventListener('click', handleRemoveDrawer)

        return () => document.removeEventListener('click', handleRemoveDrawer)
    }, [])

	return (
		<aside
			ref={drawerRef}
			className="absolute left-0 top-0 w-full h-full transition-all duration-1000 bg-grey4/20 cursor-pointer z-50"
		>
			<div className="h-full float-right bg-white w-4/5 p-10">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-medium">Content</h2>
					<RxCross2
						className="cursor-pointer"
						onClick={() => setShowDrawer(false)}
					/>
				</div>
				<ul className="space-y-4 mt-4">
					{data?.bookChapters.map((chapter, index) => (
						<li
							className={`${
								index === page ? "text-dreamLabColor2" : "hover:text-grey4"
							} cursor-pointer `}
							key={chapter.id}
							onClick={() => setPage(index)}
						>
							<p>{chapter.title}</p>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default BookContentDrawer;
