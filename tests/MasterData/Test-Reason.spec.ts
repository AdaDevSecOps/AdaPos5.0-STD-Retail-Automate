import { test, expect } from '@playwright/test';

test('ทดสอบเพิ่มข้อมูลเหตุผล', async ({ page }) => {
  test.slow();
  await page.goto('http://147.50.172.36:1001/AdaStoreBackSTD/login');
  await page.getByPlaceholder('ชื่อผู้ใช้').click();
  await page.getByPlaceholder('ชื่อผู้ใช้').click();
  await page.getByPlaceholder('ชื่อผู้ใช้').fill('0891234567');
  await page.getByPlaceholder('ชื่อผู้ใช้').press('Tab');
  await page.getByPlaceholder('รหัสผ่าน').fill('12345678');
  await page.getByPlaceholder('รหัสผ่าน').press('Enter');
  await page.waitForLoadState('networkidle');
  const Comname = page.locator("#spnCompanyName"); //01
  await Comname.waitFor({ state: "visible" });
  await page.getByTitle('ข้อมูลหลัก').click();
  await page.getByRole('link', { name: ' ข้อมูลระบบ' }).click();
  await page.locator('a').filter({ hasText: 'เหตุผล' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('combobox', { name: 'การยกเลิกรายการสินค้า' }).click();
  await page.locator('#ofmAddReason div').filter({ hasText: '* กลุ่มเหตุผล การยกเลิกรายการสินค้าการยกเลิกบิลขายการคืนสินค้าการรับเข้า/เบิกออก' }).nth(1).click();
  await page.getByPlaceholder('ชื่อเหตุผล').click();
  await page.getByPlaceholder('ชื่อเหตุผล').fill('โอนสินค้าผิด');
  await page.getByRole('button', { name: 'บันทึก' }).click();
});





test('ทดสอบเพิ่มข้อมูลเหตุผล_แก้ไขข้อมูล', async ({ page }) => {
  test.slow();
await page.goto('http://147.50.172.36:1001/AdaStoreBackSTD/login');
await page.getByPlaceholder('ชื่อผู้ใช้').click();
await page.getByPlaceholder('ชื่อผู้ใช้').fill('0891234567');
await page.getByPlaceholder('ชื่อผู้ใช้').press('Tab');
await page.getByPlaceholder('รหัสผ่าน').fill('12345678');
await page.getByPlaceholder('รหัสผ่าน').press('Enter');
await page.waitForLoadState('networkidle');
const Comname = page.locator("#spnCompanyName"); //01
await Comname.waitFor({ state: "visible" });
await page.getByTitle('ข้อมูลหลัก').click();
await page.getByRole('link', { name: ' ข้อมูลระบบ' }).click();
await page.locator('a').filter({ hasText: 'เหตุผล' }).click();
await page.getByRole('button', { name: '+' }).click();
await page.getByPlaceholder('ชื่อเหตุผล').click();
await page.getByPlaceholder('ชื่อเหตุผล').fill('ยกเลิกราคา');
await page.getByRole('button', { name: 'บันทึก' }).click();
await page.locator('#oliRsnTitle').click();
await page.locator('#otrReason0').getByRole('img', { name: 'แก้ไข' }).click();
await page.getByPlaceholder('ชื่อเหตุผล').click();
await page.getByPlaceholder('ชื่อเหตุผล').fill('ยกเลิกราคาใหม่');
await page.getByRole('button', { name: 'บันทึก' }).click();
});

