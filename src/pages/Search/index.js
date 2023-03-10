import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

function Search() {

  const [wikiState, setWikiState] = useState({
    search: "Wikipedia",
    title: "",
    url: "",
    error: ""
  });

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    API.searchTerms(wikiState.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setWikiState({
          ...wikiState,           
          title: res.data[1][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setWikiState({ ...wikiState, error: err.message }));
    }, [wikiState.search]);

  const handleInputChange = event => {
    setWikiState({ ...wikiState, search: event.target.value });
  };

    return (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For Anything on Wikipedia</h1>
          <Alert type="danger" style={{ opacity: wikiState.error ? 1 : 0, marginBottom: 10 }}>
            {wikiState.error}
          </Alert>
          <SearchForm
            handleInputChange={handleInputChange}
            results={wikiState.search}
          />
          <SearchResults
            title={wikiState.title}
            url={wikiState.url}
          />
        </Container>
      </div>
    );
}

export default Search;