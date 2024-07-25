import React from "react";

const ListBox = () => {
  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
        />
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          className="h-24 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
        />
        <button className="px-6 my-4 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-900 border-gray-600 placeholder-gray-400 text-white">
          Create
        </button>
      </form>
    </div>
  );
};

export default ListBox;
