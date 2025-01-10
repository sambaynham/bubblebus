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
                if (event.detail.hasPropagated !== true) {
                    this.propagateEvent(event);
                }
            });
        });
    }

    private propagateEvent(event: CustomEvent): void {

        const listenersToCall: ListenerDefinition[] = this.listeners.filter((definition: ListenerDefinition) => {
            return definition.listensFor.includes(event.type);
        });

        listenersToCall.forEach((listenerDefinition: ListenerDefinition)=> {
            let detail: unknown = event.detail;
            if (typeof detail !== 'object') {
                detail = {
                    originalDetail: detail
                };
            }
            detail = detail as Object;
            detail.hasPropagated = true;

            listenerDefinition.element.dispatchEvent(
                new CustomEvent(
                    event.type, {
                        detail: detail,
                        bubbles: event.bubbles,
                        composed: event.composed,
                        cancelable: event.cancelable
                    }
                )
            );
        });
    }
}
