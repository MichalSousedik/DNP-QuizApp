import { Question } from "./question";

export class Quiz {

    id: number;
    name: string;
    questionsNumber: number;
    createdBy: string;
    date: Date;
    questions: Question[];

    constructor(){
        this.questions = [];
    }


}