import {EventMediator} from "./Mediator.js";
import {MoviesData} from "./moviesData.js";
import { MoviesDisplay } from "./MoviesDisplay.js";
import { StatsBar } from "./statsBar.js";
import { Pages } from "./pages.js";

class App {

    constructor() {

        this.pages = new Pages();
        this.eventsMediator = new EventMediator();
        this.movieData = new MoviesData();
        this.movieDisplay = new MoviesDisplay();
        this.statsBar = new StatsBar();

    }

    init(){
        // console.log("1.Calling EventMediator constructor in main")

        // this.eventsMediator.on("TestEvent", function(test_data) {console.log("Test Event " + test_data)});
        
        this.movieData.init(this.eventsMediator);
        this.pages.init(this.eventsMediator);
        this.movieDisplay.init(this.eventsMediator);
        this.statsBar.init(this.eventsMediator);

        this.pages.casheElements();
        this.movieDisplay.casheElements();
        this.statsBar.casheElements();
        
        this.pages.bindEvents(this);

        console.log("Cashed statsBar", this.statsBar.dis_topRatedName);

        let app = this;
        this.eventsMediator.on("MoviesAPILoaded", function() {

            console.log("Movie Data Loaded==> \n 1)Update and Render Movies");

            app.movieDisplay.setMovies(app.movieData.movies);
            app.movieDisplay.render();

            console.log("2)Update and Render statsBar")
            app.statsBar.updateStatsBar(app.movieData.movies);
            app.statsBar.render();
        });
        this.eventsMediator.on("UpdateAPI", function () {
            app.movieData.getMovies(app.pages.currentPage);
        });
        
        this.eventsMediator.on("NextPage",function() {
            // this.pages.incrementPage();
            console.log("HERE")
            app.eventsMediator.emit("UpdateAPI");
        });

        this.eventsMediator.on("PreviousPage",function(app) {
            // app.pages.decrementPage();
            app.eventsMediator.emit("UpdateAPI");
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

    start(){
        this.movieData.getMovies(this.pages.currentPage);
    };


    //render() {}

    //bind() {buttons}
};

var app = new App();
app.init();
app.start();