import '../resources/app.scss';
import BubbleBus from "./lib/classes/BubbleBus";
import {SenderComponent} from "./components/SenderComponent";

document.addEventListener('DOMContentLoaded', () => {
    let wrapper = document.getElementById('wrapper');


    const bubbleBus = new BubbleBus(wrapper);
    customElements.define('my-sender-component', SenderComponent, { extends: 'div' });


    //bubbleBus.addListener(responder, ['customEvent']);
});



