import { useEffect } from "react";
import { useQuery } from "react-query";

import { getAllArticle } from "./api";

import Article from "./components/Article";
import Header from "./components/Header";
import Profil from "./components/Profil";
import { ProfileStore } from "./store";

function App() {
  const getArticles = useQuery("posts", getAllArticle, {
    staleTime: 10000,
    refetchInterval: 10000,
  });

  const isOpen = ProfileStore((state) => state.isOpen);

  useEffect(() => {
    console.log("App component effect");
  }, []);

  return (
    <div className="container py-6 md:px-20 px-10 min-w-full min-h-screen h-full">
      <Header />

      {isOpen && <Profil />}

      <div className="my-24 ">
        <div className="emulated-flex-gap">
          {getArticles.isLoading && "Loading...."}
          {getArticles.isSuccess &&
            getArticles.data.map((article) => {
              return <Article key={article.id} article={article} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
