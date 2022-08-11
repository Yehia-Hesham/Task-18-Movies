// import { EventsMediator } from "./Mediator.js";

export class MoviesData {

    constructor() {
        this.currentPage = 1;
        this.movies = []
        this.numberOfMovies = 0;
        this.url = 'https://api.themoviedb.org/3/discover/movie?api_key=54dd8d9cb83969c4d9e360c3dde9c602&language=en&page=';


    }

    init(eventMediator) {
        //eventMediator
        this.eventMediator = eventMediator;
        console.log("2.Calling Event 'Test' in Movies", this.eventMediator)
        this.eventMediator.emit("TestEvent", 'test_string');


        this.casheElements();

        this.getMovies(this.currentPage);

        this.bindEvents();

        // console.log("init about to render")
        // this.render(this.dis_moviesList);
    }

    casheElements() {
        this.dis_moviesList = document.querySelector("#moviesList");
        console.log("3.Movies elements Cashed", this.dis_moviesList)

    }

    bindEvents() {
        console.log("events binded")
        // this.eventMediator.on("MoviesAPILoaded", function (movies_obj) {
        //     movies_obj.render.call(this);
        //     // this.render();
        // });
        // this.eventMediator.emit("MoviesAPILoaded")
    }

    async getMovies(currentPage) {
        const response = await fetch(this.url + currentPage);
        const data = await response.json();
        // console.log("adta", data.results)
        this.movies = data.results;

        // let topRated = movies[0];
        // dis_numberOfMovies.innerText = movies.length;

        this.movies = this.movies.map(item => {
            const title = item.title;
            const poster = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
            const overview = item.overview;
            const vote_average = item.vote_average;
            const count = item.vote_count;

            // if (vote_average >= topRated.vote_average) {
            //     topRated = item;
            // }
            return {
                title,
                poster,
                overview,
                vote_average,
                count
            };
        });
        // eventsMediator.emit("updateTopRatedMovie", {topRated,movies});
        // console.log("getMovies()", this.movies);
        this.eventMediator.emit("MoviesAPILoaded", this )
        console.log("getMovies() called", this.movies)
    };

    render() {
        console.log("movies Rendering...",this.movies,this.dis_moviesList)
        var template = ``;
        for (let i = 1; i <= this.movies.length - 1; i++) {
            console.log(this.movies[i]);
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
};