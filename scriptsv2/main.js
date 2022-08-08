import { EventsMediator } from "./eventsMediator.js"
import { MoviesData } from "./moviesData.js"


class App {

    constructor() {
        this.pageData = [];
        this.currentPage = 1;
    }

    init(){
        this.eventsMediator = new EventsMediator();
        this.movieData = new MoviesData();
        // console.log(this.movieData);
        this.movieData.getMovies().then(function (result) {
            console.log("result" ,result)
            movieData.render();
            //render call 
            //bind call
        });
        
        
        console.log("in init", this.movieData.movies);
    }
    //render() {}

    //bind() {buttons}
};

var app = new App();
app.init();