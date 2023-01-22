import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {
  // Axios library
  static async fetchPopulars() {
    try {
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
      // console.log(response.data.results);
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  }

  static async fetchByTitle(title) {
    try {
      const response = await axios.get(`${BASE_URL}/search/tv${API_KEY_PARAM}&query=${title}`);
      return response.data.results;
    } catch (e) {
      console.log(e);
    }
  }

  // Fetch
  // static async fetchPopulars() {
  //   try {
  //     const response = await fetch(`${BASE_URL}tv/popular${API_KEY_PARAM}`, {
  //       method: "GET",
  //     });
  //     const results = await response.json();  
  //     return results.results;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}