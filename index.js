const puppeteer = require('puppeteer');
const fs = require('fs');
// var randomize = require('randomatic');
const { devices } = puppeteer;
const iPhoneX = devices["iPhone X"];


(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    args: ['--incognito','--no-default-browser-check','--disable-site-isolation-trials','--no-experiments','--ignore-gpu-blacklist','--ignore-certificate-errors','--ignore-certificate-errors-spki-list','--disable-gpu','--disable-extensions','--disable-default-apps','--enable-features=NetworkService','--disable-setuid-sandbox','--no-sandbox','--disable-webgl','--disable-threaded-animation','--disable-threaded-scrolling','--disable-in-process-stack-traces','--disable-histogram-customizer','--disable-gl-extensions','--disable-composited-antialiasing','--disable-canvas-aa','--disable-3d-apis','--disable-accelerated-2d-canvas','--disable-accelerated-jpeg-decoding','--disable-accelerated-mjpeg-decode','--disable-app-list-dismiss-on-blur','--disable-accelerated-video-decode']
});
  const context = await browser.createIncognitoBrowserContext();  
  const page = await context.newPage();
  const ali2 = `https://generator.email/`;
  await page.emulate(iPhoneX);
  await page.goto(`${ali2}`,{waitUntil : 'networkidle2'});
  await page.click('#copbtn')
  const mail = await page.$eval('#email_ch_text', element => element.textContent)
    console.log('====================================')
  console.log('Email: '+mail)
    console.log('====================================')
  console.log('Copy email: sukses ! ')
    console.log('====================================')
  const page2 = await context.newPage();
  const twit = `https://mobile.twitter.com/i/flow/signup`;
  await page2.emulate(iPhoneX);
  await page2.goto(`${twit}`,{waitUntil : 'networkidle2'});
  console.log('Membuka Twitter : Sukses ')
    console.log('====================================')
 // bukak web twitter
  await page2.waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-18t94o4.css-901oao.r-k200y.r-1n1174f.r-1qd0xha.r-1b43r93.r-16dba41.r-ad9z0x.r-l71dzp.r-bcqeeo.r-qvutc0 > span', {waitUntil : 'networkidle2'})
  await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-18t94o4.css-901oao.r-k200y.r-1n1174f.r-1qd0xha.r-1b43r93.r-16dba41.r-ad9z0x.r-l71dzp.r-bcqeeo.r-qvutc0 > span',{visible:true, timeout:100000, delay:1000})
  await page2.type('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div:nth-child(2) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-l71dzp.r-1udh08x.r-1inuy60.r-ou255f.r-1b9bua6 > div > input','alliftest',{delay:1})
 // paste email generator
const input2= await page2.$('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div:nth-child(3) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-l71dzp.r-1udh08x.r-1inuy60.r-ou255f.r-1b9bua6 > div > input')
await input2.focus()
await page2.keyboard.down('ControlLeft');
await page2.keyboard.press('KeyV');
await page2.keyboard.up('ControlLeft');

await page2.type('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-1dbjc4n.r-1no09lo > div.css-1dbjc4n > div > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-l71dzp.r-1udh08x.r-1inuy60.r-ou255f.r-1b9bua6 > div > input','13101990',{delay:100})
 console.log('Input data : Sukses ')
   console.log('====================================')
await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-ahm1il.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1uvorsx.r-174vidy.r-18bj3io > div > div > span > span',{delay:1000})
await page2.waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-ahm1il.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1uvorsx.r-174vidy.r-18bj3io > div > div > span > span',{visible:true, timeout:10000})
await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-ahm1il.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1uvorsx.r-174vidy.r-18bj3io > div > div > span > span', {delay:1000})
await page2.waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div > div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-l71dzp.r-dfe81l.r-1aw8jpo.r-1ny4l3l.r-ikwi4x.r-o7ynqc.r-6416eg.r-lrvibr > div',{visible:true, timeout:10000})
await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div > div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-l71dzp.r-dfe81l.r-1aw8jpo.r-1ny4l3l.r-ikwi4x.r-o7ynqc.r-6416eg.r-lrvibr > div')
 console.log('Meminta otp : Sukses ')
   console.log('====================================')
