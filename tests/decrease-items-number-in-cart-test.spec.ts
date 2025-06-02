import { test, expect } from '@playwright/test';
import { MenuPage } from '@pages/menu-page';
import { CartPage } from '@pages/cart-page';
import { ItemsInCartData as Data } from '@tests/data/decrease-items-in-cart-data.cy';

test.describe('Decrease Items in Cart',() => {
    test('Verify that user can decrease the number of items in the Cart',async({page}) =>{
        const menuPage = new MenuPage(page);
        const cartPage = new CartPage(page);

        await menuPage.visit();
        await menuPage.clickOnDrink(Data.stepTwoTestData);
        await menuPage.clickOnDrink(Data.stepTwoTestData);

        await menuPage.goToCartPage();
        
        await cartPage.clickMinusButton();

        let dataInCart = await cartPage.getCartData();
        expect(dataInCart).toBe(Data.stepSixTestData);

        let totalPrice = await cartPage.getDataInCartTotalPrice();
        expect(totalPrice).toBe(Data.stepSevenTestData);

        let totalButtonPrice = await cartPage.totalOnCartPage();
        expect(totalButtonPrice).toBe(Data.stepEightTestData);

        let cartAmountData = await cartPage.getCartAmount();
        expect(cartAmountData).toBe(Data.stepNineTestData);

        await cartPage.clickMinusButton();

        let noCoffeeGoAddSomeMessage = await cartPage.getNoCoffeeMessage();
        expect(noCoffeeGoAddSomeMessage).toBe(Data.stepTenTestData);

    });
});
