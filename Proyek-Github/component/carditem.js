class CardItem extends HTMLElement {
  connectedCallback(){
    this.render()
  }
  
  set bind(data) {
    this.data = data.attributes
    this.render()
  }
  
  render() {
    this.innerHTML = `
      <div class="card bg-secondary overflow-hidden position-relative border-0">
        <img class="card-img-top" src="${this.data.posterImage.original}" alt="${this.data.titles.en_jp}"/>
          <div class="description">
            <h5 class="text-white">${this.data.titles.en_jp}</h5>
            <p>
              <span class="badge bg-warning text-dark">${this.data.subtype}</span>
              <span class="badge bg-warning text-dark">${this.data.status}</span>
              <span class="badge bg-warning text-dark">${this.data.episodeCount} Episode</span>
              <span class="badge bg-warning text-dark"><i class="bi-star-fill"></i>${this.data.averageRating}</span>
              <span class="badge bg-warning text-dark">${this.data.ageRatingGuide}</span>
              <span class="badge bg-light text-dark"><a href="https://www.youtube.com/watch?v=${this.data.youtubeVideoId}"><i class="bicard bi-play-circle-fill"></i></a></span>
            </p>         
            <div class="bg-overlay position-absolute bottom-0 w-100 p-3">
              <h5 class="text-light overflow-hidden mb-0">${this.data.titles.en_jp}</h5>
            </div>
          </div>
      </div>
    `
  }
}

customElements.define("card-item", CardItem)