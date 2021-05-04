import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Search from "./components/Search";

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(response.data);

      setItems(response.data);
      setIsLoading(false);
    };

    getData();
  }, [query]);

  return (
    <>
      <div className="container">
       <Header />
       <Search getQuery={(q) => setQuery(q)}/>
       <Characters isLoading={isLoading} items={items}/>
      </div>
    </>
  );
};

export default App;
