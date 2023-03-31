import React from 'react'
import ContentCard from './ContentCard'

const ContentCardList = ({data, isHome = false, type}) => {
  return (
		<div
			className={`flex items-end gap-4 ${
				isHome ? "overflow-x-auto justify-start px-10 py-2" : "flex-wrap justify-center"
			} [&::-webkit-scrollbar]:hidden`}
		>
			{data?.map((item) => (
				<ContentCard key={item?.id} item={item} type={type} isHome={isHome} />
			))}
		</div>
	);
}

export default ContentCardList