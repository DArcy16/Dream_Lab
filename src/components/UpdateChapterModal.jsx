import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useLoginBoxContext } from "../contexts/user/LoginBoxContext";
import { useUpdateChapter } from "../hooks/useBooks";

const UpdateChapterModal = ({ data, handleRefresh }) => {
  const [chapterTitle, setChapterTitle] = useState(data?.title);
  const [description, setDescription] = useState(data?.content);

  const { showEditChapterModal, setShowEditChapterModal } =
    useLoginBoxContext();
  const location = useLocation();
	const id = location?.state?.id;

  const updateChapterMutation = useUpdateChapter(handleRefresh);

  const handleCancel = (e) => {
    e.preventDefault();
    setShowEditChapterModal(!showEditChapterModal);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateChapterMutation.mutate({
      body: { bookId: parseInt(id), title: chapterTitle, content: description },
      chapterId: parseInt(data?.id),
    });
  };

  return (
    <div>
      {/* Main modal */}
      <div
        id="update-chapter-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`fixed grid place-items-center text-[#222222] bg-[#1c1c1ca3] top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}
      >
        <div className=" w-full max-w-md h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-6 py-6 lg:px-8">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label htmlFor="title" className="font-2xl mb-1">
                    Custom Title Name
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="border border-stoke rounded-md p-2 mb-4"
                    value={chapterTitle}
                    onChange={(e) => setChapterTitle(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="para" className="font-2xl mb-1">
                    Paragraph
                  </label>
                  <textarea
                    type="text"
                    value={description}
                    id="para"
                    rows={8}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-stoke rounded-md p-2 resize-none"
                  />
                </div>
                <div className="flex justify-center gap-6 items-center">
                  <button
                    className="btn-cancel py-2 px-4 mt-4 transition-all duration-200 active:scale-95"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-2 py-2 px-4 mt-4 transition-all duration-200 active:scale-95"
                  >
                    Done
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateChapterModal;
