class ModalDetail extends HTMLElement {
    set bind(data) {
      this.data = data.attributes
      this.render()
    }
    
    render() {
      this.innerHTML = `
      <div class="modal fade" id="modalDetail" tabindex="-1" aria-labelledby="modalDetailLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-body">
              <img class="img-fluid" src="${this.data.posterImage.original}" alt="${this.data.titles.en_jp}">
              <h3 class="fw-bold mb-3">${this.data.canonicalTitle}</h3>
              <p> 
                <span class="badge bg-warning text-dark">${this.data.ageRatingGuide}</span>
                <span class="badge bg-warning text-dark">${this.data.episodeCount} Episode</span>
              </p>
              <p>
                <span class="badge bg-warning text-dark">${this.data.subtype}</span>
                <span class="badge bg-warning text-dark">${this.data.status}</span>
                <span class="badge bg-warning text-dark"><i class="bi-star-fill"></i>${this.data.averageRating}</span>
              </p>
              <p class="text-muted mb-1">
                <strong>Synopsis : </strong> 
                ${this.data.synopsis}
              </p>
              <p class="text-muted mb-1">
                <strong>Description : </strong> 
                ${this.data.description}
              </p>
              <a class="right" href="https://www.youtube.com/watch?v=${this.data.youtubeVideoId}"><i class="bi bi-play-circle-fill"></i></a>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      `
    }
  }
  
customElements.define("modal-detail", ModalDetail)