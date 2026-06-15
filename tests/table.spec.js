import { test, expect } from '@playwright/test';
test('table practice', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    //to capture the table
    const table = page.locator('#productTable');

    //to capture the columns and then column count
    const columns = await table.locator('thead tr th');
    const columnCount = await columns.count();
    console.log('no. of columns: ', columnCount);

    //to capture the rows and then row count
    const rows = await table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log('no. of rows: ', rowCount);



    //const values = await table.locator('tbody tr').allTextContents();


    // console.log(await values.count());
    //console.log(await values.allTextContents());




    //const rowCount = await table.locator('tbody tr').count();
    //console.log('Number of rows: ' + rowCount);

})