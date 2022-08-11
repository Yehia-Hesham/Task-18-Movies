export class StatsBar{

    constructor(eventsMediator){
        this.eventsMediator = eventsMediator;

        this.currentPage = 1;
        this.numberOfMovies = 0;
        this.topRatedMovie = {};
        this.topRating = 0;
    }

    init(movies) {
        this.movies = movies;
        this.currentPage = 1;
        this.numberOfMovies = 1;

        // this.updateStatsBar(movies);
    }

    casheElements(){
        const dis_page = document.querySelector("#page")
        const dis_numberOfMovies = document.querySelector("#numberOfMovies")
        const dis_topRatedName = document.querySelector("#topRatedName")
        const dis_topRatedRating = document.querySelector("#topRatedRating")
    }

    updateStatsBar(){
        var movies = this.movies;
        console.log("updateStatsBar movies ==>", movies)
        this.topRatedMovie = movies[0];
        this.numberOfMovies = movies.length;

        // console.log("First Top Rated", TopRated)
        // movies.forEach(movie => {
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].vote_average >= TopRated.vote_average) {
                this.topRatedMovie = movies[i];
            };
        };
        console.log("Top Rated Movie ==> ", topRatedMovie);
    };
    render(){

    }
}