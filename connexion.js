const { MongoClient } = require('mongodb');

//server running
const url = 'mongodb://127.0.0.1:27017/Catalogo_autos';

//database name
const dbName = 'Catalogo_autos';

async function ConexionMongoDB(obj_auto) {
    const client = new MongoClient(url);

    try {
        // Connect to the database
        await client.connect();
        console.log("Connected to the database");

        const db = client.db(dbName);

        //database collection
        const collection = db.collection("auto");

        //inserting single document
        await collection.insertOne(obj_auto);
        console.log("Single document inserted successfully");

        /*// Inserting multiple documents
        await collection.insertMany(objeto);
        console.log("Multiple documents inserted successfull");
*/
    } catch (error) {
        console.error('Error connecting to the database:', error);
    } finally {
        //close the connection when done
        await client.close();
        console.log("Connection closed");

    }
    
}

//Exportar Modulos
module.exports = {
    "ConexionMongoDB": ConexionMongoDB
}