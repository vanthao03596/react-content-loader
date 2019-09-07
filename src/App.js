import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./Post";


function App() {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  function handleScroll(event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setLoadingMore(true)
      setPage(page + 1)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    fetch(`https://jsonplaceholder.typicode.com/photos?_start=${page * 6}&_limit=6`)
      .then(response => response.json())
      .then(json => {
        setData([...data,...json]);
        setLoading(false);
        if (loadingMore) {
          setLoadingMore(false)
        }
      });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [page]);
  return (
    <div className="container">
        <Post loading={loading} data={data} loadingMore={loadingMore}/>
    </div>
  );
}

export default App;
