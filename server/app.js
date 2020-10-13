const axios = require('axios')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const goingList = []
const notgoingList = []

app.get('/api', (req, res) => {
    axios
    .get("https://randomuser.me/api/")
    .then((r) => {
        const user = r.data.results[0]
        res.json({picture: user.picture.thumbnail, name: user.name.first + " " + user.name.last, phone: user.phone, email: user.email})
    })
})

app.get('/api/going', (req, res) => {
    res.json(goingList)
})

app.get('/api/notgoing', (req, res) => {
    res.json(notgoingList)
})

app.post('/api/markinvitee', (req, res) => {
    if (req.body.going === true) { 
        goingList.push(req.body)
    } else if (req.body.going === false) {
        notgoingList.push(req.body)
    }
    res.json({success: true})
})

app.listen(3001, (req, res) => {
    console.log('listening on port 3001')
})