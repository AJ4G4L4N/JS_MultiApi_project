// API URLs for image and movie data
const imageApiUrl =
  "https://api.unsplash.com/search/photos/?client_id=l9Zeu7rGE3MVF127G-yuQtYGBoowO2GQouTdLARilEM&query=";
const movieApiUrl = "https://www.omdbapi.com/?apikey=b565c994&s=";

// Function to handle search query and convert spaces to '+' for API compatibility
const handleSearchQuery = (query) => {
  const words = query.split(" ");
  const newQuery = words.join("+");
  return newQuery;
};

// Function to fetch and display movie data from the OMDB API
const getMovie = async (query, ele, both = false) => {
  try {
    let url = movieApiUrl + handleSearchQuery(query);

    if (query === "custom") {
      const val = document.getElementById("custom-movie-input").value;
      url = movieApiUrl + handleSearchQuery(val);
    }

    const res = await fetch(url);
    const response = await res.json();
    const results = response.Search;

    const dataBox = document.getElementById(ele);
    dataBox.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      const newChildElement = document.createElement("div");
      newChildElement.classList.add("grid-item");

      const title = document.createElement("div");
      title.innerText = results[i].Title;
      title.classList.add("movie-title");
      title.classList.add("simple-p");

      const details = document.createElement("div");
      const imdb = document.createElement("span");
      imdb.innerText = results[i].imdbID;
      const year = document.createElement("span");
      year.innerText = results[i].Year;

      details.style.display = "flex";
      details.style.justifyContent = "space-between";
      details.style.marginTop = "10px";
      details.appendChild(year);
      details.appendChild(imdb);

      const imgEle = document.createElement("img");
      imgEle.setAttribute("src", results[i].Poster);
      imgEle.setAttribute("height", "150px");
      imgEle.setAttribute("width", "200px");

      newChildElement.appendChild(title);
      newChildElement.appendChild(imgEle);
      newChildElement.appendChild(details);

      dataBox.appendChild(newChildElement);
      if (both) {
        break;
      }
    }
  } catch (err) {
    console.log("error: ", err);
  }
};

// Function to fetch and display images from the Unsplash API
const getImages = async (query, ele, both = false) => {
  try {
    let url = imageApiUrl + handleSearchQuery(query);

    if (query === "custom") {
      const val = document.getElementById("custom-image-input").value;
      url = imageApiUrl + handleSearchQuery(val);
    }

    const res = await fetch(url);
    const response = await res.json();

    const imagesArray = response.results;

    const dataBox = document.getElementById(ele);
    dataBox.innerHTML = "";

    for (let i = 0; i < imagesArray.length; i++) {
      const newChildElement = document.createElement("div");

      const imgEle = document.createElement("img");
      imgEle.setAttribute("src", imagesArray[i].urls.regular);
      imgEle.setAttribute("height", "150px");
      imgEle.setAttribute("width", "200px");

      newChildElement.appendChild(imgEle);

      dataBox.appendChild(newChildElement);
    }
  } catch (err) {
    console.log("error: ", err);
  }
};


// Function to fetch and display both movie and image data together
const getBothSearch = () => {
  const query = document.getElementById("bothSearch").value;

  getMovie(query, "both-movie-data", true);
  getImages(query, "both-images-data", true);
};
