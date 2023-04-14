const e = require('express');
const app = require('./app');
const axios = require('axios');
var count=0;


app.post('/start',(req,res)=>{
// start legacy
 // sarkhati3(res,req.body.authentication, req.body.price, req.body.namad, req.body.volume, req.body.length);

  const targetTime = new Date();
  console.log(targetTime.getHours()+" : "+targetTime.getMinutes()+" : "+targetTime.getSeconds()+" : "+targetTime.getMilliseconds()+" : ");
  targetTime.setHours(req.query.hh, req.query.mm, req.query.ss, req.query.ms); // set to 07:44:59:990 AM
  let delay = targetTime.getTime() - Date.now();
  console.log(delay/1000)
  //
  count=0;
  if(req.query.broker.includes("mofid")){
    chatGpt(res,req.body.authentication, req.body.price, req.body.namad, req.body.volume, req.body.length,delay);
  }else{
    mohsen(res,req.body.authentication, req.body.price, req.body.namad, req.body.volume, req.body.length,delay);
  }
 
 // setTimeout(myFunction(), delay);
})


function mohsen(myres,authentication,price,namad,volume,length,delay){
    setTimeout(()=>{
        var targetTime =new Date();
        console.log(targetTime.getHours()+" : "+targetTime.getMinutes()+" : "+targetTime.getSeconds()+" : "+targetTime.getMilliseconds()+" : ");
        var realTimeHeader2 = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
            'Content-Type': 'application/json',
            'Cookie':'f5avraaaaaaaaaaaaaaaa_session_=GEDHKCEDPOGMEBAHKDOKPMGHDHMADHBFOKNCBOGGKFDHJCDJBGKPJHAKOAIINHPPALODJDLGENBLNOJJBDDADLAIEANNJGLEMLFHEOEFAEIDJJHHLOJKKALKCDHDBKDE',
            'Authorization': authentication,
            'Connection': 'keep-alive',
            'Host': 'api.atieh-broker.ir',
            "Postman-Token": 'bf7250f3-fe6f-426a-a429-22d714c79acd',
            'Origin': 'https://online.atieh-broker.ir',
            'Referer': 'https://online.atieh-broker.ir/',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
            'Content-Length': length,
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-mobile': ' ?0'
        }
                      axios.post(
                          'https://api.atieh-broker.ir/Web/V1/Order/Post',
                          {
                              "IsSymbolCautionAgreement": false,
                              "CautionAgreementSelected": false,
                              "IsSymbolSepahAgreement": false,
                              "SepahAgreementSelected": false,
                              "orderCount": parseInt(volume),
                              "orderPrice": parseInt(price),
                              "FinancialProviderId": 1,
                              "minimumQuantity": 0,
                              "maxShow": 0,
                              "orderId": 0,
                              "isin": namad,
                              "orderSide": 65,
                              "orderValidity": 74,
                              "orderValiditydate": null,
                              "shortSellIsEnabled": false,
                              "shortSellIncentivePercent": 0
                          },
                          {headers: realTimeHeader2}
                      ).then(res => {
                        var mDate =new Date();
                        console.log(`new success  ${JSON.stringify(res.data,"",2)} ` + mDate.getSeconds()+" : "+ mDate.getMilliseconds())
                        myres.send(res.data)
                      }, rej => {
                        var mDate =new Date();
                             console.log(`new reject ${rej.data} ` + mDate.getSeconds()+" : "+ mDate.getMilliseconds())
                      })
    },delay)

}



