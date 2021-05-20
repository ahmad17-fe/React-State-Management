import React, { useEffect } from "react";
import { useIsFetching } from "react-query";
import { ProfileStore } from "../store";

function Header() {
  const isFetchingPost = useIsFetching(["posts"]);
  const setIsOpen = ProfileStore((state) => state.setIsOpen);

  useEffect(() => {
    console.log("header component effect");
  });

  return (
    <header className="bg-white rounded-2xl shadow-lg px-6 w-full h-20 flex justify-between items-center">
      <h1 className="md:text-2xl flex text-base font-medium">
        Learn State Management
        {isFetchingPost !== 0 && (
          <svg
            className="bg-yellow-500 animate-spin rounded-sm h-5 w-5 mr-3"
            viewBox="0 0 24 24"
          ></svg>
        )}
      </h1>
      <button
        type="button"
        onClick={() => setIsOpen()}
        className="py-2 md:px-4 px-2 bg-blue-600 hover:bg-blue-700 focus:ring-bluk-500 focus:ring-offset-blue-200 text-white md:w-24 w-16 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl"
      >
        Profil
      </button>
    </header>
  );
}

export default React.memo(Header);
