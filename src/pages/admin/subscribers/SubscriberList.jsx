import React from 'react'
import SingleSubscriber from './SingleSubscriber';



const SubscriberList = ({subscribers, setShowRequestModal}) => {
  return (
		<section className="w-full mt-8 px-5">
			<div>
				<ul className="w-full flex items-center justify-between">
					<li>Subscribers</li>
					<li>Status</li>
					<li>Current Plan</li>
					<li>Purchase Date</li>
					<li>Action</li>
				</ul>
				<div className="w-full h-[0.05rem] bg-grey6 mt-3"></div>
			</div>
			{subscribers.length > 0
				? subscribers.map((subscriber, index) => (
					<SingleSubscriber subscriber={subscriber} key={index} setShowRequestModal={setShowRequestModal}/>
				  ))
				: null}
		</section>
	);
}

export default SubscriberList