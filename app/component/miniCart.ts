import {Component} from "../abstractClass";

export class MiniCart extends Component {
    public placeOrderButton = this.page.getByRole('button', {name: "Place Order"})
    expectLoaded(message?: string): Promise<void> {
        return Promise.resolve(undefined);
    }

}