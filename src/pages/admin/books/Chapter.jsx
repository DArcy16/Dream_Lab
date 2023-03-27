import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";

const Chapter = (content) => {
  const [chapters, setChapters] = useState(content?.chapters);
  const [newChapter, setNewChapter] = useState("");

  function ChapterCard({ chapter, onDelete }) {
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
        <button
          onClick={onDelete}
          className="mt-2 flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors duration-200"
        >
          <FiTrash className="h-5 w-5" />
          <AiOutlineRight className="h-5 w-5" />
        </button>
      </div>
    );
  }

  function handleNewChapterChange(event) {
    setNewChapter(event.target.value);
  }

  function handleNewChapterSubmit(event) {
    event.preventDefault();
    setChapters([...chapters, newChapter]);
    setNewChapter("");
  }

  function handleChapterDelete(index) {
    const newChs = [...chapters];
    newChs.splice(index, 1);
    setChapters(newChs);
  }

  return (
    <div className="max-w-2xl mx-auto border border-[#BFBFBF] border-0.4 rounded-lg">
      <form
        onSubmit={handleNewChapterSubmit}
        className="mb-4 flex bg-[#F7FAFC] justify-between items-center border border-[#BFBFBF] border-0.4 border-l-0 border-r-0 border-t-0 rounded-md px-3 py-2"
      >
        <input
          type="text"
          placeholder="Content"
          value={newChapter}
          onChange={handleNewChapterChange}
          className="mr-4 border-gray-300 rounded-lg flex-grow hover:border-none hover:outline-none bg-transparent"
        />
        <button
          className="btn-2 flex gap-2 items-center justify-center px-2 py-2 w-44"
          onClick={() => {}}
        >
          {" "}
          <BsPlusCircleFill /> Create New{" "}
        </button>
      </form>
      <div className={`h-${chapters.length === 0 ? "[200px]" : "[100%]"} p-4`}>
        {chapters.map((ch, index) => (
          <div className="mb-4" key={index}>
            <ChapterCard
              chapter={ch}
              onDelete={() => handleChapterDelete(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapter;
