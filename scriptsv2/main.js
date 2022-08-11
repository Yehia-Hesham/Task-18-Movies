import {EventMediator} from "./Mediator.js";
import {MoviesData} from "./moviesData.js";
import { StatsBar } from "./statsBar.js";

class App {

    constructor() {
        this.pageData = [];
        this.currentPage = 1;

    }

    init(){
        console.log("1.Calling EventMediator constructor in main")
        this.eventsMediator = new EventMediator();

        this.eventsMediator.on("TestEvent", function(test_data) {console.log("Test Event " + test_data)});

        this.movieData = new MoviesData();
        this.movieData.init(this.eventsMediator);

        this.statsBar = new StatsBar();
        this.statsBar.init(this.eventsMediator);
        


        this.eventsMediator.on("MoviesAPILoaded", function() {

            console.log("Movie Data Loaded==> \n 1)Update and Render Movies");
            app.movieData.render();

            console.log("2)Update and Render statsBar")
            this.statsBar.updateStatsBar(app.movieData.movies);
            // this.render();
        });
    //     // console.log(this.movieData);
    //     this.movieData.getMovies().then(function (result) {
    //         console.log("result" ,result)
    //         movieData.render();
    //         //render call 
    //         //bind call
        // });
        
        
    //     console.log("in init", this.movieData.movies);
    };


    //render() {}

    //bind() {buttons}
};

var app = new App();
app.init();