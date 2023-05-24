import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [pages, setPages] = useState(0);
  const [follower, setFollower] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollower(data[pages]);
  }, [loading, pages]);

  const handlePage = (index) => {
    setPages(index);
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading" : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {follower.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        <div className="btn-container">
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === pages ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
