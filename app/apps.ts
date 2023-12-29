import {PageHolder} from "./abstractClass";
import {Home} from "./home";
import {Login} from "./login";
import {Signup} from "./signup";
import {Dashboard} from "./dashboard";
import {Order} from "./order";
import {Product} from "./product";
import {Shop} from "./shop";
import {MiniCart} from "./miniCart";

export class Apps extends PageHolder {
    public home = new Home(this.page)
    public login = new Login(this.page)
    public signup = new Signup(this.page)
    public dashboard = new Dashboard(this.page)
    public order = new Order(this.page)
    public product = new Product(this.page)
    public shop = new Shop(this.page)
    public miniCart = new MiniCart(this.page)
}