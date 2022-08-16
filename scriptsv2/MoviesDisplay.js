export class MoviesDisplay {
    init(eventsMediator){
        this.eventsMediator = eventsMediator;
    }

    setMovies(movies){
        this.movies = movies;
    }

    casheElements() {
        this.dis_moviesList = document.querySelector("#moviesList");
        console.log("3.Movies elements Cashed", this.dis_moviesList)

    }

    render() {
        console.log("movies Rendering...",this.movies,this.dis_moviesList)
        var template = ``;
        for (let i = 1; i <= this.movies.length - 1; i++) {
            // console.log(this.movies[i]);
            // this.movies.forEach(element => {
            template += `
           <li>
                <div>        
                    <div class="card text-center my_cards" data-index = ${i}>
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src= ${this.movies[i].poster} onerror="src='https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png'" class="img-fluid" />
                            <a href="#!">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${this.movies[i].title}</h5>
                            <p class="card-text">${this.movies[i].vote_average}</p>
                        </div>
                    </div>
                </div>
            </li>`
            // });
        };
        this.dis_moviesList.innerHTML = template;
    };
}