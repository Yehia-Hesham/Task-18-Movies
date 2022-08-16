// import { EventsMediator } from "./Mediator.js";

export class MoviesData {

    constructor() {
        this.movies = []
        this.numberOfMovies = 0;
        this.url = 'https://api.themoviedb.org/3/discover/movie?api_key=54dd8d9cb83969c4d9e360c3dde9c602&language=en&page=';
    }

    
    init(eventMediator) {
        //eventMediator
        this.eventMediator = eventMediator;
        console.log("2.Calling Event 'Test' in Movies", this.eventMediator)
        this.eventMediator.emit("TestEvent", 'test_string');


        // this.casheElements();

        // this.getMovies(this.currentPage);

        this.bindEvents();

        // console.log("init about to render")
        // this.render(this.dis_moviesList);
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

};