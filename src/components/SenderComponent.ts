export class SenderComponent extends HTMLDivElement {

    private messageField: HTMLInputElement;

    private submitButton: HTMLButtonElement;
    constructor() {
        super();
        this.messageField = this.querySelector('input#message');
        this.submitButton = this.querySelector('.button');


        console.log(this.messageField);
        console.log(this.submitButton);
    }

    connectedCallback() {
        console.log("O");
    }
}