function chatGpt(myres,authentication,price,namad,volume,length,delay){
    setTimeout(()=>{
        var targetTime =new Date();
        console.log(targetTime.getHours()+" : "+targetTime.getMinutes()+" : "+targetTime.getSeconds()+" : "+targetTime.getMilliseconds()+" : ");
        var realTimeHeader2 = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
            'Content-Type': 'application/json',
            'Cookie':'f5avraaaaaaaaaaaaaaaa_session_=GEDHKCEDPOGMEBAHKDOKPMGHDHMADHBFOKNCBOGGKFDHJCDJBGKPJHAKOAIINHPPALODJDLGENBLNOJJBDDADLAIEANNJGLEMLFHEOEFAEIDJJHHLOJKKALKCDHDBKDE',
            'Authorization': authentication,
            'Connection': 'keep-alive',
            'Host': 'api2.mofidonline.com',
            "Postman-Token": 'bf7250f3-fe6f-426a-a429-22d714c79acd',
            'Origin': 'https://www.mofidonline.com',
            'Referer': 'https://www.mofidonline.com/',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
            'Content-Length': length,
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-mobile': ' ?0'
        }
                      axios.post(
                          'https://api2.mofidonline.com/Web/V1/Order/Post',
                          {
                              "IsSymbolCautionAgreement": false,
                              "CautionAgreementSelected": false,
                              "IsSymbolSepahAgreement": false,
                              "SepahAgreementSelected": false,
                              "orderCount": parseInt(volume),
                              "orderPrice": parseInt(price),
                              "FinancialProviderId": 1,
                              "minimumQuantity": 0,
                              "maxShow": 0,
                              "orderId": 0,
                              "isin": namad,
                              "orderSide": 65,
                              "orderValidity": 74,
                              "orderValiditydate": null,
                              "shortSellIsEnabled": false,
                              "shortSellIncentivePercent": 0
                          },
                          {headers: realTimeHeader2}
                      ).then(res => {
            
                        var mDate =new Date();
                        console.log(`new success  ${JSON.stringify(res.data,"",2)} ` + mDate.getSeconds()+" : "+ mDate.getMilliseconds())
                         if(count<4){
                            count++;
                            chatGpt(myres,authentication,price,namad,volume,length,190);
                         }else{
                            myres.send(res.data)  
                         }
                          

                      
                      //  myres.send(res.data)
                      }, rej => {
                        var mDate =new Date();
                        console.log(`new reject ${rej.response} ` + mDate.getSeconds()+" : "+ mDate.getMilliseconds())
                        if(count<4){
                           count++;
                           chatGpt(myres,authentication,price,namad,volume,length,190);
                        }
                        
                          
                      })
    },delay)

}


function sarkhati3(myres,authentication,price,namad,volume,length) {
    var realTimeHeader2 = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
        'Content-Type': 'application/json',
        'Cookie':'f5avraaaaaaaaaaaaaaaa_session_=GEDHKCEDPOGMEBAHKDOKPMGHDHMADHBFOKNCBOGGKFDHJCDJBGKPJHAKOAIINHPPALODJDLGENBLNOJJBDDADLAIEANNJGLEMLFHEOEFAEIDJJHHLOJKKALKCDHDBKDE',
        'Authorization': authentication,
        'Connection': 'keep-alive',
        'Host': 'api2.mofidonline.com',
        "Postman-Token": 'bf7250f3-fe6f-426a-a429-22d714c79acd',
        'Origin': 'https://www.mofidonline.com',
        'Referer': 'https://www.mofidonline.com/',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
        'Content-Length': length,
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        'sec-ch-ua-platform': '"Windows"',
        'sec-ch-ua-mobile': ' ?0'

    }
    setTimeout(() => {
        // console.log(new Date().getSeconds())
        var date = new Date()
        if (/*util.getTime(new Date()).getMinutes() == 18 &&*/date.getSeconds() == 59 && date.getMilliseconds() >= 910) {

                  axios.post(
                      'https://api2.mofidonline.com/Web/V1/Order/Post',
                      {
                          "IsSymbolCautionAgreement": false,
                          "CautionAgreementSelected": false,
                          "IsSymbolSepahAgreement": false,
                          "SepahAgreementSelected": false,
                          "orderCount": parseInt(volume),
                          "orderPrice": parseInt(price),
                          "FinancialProviderId": 1,
                          "minimumQuantity": 0,
                          "maxShow": 0,
                          "orderId": 0,
                          "isin": namad,
                          "orderSide": 65,
                          "orderValidity": 74,
                          "orderValiditydate": null,
                          "shortSellIsEnabled": false,
                          "shortSellIncentivePercent": 0
                      },
                      {headers: realTimeHeader2}
                  ).then(res => {
                    console.log(`new  ${res} ` + date.getMilliseconds())
                      myres.send(res.data)
                  }, rej => {
                         console.log(`new  ${rej.response} ` + date.getMilliseconds())
                  })
           
          
            return
        }
        sarkhati3(myres,authentication, price, namad, volume, length)
    }, 20)
}