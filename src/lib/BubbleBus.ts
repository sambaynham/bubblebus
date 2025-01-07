type ListenerDefinition = {
    element: HTMLElement;
    listensFor: string[];
}

export default class BubbleBus {
    private listeners: ListenerDefinition[];

    constructor(private body: HTMLBodyElement) {
        this.listeners = [];
    }

    addListener(element: HTMLElement, listensFor: string[]): void {
        let definition: ListenerDefinition = {
            element: element,
            listensFor: listensFor
        }
        this.listeners.push(definition);

        listensFor.forEach((eventName) => {
            this.body.addEventListener(eventName, this.handleEvent);
        });
    }

    handleEvent(event: Event): void {

    }
}
