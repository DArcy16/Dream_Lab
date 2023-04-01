import React from 'react'

const Paginaiton = ({data, setUrl, isUser = false}) => {
  return (
		<div
			className={`fixed bottom-0 w-4/5 flex gap-2 bg-white items-center justify-center text-sm cursor-pointer py-3 ${isUser ? "sticky mx-auto mt-4" : "fixed"}`}
		>
			<button
				className="border border-grey2/40 text-sm px-2 rounded-md disabled:text-grey2/30"
				onClick={() => setUrl(data?.links?.previous)}
				disabled={data?.links?.previous === ""}
			>
				Prev
			</button>
			{`page: ${data?.meta?.currentPage} of ${data?.meta?.totalPages}`}
			<button
				onClick={() => setUrl(data?.links?.next)}
				className="border border-grey2/40 text-sm px-2 rounded-md disabled:text-grey2/30"
				disabled={data?.links?.next === ""}
			>
				Next
			</button>
		</div>
	);
}

export default Paginaiton