const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

const jsonData = {
    "person": {
        "name": "John Doe",
        "age": 30,
        "address": {
            "city": "Randomville",
            "country": "Wonderland"
        },
        "contacts": [
            {
                "type": "email",
                "value": "john.doe@example.com"
            },
            {
                "type": "phone",
                "value": "+1234567890"
            }
        ],
        "isStudent": false
    },
    "randomArray": [1, "apple", true, null, { "key": "value" }],
    "timestamp": 1645632000000
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Hello, <h1>Please Login</h1>')
})

app.get('/json', (req, res) => {
    res.json(jsonData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})