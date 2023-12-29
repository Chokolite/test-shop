import {loggedUserFixture} from "../fixtures/base";
import {expect} from "@playwright/test";
import {Constants} from "../fixtures/constants/constants";

loggedUserFixture.beforeEach('Open shop page', async ({app}) => {
    await app.shop.open()
})
loggedUserFixture('Buying product', async ({app}) => {
    await app.shop.openProduct(Constants.CHERRY_TOMATOES)
    await app.product.addToBag()
    await app.miniCart.acceptOrder()
    await app.order.expectSuccessOrder()
})

loggedUserFixture('Buying more than one product', async ({app}) => {
    const QUANTITY = 3;
    await app.shop.openProduct(Constants.CHERRY_TOMATOES)
    await app.product.inputQuantityNumber(QUANTITY)
    await app.product.addToBag()
    await app.miniCart.expectQuantity(QUANTITY)
    await app.miniCart.acceptOrder()
    await app.order.expectSuccessOrder()
})

loggedUserFixture('Expected product to be out of stock', async ({app}) => {
    await app.shop.openProduct(Constants.MARINATED_SWEET_PEPPER)
    expect(await app.product.inStock()).toBeFalsy()
    expect(await app.product.isAddToCartDisabled()).toBeTruthy()
})

loggedUserFixture('Expected item to be in stock', async ({app}) => {
    await app.shop.openProduct(Constants.CHERRY_TOMATOES)
    expect(await app.product.inStock()).toBeTruthy()
    expect(await app.product.isAddToCartDisabled()).toBeFalsy()
})

loggedUserFixture('Delete product from mini cart', async ({app}) => {
    await app.shop.openProduct(Constants.CHERRY_TOMATOES)
    await app.product.addToBag()
    await app.miniCart.removeFirstProduct()
    expect(await app.miniCart.isMiniCartEmpty()).toBeTruthy()
})

loggedUserFixture('Clear cart', async ({app}) => {
    await app.shop.openProduct(Constants.CHERRY_TOMATOES)
    await app.product.addToBag()
    await app.shop.open()
    await app.shop.openProduct(Constants.MARINATED_CUCUMBERS_NEZHIN_STYLE)
    await app.product.addToBag()
    await app.miniCart.clearCart()
    expect(await app.miniCart.isMiniCartEmpty()).toBeTruthy()
})