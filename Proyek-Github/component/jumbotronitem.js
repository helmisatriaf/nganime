class JumbotronItem extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    set bind(data){
        this.data = data.attributes
        this.render()
    }

    render() {
        this.innerHTML = `
            <div class="carousel-caption row text-start gx-3 flex-nowrap">
                <div class="left col-8">
                    <h1>${this.data.titles.en_jp}</h1>
                    <p>${this.data.description.length > 400 ? this.data.description.slice(0,400) + '...' : this.data.description}</p>
                    <p>
                        <span class="badge bg-warning text-dark">${this.data.subtype}</span>
                        <span class="badge bg-warning text-dark">${this.data.status}</span>
                        <span class="badge bg-warning text-dark">${this.data.episodeCount} Episode</span>
                        <span class="badge bg-warning text-dark"><i class="bi-star-fill"></i>${this.data.averageRating}</span>
                        <span class="badge bg-warning text-dark">${this.data.ageRatingGuide}</span>
                    </p>
                    <a href="https://www.youtube.com/watch?v=${this.data.youtubeVideoId}"><i class="bi bi-play-circle-fill"></i></a>
                    <a><i class="bi bi-plus-circle-fill"></i></a>
                </div>
                <div class="right col-4">
                    <img src="${this.data.posterImage.small}" alt="${this.data.titles.en_jp}">
                </div>
            </div>
        `
    }
}

customElements.define("jumbotron-item", JumbotronItem) 