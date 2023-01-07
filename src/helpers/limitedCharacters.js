const limitedCharacters = (string, totalCharacters) => {
  let final_string = string?.substring(0, totalCharacters) + "...";
  return final_string;
};

export default limitedCharacters;
