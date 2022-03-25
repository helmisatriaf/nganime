import "./jumbotronitem.js"

class jumbotronGroup extends HTMLElement {
  connectedCallback(){
    this.render()
  }

  set bind(data) {
    this.data = data
    this.render()
  }

  render() {
    this.innerHTML = `
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="8" aria-label="Slide 9"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="9" aria-label="Slide 10"></button>
        </div>
      <div class="carousel-inner">
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `
    this.renderJumbotrons(this.data)
  }

  renderJumbotrons(data) {
    const jumbotronGroup = this.querySelector(".carousel-inner")
      data.forEach((data, index) => {
      if(index == 0) {
        const jumbotronItem = document.createElement("jumbotron-item") 
        jumbotronItem.setAttribute("id", index)
        jumbotronItem.setAttribute("class","carousel-item active")
        jumbotronItem.setAttribute("style", `background-image: linear-gradient(rgba(0,0,0,0.70),rgba(0,0,0,0.70)), url(${data.attributes.coverImage.original}); background-position: center; background-size: cover`)
        jumbotronItem.bind = data
        jumbotronGroup.appendChild(jumbotronItem)
      } else {
        const jumbotronItem = document.createElement("jumbotron-item")
        jumbotronItem.setAttribute("id", index)
        jumbotronItem.setAttribute("class","carousel-item")
        jumbotronItem.setAttribute("style", `background-image: linear-gradient(rgba(0,0,0,0.70),rgba(0,0,0,0.70)), url(${data.attributes.coverImage.original}); background-position: center; background-size: cover`)
        jumbotronItem.bind = data
        jumbotronGroup.appendChild(jumbotronItem)
      }
    })
  }
}

customElements.define("nav-jumbotron", jumbotronGroup)