import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import profileImg from "../../../assets/profile.png";


const RequestModal = ({setShowRequestModal}) => {
  return (
		<div className="absolute w-full h-full top-0 left-0 bg-grey4/40">
			<div className="fixed top-0 right-0 w-1/4 h-full px-8 pt-4 bg-white">
				<div className="flex justify-between items-center">
					<h2 className="text-lg font-bold">Request Subscriber</h2>
					<RxCross2 onClick={() => setShowRequestModal(false)} className="cursor-pointer"/>
				</div>

				<div className='flex justify-center'>
					<img src={profileImg} alt="img" className="w-20 h-20 mt-4" />
				</div>
				<div className="flex w-full text-sm justify-around items-center mt-6">
					<div className="space-y-2">
						<p>Customer Name</p>
						<p>Purchase ID</p>
						<p>Purchase Date</p>
						<p>Subscription Plan</p>
						<p>Amount</p>
					</div>
					<div className="space-y-2 font-semibold">
						<p>Xapher</p>
						<p>12345678</p>
						<p>30 Sep 98</p>
						<p>12 Months Plan</p>
						<p>500,000 Kyats</p>
					</div>
				</div>

				<p className="font-bold mt-4">Backslip Image</p>
				<div className="w-5/6 h-24 bg-greyNav mx-auto mt-2"></div>

				<div className="flex items-center justify-center gap-4 mt-6">
					<button className="border border-red-700 text-red-700 hover:text-red-700/80 hover:border-red-700/80 font-semibold px-8 py-1 rounded-md">Reject</button>
					<button className="btn-2 px-8 py-1">Accept</button>
				</div>
			</div>
		</div>
	);
}

export default RequestModal