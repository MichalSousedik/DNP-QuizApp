import { Option } from './option';

export class Question {

    id: number;
    text: string;
    options: Option[];
    selectedOptionId: number;


    constructor() {
        this.options = [];
    }

}