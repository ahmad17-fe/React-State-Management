import React, { useEffect } from "react";

function Article({ article: { id, title, article } }) {
  useEffect(() => {
    console.log("article component effect");
  });

  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-80 cursor-pointer">
      <a href={`#${id}`} className="w-full block h-full">
        <div className="bg-white dark:bg-gray-800 h-full w-full p-4">
          <p className="text-indigo-500 text-md font-medium">Article</p>
          <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {title}
          </p>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md">
            {article}
          </p>
        </div>
      </a>
    </div>
  );
}

export default React.memo(Article);
