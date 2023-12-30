import {expect} from "@playwright/test";
import {Constants} from "../fixtures/constants/constants";
import { loggedUserFixture } from '../fixtures/loggin.fixture';
import {StockStatus} from "../model/stockStatus";

loggedUserFixture.beforeEach('Open shop page', async ({loginAsCommonUser, shop}) => {
    await loginAsCommonUser()
    await shop.open()
})
loggedUserFixture('Buying product', async ({shop, product, miniCart, order
}) => {
    await shop.openProduct(Constants.CHERRY_TOMATOES)
    await product.addToBag()
    await miniCart.acceptOrder()
    await order.expectSuccessOrder()
})

loggedUserFixture('Buying more than one product', async ({shop, product, miniCart, order}) => {
    const QUANTITY = 3;
    await shop.openProduct(Constants.CHERRY_TOMATOES)
    await product.inputQuantityNumber(QUANTITY)
    await product.addToBag()
    await miniCart.expectQuantity(QUANTITY)
    await miniCart.acceptOrder()
    await order.expectSuccessOrder()
})

loggedUserFixture('Expected product to be out of stock', async ({shop, product}) => {
    await shop.openProduct(Constants.MARINATED_SWEET_PEPPER)
    expect(await product.getStockStatus()).toEqual(StockStatus.OutOfStock)
    await expect(await product.getAddToBagButtonStatus()).toBeDisabled()
})

loggedUserFixture('Expected item to be in stock', async ({shop, product}) => {
    await shop.openProduct(Constants.CHERRY_TOMATOES)
    expect(await product.getStockStatus()).toEqual(StockStatus.InStock)
    await expect(await product.getAddToBagButtonStatus()).toBeEnabled()
})

loggedUserFixture('Delete one product from mini cart', async ({shop, product, miniCart}) => {
    await shop.openProduct(Constants.CHERRY_TOMATOES)
    await product.addToBag()
    await miniCart.removeProductByIndex(0)
    await miniCart.isMiniCartEmpty()
})

loggedUserFixture('Clear cart', async ({shop, product, miniCart}) => {
    await shop.openProduct(Constants.CHERRY_TOMATOES)
    await product.addToBag()
    await shop.open()
    await shop.openProduct(Constants.MARINATED_CUCUMBERS_NEZHIN_STYLE)
    await product.addToBag()
    await miniCart.clearCart()
    await miniCart.isMiniCartEmpty()
})