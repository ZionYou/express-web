// require packages used in the project
const express = require('express') //使用require載入express
const app = express()              //express套件在執行後，存成app變數
const port = 3000                  //定義連接埠號

// 載入handlebars
const exphbs = require('express-handlebars') 

//設定樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// 告訴 Express 說要設定的 view engine 是 handlebars
app.set('view engine', 'handlebars') 

// 設定靜態檔案
app.use(express.static('public'))


// 設定路由
app.get("/", (req, res) => {
  res.render("index", { title: "首頁" });
});

app.get("/about", (req, res) => {
  res.render("index", { title: "About", about: "active" });
});

app.get("/portfolio", (req, res) => {
  res.render("index", { title: "Portfolio", portfolio: "active" });
});

app.get("/contact", (req, res) => {
  res.render("index", { title: "Contact", contact: "active" });
});


// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})