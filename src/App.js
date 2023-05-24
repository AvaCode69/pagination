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
  }, [loading]);

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
      </section>
    </main>
  );
}

export default App;
