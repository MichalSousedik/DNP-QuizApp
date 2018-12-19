import { Question } from "./question";

export class Solution {

    quizName: string;
    correct: number;
    questions: Question[];

    constructor(){
        this.questions = [];
    }

}