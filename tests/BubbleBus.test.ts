import BubbleBus from "../src/lib/classes/BubbleBus";


describe('truthy', (): void => {
    test('setListeners', () : void => {

        const spyFunc = jest.fn();

        let listener = document.createElement('button');
        let wrapper: HTMLElement = document.createElement('div')
        let bus: BubbleBus = new BubbleBus(wrapper);

        bus.addListener(listener, ['testEvent']);


    });
});