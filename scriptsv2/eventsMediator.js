export class EventsMediator {
    constructor() {
        this.events = {};
    }

    //sub
    on(eventName, cb) {
        this.events[eventName] = this.events[eventName] ? this.events[eventName] : [];
        this.events[eventName].push(cb);
    }

    //publish
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (callbackfn) {
                callbackfn(data);
            });
        }
    }
}