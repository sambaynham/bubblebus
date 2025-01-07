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
            this.body.addEventListener(eventName, (e) => {
                this.propagateEvent(e);
            });
        });
    }

    propagateEvent(event: Event): void {
        let listenersToCall = this.listeners.filter((definition: ListenerDefinition) => {
            return definition.listensFor.includes(event.type);
        });

        listenersToCall.forEach((listenerDefinition: ListenerDefinition)=> {
            listenerDefinition.element.dispatchEvent(event);
        });

    }
}
