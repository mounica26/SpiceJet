import {Page, Locator} from '@playwright/test'

export class HomePage{

    page:Page

    constructor(page:Page)
    {
        this.page = page
    }

   async navigate(){

            await this.page.goto("https://spicejet.com/")

    }

    async selectFrom(city:string)
    {
        await this.page.getByTestId("to-testID-origin").getByRole('textbox').click();
        await this. page.getByTestId('to-testID-origin').getByRole('textbox').fill(city);
          await this.page.getByText(city,{exact:true}).click();


    }

     async selectTo(city:string)
    {
        await this.page.getByTestId("to-testID-destination").getByRole('textbox').click();
  await this.page.getByTestId('to-testID-destination').getByRole('textbox').fill(city);
            await this.page.getByText(city,{exact:true}).click();


    }

    async selectDepartureDate(day:string)
    {
            await this.page.getByTestId('undefined-calendar-picker') 
            await this.page.getByTestId(`undefined-calendar-day-${day}`).first().click()
    }

    async searchFlight()
    {
          await this.page.getByTestId('home-page-flight-cta').click();
          await this.page.waitForTimeout(6000)

    }
    async capturescreenshot()
    {
        await this.page.screenshot({path:'./Screenshots/HomePage.png',fullPage:true })

    }
}
