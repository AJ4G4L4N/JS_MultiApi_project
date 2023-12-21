# JS_MultiApi_project

## APIs Overview

APIs play a crucial role in fetching various types of data over the internet. In this demonstration, we'll explore interactions with two APIs to gather valuable information.

### OMDBAPI Movie API

The OMDBAPI offers a daily allowance of 1000 free requests for its movie search API. This allows users to retrieve movie details based on their titles.

#### Movie API Usage

To access the OMDBAPI, an authentication key is necessary for initiating the request. It offers the capability to search for a movie using its title or IMDB ID, and the resulting data can be obtained in either JSON or XML format. The essential parameter to provide to the API is "s," which specifies the search criteria. Additional parameters can also be included, such as "page" for the page number, "y" for the release year, and "r" for the desired data format to be returned, among others.

API Endpoint: http://www.omdbapi.com/?apikey="API_KEY"&s="search_query"

#### Fetch

Click on the button and it will fetch details about Harry Potter movies.

#### Search
This can be to fetch movies for any custom search.

### Unsplash Images API

The Image API provided by the popular Unsplash platform offers the capability to search images based on custom queries. With a free developer account, we can perform 50 requests per hour.

#### Unsplash Image API Usage

To access the Unsplash API, we need an API key obtained by signing up for a developer account. The API response provides a list of images along with their URLs and descriptions. Parameters like page number, images per page, and content safety filter can be included in the request.

API Endpoint: https://api.unsplash.com/search/photos/?client_id="API_KEY"&query="search_query"

#### Fetch

Click on the button and it will fetch some Lion's pictures.

#### Search
This can be to fetch pictures for any custom search.

### Using Images API and Movie API Together

We first search the movie details and then get related images from Unsplash.

## Official Documentations

- [Unsplash Image API Documentation](https://unsplash.com/documentation)
- [OMDBAPI's Movie API Documentation](http://www.omdbapi.com/)
