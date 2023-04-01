import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import {MdKeyboardDoubleArrowRight} from 'react-icons/md'

const CategorizedView = () => {
    const {pathname : path} = useLocation();
    const pathSplit = path.split("/");
    const categoryName = pathSplit[2];
    // type === books or articles 
    const type = pathSplit[3]; 

   
  return (
		<div className="p-10">
			<ul className="flex items-center gap-1 font-medium">
				<li>
					<Link to="/category">category</Link>
				</li>
				<li className="flex items-center gap-1">
					<MdKeyboardDoubleArrowRight />
					{categoryName}
				</li>
			</ul>
			<ul className="flex items-center justify-center gap-4 py-4">
				<li>
					<Link
						to={`/category/${categoryName}/book`}
						className={`${type === "book" ? "text-dreamLabColor2" : null} `}
					>
						Book
					</Link>
				</li>
				<li>
					<Link
						to={`/category/${categoryName}/article`}
						className={`${type === "article" ? "text-dreamLabColor2" : null} `}
					>
						Article
					</Link>
				</li>
			</ul>
			{type === "book" ? (
				<ul>
					<li>
						<Link to="book1">Book1</Link>
					</li>
					<li>
						<Link to="book2">Book2</Link>
					</li>
				</ul>
			) : (
				<ul>
					<li>
						<Link to="article1">Article1</Link>
					</li>
					<li>
						<Link to="article2">Article2</Link>
					</li>
				</ul>
			)}
		</div>
	);
}

export default CategorizedView