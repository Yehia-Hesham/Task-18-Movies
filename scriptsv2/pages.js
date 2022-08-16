export class Pages {

    constructor() {
        this.currentPage = 1;
    }
    init(eventsMediator) {
        this.eventsMediator = eventsMediator;
        
    }

    casheElements() {
        this.btn_pervious = document.querySelector("#previous")
        this.btn_next = document.querySelector("#next")
    }

    bindEvents(app) {
        var self = this
        this.btn_next.addEventListener("click", function () {
            console.log("This: ",app)
            app.pages.incrementPage();
            app.eventsMediator.emit("NextPage",app);
        });
        this.btn_pervious.addEventListener("click", function() {
            app.pages.decrementPage();
            app.eventsMediator.emit("PreviousPage",app);
        });
    };

    incrementPage() {
        //if pages dont pass max
        this.currentPage += 1;
    };

    decrementPage() {
        if (this.currentPage > 1){
            this.currentPage -= 1;
        }
        else{
            console.log("Current Page is already minimum (1)")
        }
    };

};