import BubbleBus from "../src/lib/classes/BubbleBus";
import {expect, test} from '@jest/globals';

describe('basic setup', (): void => {
    test('addListeners', () : void => {

        const listener: HTMLButtonElement = document.createElement('button');
        const wrapper: HTMLElement = document.createElement('div')
        const bus: BubbleBus = new BubbleBus(wrapper);

        bus.addListener(listener, ['testEvent']);

        const expectedResult = [
            {
                element: listener,
                listensFor: [
                    'testEvent'
                ]
            }
        ]
        expect(bus.getListeners()).toStrictEqual(expectedResult);
    });
});

describe('test_bubbling', (): void => {
    test('bubble', () : void => {

        const listener: HTMLButtonElement = document.createElement('button');
        const wrapper: HTMLElement = document.createElement('div')
        const bus: BubbleBus = new BubbleBus(wrapper);

        let caught: boolean = false;
        let message: string = '';
        listener.addEventListener('testEvent', (e: CustomEvent) => {
            message = e.detail.message;
            caught = true;
        });

        bus.addListener(listener, ['testEvent']);
        wrapper.dispatchEvent(new CustomEvent('testEvent', {
            detail: {
                'message': 'Hi-diddly-ho, Neighbourino'
            },
            bubbles: true,
        }));

        expect(message).toStrictEqual('Hi-diddly-ho, Neighbourino')
        expect(caught).toStrictEqual(true);
    });
});