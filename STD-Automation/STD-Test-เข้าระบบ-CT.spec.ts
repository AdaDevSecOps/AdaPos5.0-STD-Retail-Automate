import { test, expect, chromium } from '@playwright/test';
import { Client } from 'pg';


test('test', async ({ page }) => {
  const browser = await chromium.launch();
  await chromium.launch({ headless: false, slowMo: 1000 })
  const delay = 5000
  const UserTest = '009' // 
  const PassTest = '12345678' //
  const ADName = 'Baimiang Healthy Shop' //
  test.setTimeout(5000000);
  await test.slow();
  // Get screen dimensions manually
  const { width, height } = {
    width: 1280,
    height: 700,
  };
  // Set viewport size to screen dimensions
  await page.setViewportSize({ width, height });
  await page.goto('http://147.50.172.36:1001/AdaStoreBackSTD-Test/login');
  await page.getByRole('link', { name: 'English' }).click();
  await page.getByRole('link', { name: 'ภาษาไทย' }).click();
  await page.getByPlaceholder('ชื่อผู้ใช้').fill(UserTest);
  await page.getByPlaceholder('ชื่อผู้ใช้').press('Tab');
  //await page.waitForTimeout(3000);
  await page.getByPlaceholder('รหัสผ่าน').fill(PassTest);
  await page.getByPlaceholder('รหัสผ่าน').press('Tab');
  await page.getByRole('link', { name: 'ภาษาไทย' }).press('Tab');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).press('Enter');
  await page.waitForLoadState('networkidle');
  const Comname = page.locator("#spnCompanyName");  //01
  await Comname.waitFor({ state: "visible" });        //02 =01>02 รอจนกว่าจะแสดง Element
  await expect(page.locator("#spnCompanyName")).toHaveText(ADName);  //VerifyText
  await page.waitForTimeout(3000);
  //await page.pause();



  try {
    const FindText = await page.$('#ospUsrOrPwNotCorrect');
    await page.waitForTimeout(delay);
    const expectedText = 'ไม่พบข้อมูลผู้ใช้ในระบบ';
    if (FindText) {
      const text = await FindText.textContent();
      if (text === expectedText) {
        console.log('\x1b[32m%s\x1b[0m', 'PASS', text, '=', expectedText)
      }
      else {
        console.log('\x1b[32m%s\x1b[0m', 'FAIL', text, '<>', expectedText)
      }
    }
    await page.pause();
  } catch (error) {
    console.error('Error :', error);
  } finally {
    console.log('Tested');
  }
});
