import '../resources/app.scss';
import BubbleBus from "./lib/classes/BubbleBus";

document.addEventListener('DOMContentLoaded', () => {
   const bubbleBus = new BubbleBus(document.querySelector('body'));
   const responder: HTMLElement = document.getElementById('responder');
   const button: HTMLElement = document.getElementById('button');

   button.addEventListener('click', () => {
      const event = new CustomEvent(
          'customEvent',
          {
             detail: {
                 'message': 'Hi-diddly-ho, Neighbourino'
             },
             bubbles: true,
          }
      );
      button.dispatchEvent(event);
   });

   responder.addEventListener('customEvent', function () {
        this.innerHTML = 'I got the message';
   });
   bubbleBus.addListener(responder, ['customEvent']);
});