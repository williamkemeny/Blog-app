import React, { useState } from "react";

interface CreateCommetProps {
  handleCreateComment: (content: string) => void;
}

const CreateComment: React.FC<CreateCommetProps> = ({
  handleCreateComment,
}) => {
  const [content, setContent] = useState("");

  return (
    <div className="px-10 flex items-center justify-center">
      <div className="bg-white border-2 max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <textarea
              className="block border-2 border-gray-150 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              id="Textarea"
              cols={50}
              rows={4}
              placeholder=""
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <label
              htmlFor="Textarea"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Content
            </label>
          </div>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              handleCreateComment(content);
              setContent("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
