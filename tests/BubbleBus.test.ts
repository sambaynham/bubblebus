import BubbleBus from "../src/lib/classes/BubbleBus";


describe('truthy', (): void => {
    test('setListeners', () : void => {

        let listener: HTMLButtonElement = document.createElement('button');
        let wrapper: HTMLElement = document.createElement('div')
        let bus: BubbleBus = new BubbleBus(wrapper);

        bus.addListener(listener, ['testEvent']);

        let expectedResult = [
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