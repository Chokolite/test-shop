import {loggedUserFixture} from "../fixtures/base";

loggedUserFixture('Buying item', async ({app}) => {
    await app.shop.open()
    await app.shop.openItem("CHERRY TOMATOES")
    await app.product.addToBagButton.click()
    await app.order.acceptOrder()
    await app.order.expectSuccessOrder()
})