//get otp
console.log('Mengambil otp dari email ..')
  
await page.click('#refresh > button > span', {delay:1000})

 console.log('wating ..')
 
 await page.waitForSelector('#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(10) > td')
// const otp = await page.$eval('#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(10) > td',element=>element.textContent)
   
const otp = await page.evaluate(() =>
 document.querySelector("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(10) > td").textContent.trim()
);
console.log('OTP: '+otp)
// input otp ke twitter
await page2.type('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div > div.css-1dbjc4n.r-mk0yit.r-1xtiow5 > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-l71dzp.r-1udh08x.r-1inuy60.r-ou255f.r-1b9bua6 > div > input',otp)
await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-ahm1il.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1uvorsx.r-174vidy.r-18bj3io > div > div > span > span', {delay:200})

//set password
await page2.waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-1dbjc4n.r-mk0yit > div > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-l71dzp.r-1udh08x.r-1inuy60.r-ou255f.r-1b9bua6 > div > input')
await page2.type('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-16y2uox.r-1jgb5lz.r-13qz1uu > div > div.css-1dbjc4n.r-mk0yit > div > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-l71dzp.r-1udh08x.r-1inuy60.r-ou255f.r-1b9bua6 > div > input','allif1337@')

//next
await page2.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-6koalj.r-16y2uox > div.css-1dbjc4n.r-ahm1il.r-136ojw6 > div > div > div > div.css-1dbjc4n.r-obd0qt.r-1pz39u2.r-1t2qqvi.r-16y2uox.r-1wbh5a2.r-1777fci.r-1uvorsx.r-174vidy.r-18bj3io > div > div > span > span')

fs.writeFileSync('userpass.txt', +mail);


const page3 = await context.newPage();
  const reff = `https://a.aliexpress.com/_mrtSpnd`;
  const twitter =  `https://thirdparty.aliexpress.com/login.htm?type=tt&from=msite&return_url=https%3A%2F%2Fsale.aliexpress.com%2Fid%2F__mobile%2Fdaily_cash_out_m.htm%3FinvitationCode%3DL2hpQTlXSWJ0bzQ0Vysyc0F5TjgvMTVhWHVFMFRqdEtROWFVTlAxemlrT25pYzk5ZXkxK3dBPT0%26srcSns%3Dsns_Copy%26spreaderGameInstanceId%3DZzJ6Wkx2L3lZeG9jUGtIT2w1TkdDTkZwWWcrMTJ0U2pLazczVDExWkZzUnRaUXRadFRTUXlUMTArQUg0NUhRSA%26spreadType%3DpromotionGlobalShare%26bizType%3Ddailycash%26social_params%3D20074968341%26spreadCode%3DL2hpQTlXSWJ0bzQ0Vysyc0F5TjgvMTVhWHVFMFRqdEtROWFVTlAxemlrT25pYzk5ZXkxK3dBPT0%26_addShare%3Dno%26tt%3DMG%26aff_fsk%3D_mrtSpnd%26aff_platform%3Ddefault%26sk%3D_mrtSpnd%26aff_trace_key%3Dbc7badfcf64546d0a48d7d54dbda47ad-1613847972021-07490-_mrtSpnd%26shareId%3D20074968341%26businessType%3Ddailycash%26platform%3DAE%26terminal_id%3Df33bfdf1b4cd45cf982b1aba65a51766`
  console.log('membuka reff ..')
  await page3.emulate(iPhoneX);
  await page3.goto(`${reff}`,{waitUntil : 'networkidle2'});

 await page3.tap('#am-modal-container-1613847974662 > div > div.am-modal-wrap.projectGlobal_ModalHasClose_FlexInTop > div > div > div > div > div:nth-child(1) > div > div > div:nth-child(5) > div.goBtn___3aVca')
 await page3.goto(`${twitter}`,{waitUntil : 'networkidle2'});
 await page3.click('#root > section > div > div:nth-child(3) > a')

















