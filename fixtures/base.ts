import { Page, test } from "@playwright/test";
import { Home } from '../app/home';
import { Login } from '../app/login';
import { SignUp } from '../app/signUp';
import { Dashboard } from '../app/dashboard';
import { Order } from '../app/order';
import { Product } from '../app/product';
import { Shop } from '../app/shop';
import { MiniCart } from '../app/miniCart';

interface Pages {
    home: Home;
    login: Login;
    signup: SignUp;
    dashboard: Dashboard;
    order: Order;
    product: Product;
    shop: Shop;
    miniCart: MiniCart;
}

export const baseFixture = test.extend<Pages>({
    home: async ({ page }: { page: Page; }, use: (home: Home) => Promise<void>) => {
        await use(new Home(page));
    },
    login: async ({ page }: { page: Page; }, use: (login: Login) => Promise<void>) => {
        await use(new Login(page));
    },
    signup: async ({ page }: { page: Page; }, use: (signup: SignUp) => Promise<void>) => {
        await use(new SignUp(page));
    },
    dashboard: async ({ page }: { page: Page; }, use: (dashboard: Dashboard) => Promise<void>) => {
        await use(new Dashboard(page));
    },
    order: async ({ page }: { page: Page; }, use: (order: Order) => Promise<void>) => {
        await use(new Order(page));
    },
    product: async ({ page }: { page: Page; }, use: (product: Product) => Promise<void>) => {
        await use(new Product(page));
    },
    shop: async ({ page }: { page: Page; }, use: (shop: Shop) => Promise<void>) => {
        await use(new Shop(page));
    },
    miniCart: async ({ page }: { page: Page; }, use: (miniCart: MiniCart) => Promise<void>) => {
        await use(new MiniCart(page));
    },
});
