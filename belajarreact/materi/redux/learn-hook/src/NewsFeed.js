import React, { useState, useEffect } from "react";

/**
 * Request Top Headline from https://newsapi.org/
 * Show loading message while fetching
 * Handle Error
 * Complete functionality of 'Load More' & 'Refresh' button
 *{
     news
     page
     isloading
     iserror
     isrefresh
 } 
 */
const defaultNews = {
  status: "ok",
  totalResult: 0,
  articles: [],
};
const endpoint =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=6b927f35a663445b983c24da7585fcdc";
const NewsFeed = () => {
  const [news, setNews] = useState(defaultNews);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isRefresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setNews(defaultNews);
    setPage(1);
    setLoading(false);
    setRefresh(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${endpoint}&page=${page}`);
        const result = await response.json();
        setNews((current) => {
          return {
            ...result,
            articles: [...current.articles, ...result.articles],
            totalResult: result.totalResult,
            status: result.status,
          };
        });
        if (result.status !== "ok") {
          throw new Error("error");
        }
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };
    fetchData();
  }, [page, isRefresh]);

  return (
    <>
      <h3>Tops News Headline</h3>
      {isLoading && <p>Loading...</p>}
      {isError && <p>gagal menampilkan data</p>}
      <ol>
        {news.articles.map((data, key) => (
          <li key={key}>
            {" "}
            <a href={data.url} target="blank">
              {data.title}
            </a>
          </li>
        ))}
      </ol>
      {news.articles.length < parseInt(news.totalResults) ? (
        <button disabled={isLoading} onClick={() => setPage((c) => c + 1)}>
          Load More
        </button>
      ) : null}
      <button onClick={handleRefresh} disabled={isLoading}>
        Refresh
      </button>
    </>
  );
};

export default NewsFeed;
