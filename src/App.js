import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "e079af19a1f6289950925f5a33bba8a12e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  const [newsArticles, setNewsArtciles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newsHeadlines") {
          setNewsArtciles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <h2>Alan AI News Application</h2>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
