const express = require('express')
const app = express()
const PORT = 3000

const posts = [
    {
        id: 1,
        titolo: "ciambellone",
        contenuto: "",
        img: "/images/ciambellone.jpeg",
        tag: ["ricette", "dessert"]
    },
    {
        id: 2,
        titolo: "cracker di barbabietola",
        contenuto: "",
        img: "/images/cracker_barbabietola.jpeg",
        tag: ["ricette", "aperitivo", "antipasto"]
    },
    {
        id: 3,
        titolo: "pane fritto",
        contenuto: "",
        img: "/images/pane_fritto_dolce.jpeg",
        tag: ["ricette", "dessert"]
    },
    {
        id: 4,
        titolo: "pasta di barbabietola",
        contenuto: "",
        img: "/images/pasta_barbabietola.jpeg",
        tag: ["ricette", "primo piatto"]
    },
    {
        id: 5,
        titolo: "torta paesana",
        contenuto: "",
        img: "/images/torta_paesana.jpeg",
        tag: ["ricette", "dessert"]
    },

]

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog')

})

app.get('/bacheca', (req, res) => {
    res.json(posts)

})

app.listen(PORT, () => {
    console.log(`Example app listening on port${PORT}`)
})