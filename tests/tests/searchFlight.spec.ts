import {test,expect, chromium} from "@playwright/test"

import { Page, Browser } from "@playwright/test"
import { HomePage } from "../pages/HomePage"


test("Search Flight",async({page})=>
{

    //let browser = await chromium.launch({headless:false})
    // page = await browser.newPage()
    //await page.goto("https://spicejet.com/")
    //await page.pause();
const homePage = new HomePage(page)
await homePage.navigate()

await homePage.selectFrom("AGR")
await homePage.selectTo("BOM")
await homePage.selectDepartureDate("28")
await homePage.searchFlight()

await homePage.capturescreenshot()


})


    /*
//await page.getByTestId("round-trip-radio-button").click()
await page.getByTestId("to-testID-origin").getByRole('textbox').click();
  await page.getByTestId('to-testID-origin').getByRole('textbox').fill('del');

  await page.getByTestId("to-testID-destination").getByRole('textbox').click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').fill('mumbai');
  await page.getByText('Mumbai').click()
 // await page.getByTestId("departure-date-dropdown-label-test-id").click()
  
    await page.getByTestId('undefined-month-August-2026').getByText('27', { exact: true }).click();

  await page.locator('div').filter({ hasText: /^Select Date$/ }).first().click();
  await page.getByTestId('undefined-month-September-2026').getByText('9', { exact: true }).click();
  await page.locator('.css-1dbjc4n > div > .css-1dbjc4n.r-14lw9ot > .css-1dbjc4n.r-1awozwy > .css-1dbjc4n > svg').first().click();
await page.getByTestId("Adult-testID-plus-one-cta").click();
await page.getByTestId("Adult-testID-plus-one-cta").click();
await page.getByTestId("Infant-testID-plus-one-cta").click();
await page.locator('div:nth-child(2) > .css-1dbjc4n.r-14lw9ot > .css-1dbjc4n.r-1awozwy > .css-1dbjc4n > svg').first().click();
await page.locator('div').filter({ hasText: /^USD$/ }).first().click();

  await page.getByTestId('home-page-flight-cta').click();
  
//Modify search Flight

  await page.locator('div').filter({ hasText: /^Modify Search$/ }).nth(1).click();

 await page.locator('div:nth-child(2) > div > .css-1dbjc4n.r-1awozwy > .css-1dbjc4n.r-7o8qx1 > svg > circle').click();
  await page.getByTestId('home-page-flight-cta').click();
   await page.getByRole('img').locator('rect').click();
  await page.locator('div').filter({ hasText: /^Continue$/ }).nth(3).click();

await page.waitForTimeout(10000)
})


/*
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');
  await page.locator('div').filter({ hasText: /^To$/ }).nth(1).click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').fill('mu');
  await page.getByText('Mumbai').click();
  await page.getByTestId('round-trip-radio-button').locator('circle').click();
  await page.locator('div:nth-child(2) > .css-1dbjc4n.r-1awozwy > .css-1dbjc4n > svg').click();
  await page.getByTestId('undefined-month-September-2026').getByText('9', { exact: true }).click();
  await page.getByTestId('home-page-flight-cta').click();
  await page.locator('div').filter({ hasText: /^Modify Search$/ }).nth(1).click();
  await page.locator('div:nth-child(2) > div > .css-1dbjc4n.r-1awozwy > .css-1dbjc4n.r-7o8qx1 > svg > circle').click();
  await page.getByTestId('home-page-flight-cta').click();
  await page.getByRole('img').locator('rect').click();
  await page.locator('div').filter({ hasText: /^Continue$/ }).nth(3).click();
  await page.locator('circle').nth(2).click();
  await page.locator('.css-1dbjc4n.r-1habvwh.r-1777fci').first().click();
  await page.locator('circle').nth(5).click();
  await page.locator('div:nth-child(2) > .css-1dbjc4n.r-14lw9ot > #fare-bundle-val > .css-1dbjc4n.r-1awozwy.r-1sgu7fw > div > div > .css-1dbjc4n.r-1awozwy.r-1loqt21 > .css-1dbjc4n.r-1awozwy.r-18u37iz.r-15d164r > div > svg > circle').click();
  await page.getByText('Flight Details').nth(4).click();
  await page.getByTestId('application-id').getByText('Baggage').click();
  await page.getByText('Flight Details').nth(4).click();
  await page.getByText('Passengers', { exact: true }).click();
  await page.locator('circle').nth(3).click();
  await page.getByText('SG 802Direct').click();
  await page.locator('circle').first().click();
  await page.locator('circle').nth(5).click();
  await expect(page.locator('#onward-flight-container')).toMatchAriaSnapshot(``);
  await page.getByText('LoginSignup1Flights2Passengers3Add-ons4PaymentDELBOMDelhi to Mumbai, 25 Aug').click();
  await expect(page.getByTestId('application-id')).toMatchAriaSnapshot(``);
});
*/