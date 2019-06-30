import React from "react";

import Summary from "./Summary";
import { useHTTP } from "../hooks/http";

const Character = props => {
  const [isLoading, charData] = useHTTP(
    "https://swapi.co/api/people/" + props.selectedChar,
    [props.selectedChar]
  );
  let loadedCharacter = null;
  if (charData)
    loadedCharacter = {
      id: props.selectedChar,
      name: charData.name,
      height: charData.height,
      colors: {
        hair: charData.hair_color,
        skin: charData.skin_color
      },
      gender: charData.gender,
      movieCount: charData.films.length
    };

  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedCharacter) {
    content = (
      <Summary
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      />
    );
  } else if (!isLoading && !loadedCharacter) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
};

export default React.memo(Character);
