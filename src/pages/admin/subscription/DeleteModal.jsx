/** @format */

import React, { useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteSubscriptions } from "../../../hooks/useSubscription";
import { ClipLoader } from "react-spinners";

const DeleteModal = ({ setShowDeleteModal, id, setId, refreshData }) => {
	const deleteSubscriptionMutation = useDeleteSubscriptions();

	const deleteHandle = () => {
		deleteSubscriptionMutation.mutate(id);
	};

	useEffect(() => {
		if (deleteSubscriptionMutation.isSuccess) {
			refreshData();
			setShowDeleteModal(false);
		}
	}, [deleteSubscriptionMutation.isSuccess]);

	return (
		<div className="absolute z-50 top-0 left-0 flex justify-center items-center w-full h-full bg-grey/30">
			<div className="fixed top-[30vh] w-1/4 h-fit bg-white p-8 rounded-lg shadow-md">
				<MdDeleteForever className="w-12 h-12 mx-auto" />
				<p className="text-center my-4">
					Are you sure you want to delete this subscription plan.
				</p>
				{deleteSubscriptionMutation.isError && (
					<p className="text-center text-red-400 normal-case text-xs mb-4">
						{deleteSubscriptionMutation.error.message}
					</p>
				)}
				<div className="flex w-full items-center justify-center gap-4">
					<button
						className="btn-cancel py-2 px-4"
						onClick={() => {
							setId("");
							setShowDeleteModal(false);
						}}
					>
						Cancel
					</button>
					<button
						className="btn-delete py-2 px-4 flex items-center justify-center gap-2"
						onClick={deleteHandle}
					>
						{deleteSubscriptionMutation.isLoading && (
							<ClipLoader color="white" size={20} />
						)}
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
