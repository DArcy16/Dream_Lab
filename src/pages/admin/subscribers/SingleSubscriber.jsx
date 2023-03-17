import React from 'react'
import profileImg from "../../../assets/profile.png";


const SingleSubscriber = ({subscriber, setShowRequestModal}) => {
    const handleShowModal = () => {
        subscriber.status === "p" ? setShowRequestModal(true) : null;
    }

  return (
		<>
			<div className="w-full flex items-center justify-between text-center mt-3">
				<div className="flex items-center gap-2">
					<img src={profileImg} alt="img" className="w-8 h-8 object-fit" />
					<p>{subscriber.name}</p>
				</div>
				{subscriber.status === "p" ? (
					<p className="px-3 py-1 bg-orangee text-white text-sm text-bold rounded-full w-20 text-center">
						Request
					</p>
				) : subscriber.status === "a" ? (
					<p className="px-3 py-1 bg-green text-white text-sm text-bold rounded-full w-20 text-center">
						Active
					</p>
				) : (
					<p className="px-3 py-1 bg-red-800 text-white text-sm text-bold rounded-full w-20 text-center">
						Expired
					</p>
				)}
				<p>{subscriber.plan}</p>
				<p>{subscriber.data}</p>
				<button className=" text-dreamLabColor1 hover:underline cursor-pointer"
                onClick={handleShowModal}
                >
					view details
				</button>
			</div>

			<div className="w-full h-[0.05rem] bg-grey6 mt-3"></div>
		</>
	);
}

export default SingleSubscriber