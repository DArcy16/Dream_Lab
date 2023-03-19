import React from 'react'
import SingleSubscriber from './SingleSubscriber';



const SubscriberList = ({subscribers, setShowRequestModal, setSubscriber}) => {
  return (
		<section className="w-full mt-8 px-5">
			<div>
				<ul className="w-full flex items-center justify-between text-center">
					<li className="w-1/5">Subscribers</li>
					<li className="w-1/5">Status</li>
					<li className="w-1/5">Current Plan</li>
					<li className="w-1/5">Purchase Date</li>
					<li className="w-1/5">Action</li>
				</ul>
				<div className="w-full h-[0.05rem] bg-grey6 mt-3"></div>
			</div>
			{subscribers.length > 0
				? subscribers.map((subscriber, index) => (
						<SingleSubscriber
							subscriber={subscriber}
							key={index}
							setShowRequestModal={setShowRequestModal}
							setSubscriber={setSubscriber}
						/>
				  ))
				: null}
		</section>
	);
}

export default SubscriberList