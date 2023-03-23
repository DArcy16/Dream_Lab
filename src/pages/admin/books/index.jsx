import React from 'react'
import { useNavigate } from 'react-router-dom'

const index = () => {
    const navigate = useNavigate();
  return (
		<div className="w-full h-full flex items-center justify-center gap-4">
			<button onClick={() => navigate("create")} className="btn-2 px-4 py-2">
				Create
			</button>
			<button onClick={() => navigate("edit/1")} className="btn-2 px-4 py-2">
				Edit 1
			</button>
			<button onClick={() => navigate("edit/2")} className="btn-2 px-4 py-2">
				Edit 2
			</button>
		</div>
	);
}

export default index