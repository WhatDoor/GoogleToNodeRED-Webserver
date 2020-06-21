const express = require('express')
const bodyParser = require('body-parser')
const mqtt = require('mqtt')

const client = mqtt.connect("mqtt://192.168.1.118")
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.json())

app.post('/', (req, res, next) => {
    message = req.body.data[0]
    console.log(`GoogleAssistant: ${JSON.stringify(message)}`);
    client.publish("GoogleAssistant_test", JSON.stringify(message))
})

app.listen(3000)