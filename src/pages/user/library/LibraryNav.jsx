import React from 'react'
import { Link } from 'react-router-dom';

const LibraryNav = ({type}) => {
  return (
		<ul className="flex items-center justify-center gap-4 py-4">
			<li>
				<Link
					to={`/library/book`}
					className={`${type === "book" ? "text-dreamLabColor2" : null} `}
				>
					Book
				</Link>
			</li>
			<li>
				<Link
					to={`/library/article`}
					className={`${type === "article" ? "text-dreamLabColor2" : null} `}
				>
					Article
				</Link>
			</li>
		</ul>
	);
}

export default LibraryNav