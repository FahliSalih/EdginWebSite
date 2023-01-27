const express = require("express");
//express 1. yapılacak işlem 
const app = express();

 // 2. işlem ana sayfa yönlendirme kodu
app.get("/", (req,res)=>{
    res.status(200).send('İNDEX SAYFASI');
});
    

//htpp server baglantıs 1. yapılacak işlem
const port = 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