//   await page.waitForSelector('#root > div > div > div.letterWrap___1riAf > div.letterOpen___28NJv',  {visible:true, timeout:10000, delay:60000});
//     await page.tap('#root > div > div > div.letterWrap___1riAf > div.letterOpen___28NJv',  {visible:true, timeout:10000});
//   //await page.click('')
//   await page.waitForSelector('#root > ul > li:nth-child(1)', {waitUntil : 'networkidle2'});
//   await page.click('#root > ul > li:nth-child(1)',{visible:true, timeout:10000});
//   await page.click('#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(2) > input',{delay:1000})
//   await page.type('#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(2) > input','allif876303@live.com',{delay:100})
//   await page.type('#root > div.fm-tabs-content > div:nth-child(1) > div > div > div:nth-child(3) > input','lalalili22',{delay:100})
//   await page.waitForSelector('#root > div.fm-tabs-content > div:nth-child(1) > div > div > button',{delay:1000})
//   await page.click('#root > div.fm-tabs-content > div:nth-child(1) > div > div > button',{delay:1000})
//   await page.waitForSelector('#root > div > div > div.letterWrap___1riAf > div.letterOpen___28NJv',{waitUntil : 'networkidle2'})
//   await page.tap('#root > div > div > div.letterWrap___1riAf > div.letterOpen___28NJv', {waitUntil : 'networkidle2', visible:true, timeout:10000});
//    //sukses

//    await page2.emulate(iPhoneX);
//    await page2.goto(`${ali2}`,{waitUntil : 'networkidle2', delay:1000});
//    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
//    await page2.tap('#root > div > div > div.letterWrap___1riAf > div.letterOpen___28NJv', {waitUntil : 'networkidle2', visible:true, timeout:10000});
//    await page.goto(`${ali}`,{waitUntil : 'networkidle2'});
//     await page.tap('#root > div > div > div.letterWrap___1riAf > div.letterOpen___28NJv',  {visible:true, timeout:10000});

// await page2.emulate(iPhoneX);
//   await page2.goto('https://aliexpress.com',{delay:30000})
//   await page2.waitForSelector('#footer-account > svg',{delay:1000})
//   await page2.click('#footer-account > svg',{delay:1000})
//   await page2.waitForSelector('#account-section > div > div > div:nth-child(4) > ul:nth-child(2) > li:nth-child(1)'),{delay:1000}
//   await page2.click('#account-section > div > div > div:nth-child(4) > ul:nth-child(2) > li:nth-child(1)',{delay:1000})
//   await page2.waitForSelector('#account-section > div > div > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)',{delay:1000})
//   await page2.click('#account-section > div > div > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)',{delay:1000})
//   await page2.waitForSelector('#account-section > div > div > div.swipeable-views > div > div > ul > div:nth-child(2) > span > span:nth-child(2)',{delay:1000})
//   await page2.click('#account-section > div > div > div.swipeable-views > div > div > ul > div:nth-child(2) > span > span:nth-child(2)',{delay:1000})
//   await page2.waitForSelector('#account-section > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(4)',{delay:1000})
//   await page2.click('#account-section > div > div > div.swipeable-views.with-survey > div > div:nth-child(2) > ul > div:nth-child(4)',{delay:1000})
//   await page2.waitForSelector('#account-section > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(6)',{delay:1000})
//   await page2.click('#account-section > div > div > div.swipeable-views.with-survey > div > div:nth-child(3) > ul > div:nth-child(6)',{delay:1000})
//   await page.reload({delay:1000})

//   await page.waitForSelector('#am-modal-container-1608800678816 > div > div.am-modal-wrap > div > div > div > div > div.innerContentWrapper___24iXr > div.modalInnerContent___6bRf9 > div > div.box___3P30A > h1')
//   await page.click('#am-modal-container-1608800678816 > div > div.am-modal-wrap > div > div > div > div > div.innerContentWrapper___24iXr > div.modalInnerContent___6bRf9 > div > div.box___3P30A > h1')
//   await page.waitForSelector('#copylink')
//   let reff = await page.$eval("#copylink", (element) => {
//     return element.getAttribute("data-clipboard-text");
//   })
//   browser.close()
//   console.log(reff)
//   await browser.close();
})();
