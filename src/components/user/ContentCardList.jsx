import React from 'react'
import ContentCard from './ContentCard'

const ContentCardList = ({data, isHome = false, type, isView = false, isCategory = false}) => {

  return (
		<div
			className={`flex items-end gap-6 ${
				isHome
					? "w-full snap-x overflow-x-auto overflow-hidden justify-start py-6 sm:px-12 px-2"
					: isView
					? "flex-wrap py-4 justify-center mx-auto"
					: "flex-wrap py-4 px-10 justify-center mx-auto"
			} [&::-webkit-scrollbar]:hidden`}
		>
			{data?.map((item) => (
				<ContentCard
					key={item?.id}
					item={item}
					type={type}
					isHome={isHome}
					isView={isView}
				/>
			))}
		</div>
	);
}

export default ContentCardList