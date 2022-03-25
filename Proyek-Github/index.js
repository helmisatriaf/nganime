import api from "./component/api.js"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./style/style.css"
import "./component/jumbotrongroup.js"
import "./component/cardgroup.js"
import "./component/navbar.js"
import "./component/footer.js"

const searchForm = document.querySelector("form")
const searchInput = document.querySelector("input")
const view = document.querySelector("main")
const viewJumbotron = document.querySelector("header")

axios.all([api.trendinganime, api.bestanime, api.popularanime, api.trendingmanga, api.bestmanga, api.popularmanga]).then((res) => {
  const groupTitles = ["Trending for Anime", "Highest Rated for Anime", "Most Popular for Anime", "Trending for Manga", "Highest Rated for Manga", "Most Popular for Manga"]
  groupTitles.forEach((title, index) => {
    const cardGroup = newCardGroup({ title, expand: "horizontal", data: res[index].data.data })
    view.setAttribute("class", "container")
    view.appendChild(cardGroup)
  })
})

api.trendinganime.then(res => {
  const jumbotron = newJumbotron({ title: "Trending Anime", data: res.data.data })
  viewJumbotron.appendChild(jumbotron)
})

searchForm.onsubmit = (e) => {
  e.preventDefault()
  if(searchInput.value) {
    axios.all([api.searchanime(searchInput.value), api.searchmanga(searchInput.value)]).then(res => {
      view.innerHTML = ""
      viewJumbotron.innerHTML = ""
      const groupTitles = ["Anime", "Manga"]
      groupTitles.forEach((title, index) => {
        if(res[index].data.data.length === 0) {
          const cardGroup = newCardGroup({ title:`No Result For ${title}`, expand: "horizontal", data: [] })
          view.setAttribute("class", "container")
          view.appendChild(cardGroup)
        } else {
          const cardGroup = newCardGroup({ title, expand: "vertikal", data: res[index].data.data})
          view.appendChild(cardGroup)
          view.setAttribute("class", "container py-5")
        }
      })
    })
  }
}

const newJumbotron = ({data}) => {
  const jumbotron = document.createElement("nav-jumbotron")
  jumbotron.bind = data
  return jumbotron
}

const newCardGroup = ({title, expand, data}) => {
  const cardGroup = document.createElement("card-group")
  cardGroup.setAttribute("title", title)
  cardGroup.setAttribute("expand", expand)
  cardGroup.bind = data
  return cardGroup
}