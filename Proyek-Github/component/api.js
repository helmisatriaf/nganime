import axios from "axios"
const _axios = axios.create({ baseURL: "https://kitsu.io/api/edge/" })
const api = {
  searchanime: function(keyword) {
    return _axios.get(`anime?filter[text]=${keyword}`)
  },
  searchmanga: function(keyword) {
    return _axios.get(`manga?filter[text]=${keyword}`)
  },
  trendinganime: _axios.get("trending/anime"),
  bestanime: _axios.get("anime?filter[status]=current&sort=-userCount"),
  popularanime: _axios.get("anime?sort=-userCount"),
  trendingmanga: _axios.get("manga?filter[status]=current&sort=-userCount"),
  bestmanga: _axios.get("manga?sort=-averageRating"),
  popularmanga: _axios.get("manga?sort=-userCount")
}

export default api