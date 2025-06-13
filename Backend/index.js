require('dotenv').config()
const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
var cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@analytics-dev.sfhjnki.mongodb.net/?retryWrites=true&w=majority&appName=analytics-dev`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const moviesCollection = client.db('Movie-Verse').collection('movielist');
        const usersCollection = client.db('Movie-Verse').collection('userslist');
        const bookmarkCollection = client.db('Movie-Verse').collection('bookmarklist');

        app.get('/movielist', async (req, res) => {
            const result = await moviesCollection.find().toArray();
            res.send(result);
        })

        app.get('/movielist/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: id }; // no ObjectId()
            const result = await moviesCollection.findOne(query);
            res.send(result);
        });

        app.post('/userslist', async (req, res) => {
            const users = req.body;
            const result = await usersCollection.insertOne(users);
            res.send(result);
        })

        app.get('/userslist', async (req, res) => {
            const result = await usersCollection.find().toArray();
            res.send(result);
        })

        app.post('/bookmark', async (req, res) => {
            const watchlist = req.body;
            const result = await bookmarkCollection.insertOne(watchlist);
            res.send(result);
        })

        app.get('/bookmark', async (req, res) => {
            const email = req.query.email;
            const query= {email : email};
            const result = await bookmarkCollection.find(query).toArray();
            res.send(result);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Movie Verse server is running.')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})