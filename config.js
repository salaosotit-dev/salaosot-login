/*
 * ตั้งค่าหน้า Login (แก้ 2 บรรทัดนี้ แล้ว commit ขึ้น GitHub)
 * ค่าทั้งสองไม่ใช่ความลับ — Client ID ของ Google ออกแบบมาให้อยู่ในหน้าเว็บได้ และ appUrl คือลิงก์ระบบที่ผู้ใช้เปิดอยู่แล้ว
 */
window.LOGIN_CONFIG = {
  // OAuth Client ID จาก Google Cloud Console (ลงท้ายด้วย .apps.googleusercontent.com)
  clientId: 'ใส่-CLIENT-ID.apps.googleusercontent.com',
  // ลิงก์เว็บแอป Apps Script (Deploy → Manage deployments → Web app URL ที่ลงท้าย /exec)
  appUrl: 'https://script.google.com/macros/s/ใส่-DEPLOYMENT-ID/exec'
};
