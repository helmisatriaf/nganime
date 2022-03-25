class NavBar extends HTMLElement {
    connectedCallback(){
      this.render()
    }
  
    render() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html">
            <img class="mx-1" src="https://i.ibb.co/ZSHKxT0/logo.jpg" width="30px" height="30px" />
            NGANIME
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>  
    `
  }
}

customElements.define("nav-bar", NavBar)