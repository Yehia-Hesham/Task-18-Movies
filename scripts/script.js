const dis_page = document.querySelector("#page")
const dis_numberOfMovies = document.querySelector("#numberOfMovies")
const dis_topRatedName = document.querySelector("#topRatedName")
const dis_topRatedRating = document.querySelector("#topRatedRating")
const dis_moviesList = document.querySelector("#moviesList")
const btn_pervious = document.querySelector("#previous")
const btn_next = document.querySelector("#next")
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=54dd8d9cb83969c4d9e360c3dde9c602&language=en&page='


let currentPage = 0;

// let movies = movie.getMovies();

// first call for movies with page = 1 (on init)

//update movies
//render movies

// update stats
// render stats

var eventsMediator = {
    events: {},
    on: function (eventName, callbackfn) {
        this.events[eventName] = this.events[eventName] ?
            this.events[eventName] :
            [];
        this.events[eventName].push(callbackfn);
    },
    emit: function (eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (callBackfn) {
                callBackfn(data);
            });
        }
    },
};

eventsMediator.on('updateTopRatedMovie', function (items_list) {
    dis_topRatedName.innerText = items_list.topRated.title;
    dis_topRatedRating.innerText = items_list.topRated.vote_average;
    dis_page.innerText = currentPage;
    dis_numberOfMovies.innerText = items_list.movies.length;
    // console.log('Number of movies Length', items_list.)

});


class movie {
    
    constructor() {
        
    };
    async getMovies() {
        const response = await fetch(url + currentPage);
        const data = await response.json();
        console.log("adta", data.results)
        let movies = data.results;

        let topRated = movies[0];
        dis_numberOfMovies.innerText = movies.length;

        movies = movies.map(item => {
            const title = item.title;
            const poster = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
            const overview = item.overview;
            const vote_average = item.vote_average;
            const count = item.vote_count;

            if (vote_average >= topRated.vote_average) {
                topRated = item;
            }
            return {
                title,
                poster,
                overview,
                vote_average,
                count
            };
        });
        eventsMediator.emit("updateTopRatedMovie", {topRated,movies});
        console.log("inside movies", movies);
        return movies;
    };

};

class stats {
    constructor() {

    };
    getTopRated(movies) {
        let TopRated = movies[0];
        // console.log("First Top Rated", TopRated)
        // movies.forEach(movie => {
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].vote_average >= TopRated.vote_average) {
                TopRated = movies[i];
            };
        };
        console.log("Top Rated inside", TopRated);
        return TopRated;
    }
};

const test = new movie();
const test2 = new stats();

btn_pervious.addEventListener("click", function () {
    currentPage -= 1;
    test.getMovies().then(function (result) {
        var template = ``;
        result.forEach(element => {
            console.log("HERE ", element.poster)
            template += `
           <li>
            <div>        
                <div class="card text-center my_cards">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src= ${element.poster} onerror="src='https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png'" class="img-fluid" />
                        <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                        </a>
                    </div>
                
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.vote_average}</p>
                    </div>
                    </div>
                </div>
            </li>`
        });
        dis_moviesList.innerHTML = template;

    });
    console.log("res", result);
});

// result = test.getMovies().then(function (result){
//     //code
//     return result
// });
// console.log("res" , result);


btn_next.addEventListener("click", function () {
    currentPage += 1;
    test.getMovies().then(function (result) {
        var template = ``;
        result.forEach(element => {
            template += `
           <li>
            <div>        
                <div class="card text-center my_cards">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src= ${element.poster} onerror="src='https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png'" class="img-fluid" />
                        <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                        </a>
                    </div>
                
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.vote_average}</p>
                    </div>
                    </div>
                </div>
            </li>`
        });
        dis_moviesList.innerHTML = template;

    });
    console.log("res", result);
});

var app = {
    get_movies: async function () {
        return await test.getMovies();
        console.log("oga", my_movies)
        return my_movies; //.then(tyest => test2.getTopRated(tyest))
    },


    get_rating: async function (my_movies) {
        const top_rated = test2.getTopRated(my_movies);
        return top_rated;
    }
    // console.log("asfdbbsasdvbasdf", my_movies);
    // console.log(top_rated)
};


async function teeeeee() {
    console.log("comment my", await app.get_movies());
}
teeeeee();

// my_movies_list = app.get_movies();
// top_rated_movie = test2.getTopRated(my_movies_list);

// my_movies = test.getMovies().then(() => {
//     console.log("asdasf", my_movies)
//     my_topRated = test2.getTopRated(my_movies);

// console.log("My Movies")
// console.log(my_movies_list)
// console.log("My Top Rated")
// console.log(top_rated_movie)
// // });
var my2_MOVIES = new movies_componetne()
// return list
my2_MOVIES.init();

var statsObj = new statsComponent()
statsObj.init()