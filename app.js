const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()
app.set('view engine', 'ejs')
let items = []



app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));


app.get('/', (req, res) => {

    let today = new Date()


    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    let date = today.toLocaleDateString("en-Us", options)


res.render("index", {date: date, newListItems: items})
  })

  app.post('/', (req, res)=>{
        res.redirect("/")
        item = req.body.newItem
        items.push(item)
  })


  app.post('/delete', (req, res)=>{
    res.redirect("/")
    item = req.body.itemName
    indexOfItem = items.indexOf(item)
    items.splice(indexOfItem, 1)
})









app.listen(port || 3000, () =>{
    console.log(`App listening at port ${port}`)
})