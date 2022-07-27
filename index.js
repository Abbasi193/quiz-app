const express = require('express');
const data = require('./quiz');
const app = express()
app.use(express.static(__dirname + '/views'))
app.use(express.urlencoded({extended:false}))
app.set("view engine","jade")

app.get('/',(req,res) => {
    res.render('index',{data})
})

app.post('/',(req,res) => {
    var userData = JSON.parse(req.body.data)
    var result = 0
    
    for (i in userData) {
        if(userData[i]==data[i].answer) 
            result++
    }
    res.send(''+result)
})

app.listen(3000, () => {
    console.log('Server running')
})
