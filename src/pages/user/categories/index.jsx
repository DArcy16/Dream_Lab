import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
		<div className="flex items-center justify-center gap-4 py-4">
			<Link
				to={"category1"}
				className="underline hover:no-underline hover:text-dreamLabColor2"
			>
				Category1
			</Link>
			<Link
				to={"category2"}
				className="underline hover:no-underline hover:text-dreamLabColor2"
			>
				Category2
			</Link>
		</div>
	);
}

export default index