import usePosts from "./hooks/usePosts";

import Article from "./components/Article";
import Header from "./components/Header";
import Profil from "./components/Profil";
import useProfile from "./hooks/useProfile";

function App() {
  const { data, isLoading, isSuccess } = usePosts();
  const isOpen = useProfile((state) => state.isOpen);

  return (
    <div className="container py-6 md:px-20 px-10 min-w-full min-h-screen h-full">
      <Header />

      {isOpen && <Profil />}

      <div className="my-24 ">
        <div className="emulated-flex-gap">
          {isLoading && "Loading...."}
          {isSuccess &&
            data.map((post) => {
              return <Article key={post.id} post={post} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
