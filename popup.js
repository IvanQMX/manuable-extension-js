let textArea = document.getElementById("textArea");
let searchButton = document.getElementById("searchButton");

/**
  Characters that Google replaces in the search query
*/
const SPECIAL_CHARACTERS = [
  { searchValue: "%", replaceValue: "%25" },
  { searchValue: "+", replaceValue: "%2B" },
  { searchValue: "?", replaceValue: "%3F" },
  { searchValue: "=", replaceValue: "%3D" },
  { searchValue: "&", replaceValue: "%26" },
  { searchValue: "/", replaceValue: "%2F" },
  { searchValue: "{", replaceValue: "%7B" },
  { searchValue: "}", replaceValue: "%7D" },
  { searchValue: "(", replaceValue: "%28" },
  { searchValue: "(", replaceValue: "%29" },
  { searchValue: "$", replaceValue: "%24" },
  { searchValue: "#", replaceValue: "%23" },
  { searchValue: "!", replaceValue: "%21" },
  { searchValue: ",", replaceValue: "%2C" },
  { searchValue: ";", replaceValue: "%3B" },
];

/**
  Formats the given string in a google query format
  @param {string} string - The string to format
*/
const formatQuery = (string) => {
  let formattedString = string;
  SPECIAL_CHARACTERS.forEach(({ searchValue, replaceValue }) => {
    formattedString = formattedString.replaceAll(searchValue, replaceValue);
  });
  return formattedString.split(" ").join("+");
};

// When the button is clicked, searchs for the text in the text area
searchButton.addEventListener("click", () => {
  const query = formatQuery(textArea.value);
  const googleURL = "https://www.google.com/search?q=" + query;
  chrome.tabs.create({ url: googleURL });
});
