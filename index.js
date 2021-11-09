
const http = require("http");

const PORT = 5000;
let dataBase = [
  {
    "productName": "",
    "itemNumber": 123,
    "manufacturer": "",
    "category": "",
    "price": "",
    "quantity": "",
    "productId": ""
  }
]

let x = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // if(req.method=='GET'){
  //     res.writeHead(200,{"Content-type":"application/json"});
  //     res.end('{"key":"arpit Muthhal"}');
  // }
  if (req.method == "POST" && req.url=='/') {
    
    req.on("data", (data) => {
      console.log(data+"");
      data = data + "";
      //if data is json then parse it other wise handle it
      data = JSON.parse(data)
      console.log(data.itemName);
      const incomingData = {
        "productName":data.productName,
        "itemNumber":data.itemNumber,
        "manufacturer":data.manufacturer,
        "category":data.category,
        "price":data.price,
        "quantity":data.quantity,
        "productId" : 1,
      }
      
      dataBase.push(incomingData); 
      // console.log(dataBase);


    });
    res.end('{"status" : "ok"}')
  }
  else if(req.method=="POST" && req.url =='/delete'){
    console.log(req.url);
    req.on("data",(itemNumber)=>{
      let itemX = parseInt(itemNumber+"");
      console.log(itemX);
      
      for(let i = 0;i<dataBase.length;i++){
        const {itemNumber} =  dataBase[i];
        if(itemNumber==itemX){
          dataBase.splice(i,1);
          break;
        }
      }
  
      res.end('bhago Yaha se');
    })
  }
  else if(req.method=="POST" && req.url=='/finalDelete'){
     dataBase = [];
     
     res.end('full bhago')
  }
  else if (req.method == "GET"){
      res.writeHead(200, {'Content-type':"application/json"});
      res.end(JSON.stringify(dataBase))
  }
});

x.listen(PORT, "0.0.0.0", () => {
  console.log("Server Started");
});
module.exports = {dataBase};
