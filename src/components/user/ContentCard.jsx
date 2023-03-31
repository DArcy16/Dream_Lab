import React from 'react'
import {IoIosTimer} from 'react-icons/io'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'

const ContentCard = ({item, type}) => {
  return (
		<article className="px-6 py-4 w-52 flex flex-col justify-center border-x  border-x-grey6/30 shadow-md flex-none mt-4 space-y-3 cursor-pointer transition-all duration-500 hover:scale-105">
			<img
				src={item.mainImage}
				alt="item.title"
				className=" w-20 h-20 mx-auto object-contain overflow-hidden"
			/>
			<h2 className="text-center font-medium">{item.title}</h2>
			<p className="text-sm">
				By{" "}
				{type === "book"
					? item.bookAuthors.map((author) => (
							<span key={author.id}>{author.name}, </span>
					  ))
					: item.articleAuthors.map((author) => (
							<span key={author.id}>{author.name}, </span>
					  ))}
			</p>
			<div className="flex items-center justify-between">
				<div className="flex items-center text-sm gap-1">
					<IoIosTimer /> 10 mins
				</div>
				<MdKeyboardDoubleArrowRight />
			</div>
		</article>
	);
}

export default ContentCard