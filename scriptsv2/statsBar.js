export class StatsBar{

    constructor(){

        // this.currentPage = 1;

    }

    init(eventsMediator) {
        this.eventsMediator = eventsMediator;
        this.numberOfMovies = 0;
        this.currentPage = 1;
        this.numberOfMovies = 1;
        this.topRatedMovie = {};
        this.topRating = 0;
        // this.updateStatsBar(movies);
    }

    casheElements(){
        this.dis_page = document.querySelector("#page")
        this.dis_numberOfMovies = document.querySelector("#numberOfMovies")
        this.dis_topRatedName = document.querySelector("#topRatedName")
        this.dis_topRatedRating = document.querySelector("#topRatedRating")
    }

    updateStatsBar(movies){
        this.movies = movies;
        // var movies = this.movies;
        console.log("updateStatsBar movies ==>", this.movies)
        this.topRatedMovie = this.movies[0];
        console.log("START TopRatedMovie ==> ", this.topRatedMovie);
        this.numberOfMovies = this.movies.length;

        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].vote_average >= this.topRatedMovie.vote_average) {
                this.topRatedMovie = this.movies[i];
            };
        };
        console.log("END TopRatedMovie ==> ", this.topRatedMovie);
    };

    render(){
        this.dis_topRatedName.innerText = this.topRatedMovie.title;
        this.dis_topRatedRating.innerText = this.topRatedMovie.vote_average;
        this.dis_page.innerText = this.currentPage;
        this.dis_numberOfMovies.innerText = this.movies.length;
    }
}