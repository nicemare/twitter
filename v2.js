const puppeteer = require('puppeteer')
//const puppeteer = require('puppeteer-extra')
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
//puppeteer.use(AdblockerPlugin())
const fs = require('fs');
// var randomize = require('randomatic');
const randomName = require('random-name');
const { devices } = puppeteer;
const iPhoneX = devices["iPhone X"];

(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    args: ['defaultViewport: 1400,900','--window-size=400,825','--incognito','--no-default-browser-check','--disable-site-isolation-trials','--no-experiments','--ignore-gpu-blacklist','--ignore-certificate-errors','--ignore-certificate-errors-spki-list','--disable-gpu','--disable-extensions','--disable-default-apps','--enable-features=NetworkService','--disable-setuid-sandbox','--no-sandbox','--disable-webgl','--disable-threaded-animation','--disable-threaded-scrolling','--disable-in-process-stack-traces','--disable-histogram-customizer','--disable-gl-extensions','--disable-composited-antialiasing','--disable-canvas-aa','--disable-3d-apis','--disable-accelerated-2d-canvas','--disable-accelerated-jpeg-decoding','--disable-accelerated-mjpeg-decode','--disable-app-list-dismiss-on-blur','--disable-accelerated-video-decode']
});
  const pageList = await browser.pages();   
  const context = await browser.createIncognitoBrowserContext();  
  const page = await context.newPage();
 
  let firstName = randomName.first().toString()
      let lastName = randomName.last().toString()
      let numbers = Math.floor(Math.random() * 1000);
      let userName = randomName.first().toString() + randomName.last().toString() + numbers 
      const passWord = "Wallif404,"

  const ali2 = `https://generator.email/`;
  await page.emulate(iPhoneX);
  await page.goto(`${ali2}`,{waitUntil : 'networkidle2'});
  await page.click('#copbtn')
  const mail = await page.$eval('#email_ch_text', element => element.textContent)
    console.log('====================================')
  console.log('[*] Email: '+mail)
   
  // console.log('Copy email: sukses ! ')
  //   console.log('====================================')
  const page2 = await context.newPage();
  const twit = `https://mobile.twitter.com/i/flow/signup`;
  await page2.emulate(iPhoneX);
  await page2.goto(`${twit}`,{timeout:100000});
  // console.log('Membuka Twitter : Sukses ')
  //   console.log('====================================')
 // bukak web twitter
 var usr= Math.random().toString(36).slice(-8);
  await page2.waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-18t94o4.css-901oao.r-k200y.r-1n1174f.r-1qd0xha.r-1b43r93.r-16dba41.r-hjklzo.r-19h5ruw.r-bcqeeo.r-qvutc0 > span',{timeout:100000})
  await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-18t94o4.css-901oao.r-k200y.r-1n1174f.r-1qd0xha.r-1b43r93.r-16dba41.r-hjklzo.r-19h5ruw.r-bcqeeo.r-qvutc0 > span',{visible:true, timeout:100000, delay:1000})
  await page2.type('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div:nth-child(2) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-19h5ruw.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-1b3ntt7 > div > input',firstName,{delay:1})

   // paste email generator
const input2= await page2.$('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div:nth-child(3) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-19h5ruw.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-1b3ntt7 > div > input')
await input2.focus()
await page2.keyboard.down('ControlLeft');
await page2.keyboard.press('KeyV');
await page2.keyboard.up('ControlLeft');

await page2.type('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-1dbjc4n.r-6ity3w > div.css-1dbjc4n > div > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-19h5ruw.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-1b3ntt7 > div > input','13101990',{delay:100})
 // console.log('Input data : Sukses ')
 //   console.log('====================================')
await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-1iud8zs.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1ozfoo7.r-1vsu8ta.r-18qmn74 > div > div > span > span',{delay:1000})
 await page2.waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-1iud8zs.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1ozfoo7.r-1vsu8ta.r-18qmn74 > div > div > span > span',{visible:true, timeout:10000})
 await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-1iud8zs.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1ozfoo7.r-1vsu8ta.r-18qmn74 > div > div > span > span', {delay:1000})

 await page2.waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div > div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-19h5ruw.r-dfe81l.r-1aw8jpo.r-1ny4l3l.r-15bsvpr.r-o7ynqc.r-6416eg.r-lrvibr > div',{visible:true, timeout:10000})
 await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div > div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-19h5ruw.r-dfe81l.r-1aw8jpo.r-1ny4l3l.r-15bsvpr.r-o7ynqc.r-6416eg.r-lrvibr > div')

  console.log('Meminta otp : Sukses ')
    console.log('====================================')
// get otp
 console.log('Mengambil otp dari email ..')
//ganti page 1
await page.bringToFront();
    blockingWait(1);
    
await page.click('#refresh > button > span', {delay:1000})

  console.log('waiting ..')
 
  await page.waitForSelector('#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(10) > td')
 // const otp = await page.$eval('#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(10) > td',element=>element.textContent)
   
 const otp = await page.evaluate(() =>
  document.querySelector("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(10) > td").textContent.trim()
 );

 console.log('[*] OTP: '+otp)

 // ganti page 2
 await page2.bringToFront();
     blockingWait(1);
     function blockingWait(seconds) {
       //simple blocking technique (wait...)
      var waitTill = new Date(new Date().getTime() + seconds * 1000);
       while(waitTill > new Date()){}
  
   }
// // input otp ke twitter
await page2.type('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div > div.css-1dbjc4n.r-mk0yit.r-kmv1fd > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-19h5ruw.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-1b3ntt7 > div > input',otp)
await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-1iud8zs.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1ozfoo7.r-1vsu8ta.r-18qmn74 > div > div > span > span', {delay:200})

//set password
var pass = Math.random().toString(36).slice(-10);
console.log('[*] Username:',userName)

console.log('[*] Set password :',passWord)
console.log('====================================')
 await page2.waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-1dbjc4n.r-mk0yit > div > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-19h5ruw.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-1b3ntt7 > div > input')
 await page2.type('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-1dbjc4n.r-mk0yit > div > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-19h5ruw.r-1udh08x.r-xd6kpl.r-1pn2ns4.r-1b3ntt7 > div > input',passWord)

 //next
 await page2.waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-1iud8zs.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1ozfoo7.r-1vsu8ta.r-18qmn74 > div > div > span > span')
 await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-1iud8zs.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1ozfoo7.r-1vsu8ta.r-18qmn74 > div > div > span > span',{delay:5000})


 fs.appendFileSync("akun.txt", `=====\n email : ${mail}\n password : ${passWord}\n=====`);
console.log('Sukses ! Email dan password telah disimpan')
// await browser.close()
})();
