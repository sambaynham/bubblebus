import {ListenerDefinition} from "../types/ListenerDefinition";

export default class BubbleBus {

    private listeners: ListenerDefinition[];

    constructor(private wrapper: HTMLBodyElement) {
        this.listeners = [];
    }

    addListener(element: HTMLElement, listensFor: string[]): void {
        this.listeners.push({
            element: element,
            listensFor: listensFor
        });

        listensFor.forEach((eventName) => {
            this.wrapper.addEventListener(eventName, (event: CustomEvent) => {
                if (event.detail.hasPropogated !== true) {
                    this.propagateEvent(event);
                }
            });
        });
    }

    propagateEvent(event: CustomEvent): void {

        let listenersToCall = this.listeners.filter((definition: ListenerDefinition) => {
            return definition.listensFor.includes(event.type);
        });

        listenersToCall.forEach((listenerDefinition: ListenerDefinition)=> {
            let detail = event.detail;

            detail.hasPropogated = true;
            let clonedEvent = new CustomEvent(event.type, {
                detail: detail,
                bubbles: event.bubbles
            });
            listenerDefinition.element.dispatchEvent(clonedEvent);
        });
    }
}
