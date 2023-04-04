import React from 'react'
import ContentCard from './ContentCard'

const ContentCardList = ({data, isHome = false, type, isView = false, isCategory = false}) => {

  return (
		
			<div
				className={`flex items-end gap-4 ${
					isHome
						? "w-full snap-x overflow-x-auto overflow-hidden justify-start px-4 sm:px-6 py-2"
						: "flex-wrap px-4 sm:px-10 justify-start w-fit mx-auto"
				} [&::-webkit-scrollbar]:hidden`}
			>
				{data?.map((item) => (
					<ContentCard key={item?.id} item={item} type={type} isHome={isHome} isView={isView}/>
				))}
			</div>
		
	);
}

export default ContentCardList