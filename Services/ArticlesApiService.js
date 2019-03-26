import axios from "axios";

// const url = `http://192.168.1.178:3000`;  // whenever we want to make api calls to localhost we have to use the ip address not the keyword `localhost` since that can result in a network error.
const url = `http://localhost:3000/`;

export const GetArticles = async () => {
  try {
    let response = await axios.get(url + "/api/articles");
    const articles = response.data.articles;
    return articles;
  } catch (error) {
    console.error(error);
  }
};
