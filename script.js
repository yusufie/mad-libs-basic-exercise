// - Start with this index.html, which has several input elements and a button:

// - Link index.html to index.js using `script` tag.

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.

// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

// Add an event listener to the button so that it calls a makeMadLib function when clicked.
function makeMadLib() {
  // Retrieve the current values of the form input elements
  const name = document.getElementById("person").value;
  const adjective = document.getElementById("adjective").value;
  const noun = document.getElementById("noun").value;

  // Make a story from them
  const story = `${name} really likes ${adjective} ${noun}.`;
  // Output that in the story div
  document.getElementById("story").innerHTML = story;
}

// Add an event listener to the button so that it calls a makeMadLib function when clicked.
document.getElementById("lib-button").addEventListener("click", makeMadLib);
