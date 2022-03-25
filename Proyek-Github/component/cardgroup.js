import { Modal } from "bootstrap"
import "./modal.js"
import "./carditem.js"

class CardGroup extends HTMLElement {
  connectedCallback(){
    this.title  = this.getAttribute("title")
    this.expand = this.getAttribute("expand")
    this.render()
  }
  
  set bind(data) {
    this.data = data
    this.render()
  }
  
  render() {
    this.innerHTML = `
      <h3 class="py-3">${this.title}</h3>
      <div class="row ${this.expand === "horizontal" ? "gx-3 flex-nowrap overflow-auto" : "g-3"}" mb-4"></div>
    `
    this.renderCard(this.data)
    this.infoCard()
  }
  
  renderCard(data) {
    const cardGroup = this.querySelector(".row")
    data.forEach((data, index) => {
      const cardItem = document.createElement("card-item")
      cardItem.setAttribute("class", "col-6 col-md-2")
      cardItem.setAttribute("id", index)
      cardItem.bind = data
      cardGroup.appendChild(cardItem)
    })
  }

  infoCard() {
    const cardItem = this.querySelectorAll("card-item")
    let infoCard = ""
    cardItem.forEach(card => {
      card.onclick = () => {
        if(infoCard) infoCard.remove()
        const newinfoCard = document.createElement("modal-detail")
        newinfoCard.bind = this.data[+card.id]
        this.appendChild(newinfoCard)
        infoCard = this.querySelector(".modal")
        new Modal(infoCard).show()
      }
    })
  }
}

customElements.define("card-group", CardGroup)