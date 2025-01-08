import '../resources/app.scss';
import BubbleBus from "./lib/classes/BubbleBus";

document.addEventListener('DOMContentLoaded', (e) => {

   const body = document.querySelector('body');
   const bubbleBus = new BubbleBus(body);
   const responder = document.getElementById('responder');
   const button: HTMLElement = document.getElementById('button');

   button.addEventListener('click', (e) => {
      const event = new CustomEvent(
          'customEvent',
          {
             detail: {
                'text': 'yo',
             },
             bubbles: true,
          }
      );
      button.dispatchEvent(event);
   });

   responder.addEventListener('customEvent', function (event: CustomEvent) {

       console.log(event);
        this.innerHTML = 'I got the message';
   });
   bubbleBus.addListener(responder, ['customEvent']);
});