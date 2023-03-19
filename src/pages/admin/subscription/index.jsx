/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import {RiFileCopy2Line} from "react-icons/ri"
import SingleSubscriptionPlan from "./SingleSubscriptionPlan";
import DeleteModal from "./DeleteModal";
import { useSubscriptions } from "../../../hooks/useSubscription";
import {ClipLoader} from 'react-spinners'


const index = () => {
  const [id , setId]= useState('');
  const {isLoading , isError, data, error, refetch} = useSubscriptions();
  

  const refreshData = () => {
    refetch();
  }



  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if(isLoading) {
    return <div className="admin-outlet-container flex items-center justify-center">
      <ClipLoader color="gray" size={50}/>
    </div>
  }

  if (isError) {
		return (
			<div className="admin-outlet-container flex top-10 justify-center">
				<p className="text-red-400 text-lg normal-case font-bold">{error.message}</p>
			</div>
		);
	}



  return (
    <section className="admin-outlet-container">
      {/* header */}
      <div className="flex justify-between items-center">
        <h3 className="sub-heading">Subscription Plan Lists</h3>
        <button
          className="btn-2 flex gap-2 items-center justify-center px-4 py-2"
          onClick={() => navigate("create")}
        >
          {" "}
          <BsPlusCircleFill /> Create Subscription{" "}
        </button>
      </div>

      {/* Subscription Plan List */}
      <div className="w-full mt-8">
        {data.length > 0 ? (
          data.map((item) => (
            <SingleSubscriptionPlan
              setShowDeleteModal={setShowDeleteModal}
              key={item.id}
              item={item}
              setId= {setId}
            />
          ))
        ) : (
          <div className="w-full pt-32">
            <RiFileCopy2Line className="w-24 h-24 mx-auto text-grey2"/>
            <p className="text-center mt-2 text-grey2">You have no plans created yet.</p>
          </div>
        )}
      </div>

      {showDeleteModal ? (
        <DeleteModal setShowDeleteModal={setShowDeleteModal} id={id} setId={setId} refreshData={refreshData}/>
      ) : null}
    </section>
  );
};

export default index;
