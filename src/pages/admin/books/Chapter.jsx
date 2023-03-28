import React, { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";
import AddChapterModal from "../../../components/AddChapterModal";
import { useLoginBoxContext } from "../../../contexts/user/LoginBoxContext";
import UpdateChapterModal from "../../../components/UpdateChapterModal";
import { useDeleteChapter } from "../../../hooks/useBooks";

const Chapter = ({ bookChapters, handleRefresh }) => {
  const [chapters, setChapters] = useState(bookChapters);
  const [editChapterData, setEditChapterData] = useState(null);
  const {
    showAddChapterModal,
    setShowAddChapterModal,
    showEditChapterModal,
    setShowEditChapterModal,
  } = useLoginBoxContext();
  const deleteChapterMutation = useDeleteChapter(handleRefresh);

  useEffect(() => {
    setChapters(bookChapters);
  }, [bookChapters]);

  const handleDelete = (e, chapterId) => {
    e.preventDefault();
    deleteChapterMutation.mutate(parseInt(chapterId));
  };

  const handleEditChapter = (e, data) => {
    e.preventDefault();
    setEditChapterData(data);
    setShowEditChapterModal(!showEditChapterModal);
  };
  const handleAddNewModalOpen = (e) => {
    e.preventDefault();
    setShowAddChapterModal(true);
  };

  function ChapterCard({ chapter }) {
    return (
      <div
        className="bg-white rounded-lg p-4 flex justify-between"
        style={{
          boxShadow:
            "0px 2px 4px rgba(136, 144, 194, 0.2), 0px 5px 15px rgba(37, 44, 97, 0.15)",
        }}
      >
        <p className="text-lg">
          {chapter?.id}. {chapter?.title}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => handleDelete(e, chapter?.id)}
            className="mt-2 gap-1 text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            <FiTrash className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => handleEditChapter(e, chapter)}
            className="mt-2 text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            <AiOutlineRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-2xl mx-auto border border-[#BFBFBF] border-0.4 rounded-lg">
        <div className="mb-4 flex bg-[#F7FAFC] justify-between items-center border border-[#BFBFBF] border-0.4 border-l-0 border-r-0 border-t-0 rounded-md px-3 py-2">
          <h3 className="mr-4 font-semibold border-gray-300 rounded-lg flex-grow hover:border-none hover:outline-none bg-transparent">
            Content
          </h3>
          <button
            data-modal-target="create-chapter-modal"
            data-modal-toggle="create-chapter-modal"
            type="button"
            className="btn-2 flex gap-2 items-center justify-center px-2 py-2 w-44"
            onClick={handleAddNewModalOpen}
          >
            <BsPlusCircleFill className="text-[18px] select-none" />
            <p className=" select-none">Create New</p>
          </button>
        </div>
        {chapters?.length === 0 ? (
          <div className="h-[200px] flex items-center justify-center">
            No Chapter Found 😑
          </div>
        ) : (
          <div className="h-[100%] p-4">
            {chapters?.map((ch, index) => (
              <div className="mb-4" key={index}>
                <ChapterCard chapter={ch} />
              </div>
            ))}
          </div>
        )}
      </div>
      {showAddChapterModal && <AddChapterModal handleRefresh={handleRefresh} />}
      {showEditChapterModal && (
        <UpdateChapterModal
          data={editChapterData}
          handleRefresh={handleRefresh}
        />
      )}
    </>
  );
};

export default Chapter;
