export class Dilema {
    name:string;
    dilema:string;
    response:string;
    liked:boolean;
    constructor(options: {
        name?:string,
        dilema?:string,
        response?:string,
        liked?:boolean,
    } = {}) {
        this.name=options.name
        this.dilema=options.dilema
        this.response=options.response
        this.liked=options.liked
    }
}