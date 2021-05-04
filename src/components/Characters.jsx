import React from "react";
import CharacterGrid from './CharacterGrid';
import Spinner from "./Spinner";

const Characters = ({items, isLoading}) => {
  

  return (
      (isLoading)? <Spinner /> : (
          <section className="cards">
    <div className="container-grid">
      {items.map((item) => {
          return(<CharacterGrid className="heading" key={item.char_id} item={item} loading={isLoading}></CharacterGrid>)
          })}
    </div>
    </section>
      )
  )

}


export default Characters;
