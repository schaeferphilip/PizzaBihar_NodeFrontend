const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
oracledb.initOracleClient({libDir: "/Library/instantclient_19_8"});

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/pizza',(req,res)=>{
    async function getDataPizza(){
        try{
            const connection = await oracledb.getConnection({
                user: 'philip',
                password: 'philip',
                connectString: 'localhost/xepdb1'
            });

            const result = await connection.execute('select * from pizza');
            return result;

        } catch (error) {
            console.error(error);
            return error;
        }
    }

    getDataPizza()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
});

app.get('/ingredients',(req,res)=>{
    async function getDataIngredients(){
        try{
            const connection = await oracledb.getConnection({
                user: 'philip',
                password: 'philip',
                connectString: 'localhost/xepdb1'
            });

            const result = await connection.execute('select * from ingredients');
            return result;

        } catch (error) {
            console.error(error);
            return error;
        }
    }

    getDataIngredients()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
});

app.get('/customer',(req,res)=>{
    async function getDataCustomer(){
        try{
            const connection = await oracledb.getConnection({
                user: 'philip',
                password: 'philip',
                connectString: 'localhost/xepdb1'
            });

            const result = await connection.execute('select * from customer');
            return result;

        } catch (error) {
            console.error(error);
            return error;
        }
    }

    getDataCustomer()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
});

app.get('/orders',(req,res)=>{
    async function getDataOrders(){
        try{
            const connection = await oracledb.getConnection({
                user: 'philip',
                password: 'philip',
                connectString: 'localhost/xepdb1'
            });

            const result = await connection.execute('select * from orders');
            return result;

        } catch (error) {
            console.error(error);
            return error;
        }
    }

    getDataOrders()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
});

app.get('/orders',(req,res)=>{
    async function getDataStatus(){
        try{
            const connection = await oracledb.getConnection({
                user: 'philip',
                password: 'philip',
                connectString: 'localhost/xepdb1'
            });

            const result = await connection.execute('select * from status');
            return result;

        } catch (error) {
            console.error(error);
            return error;
        }
    }

    getDataStatus()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
});

app.get('/orderspizza',(req,res)=>{
    async function getDataOrderspizza(){
        try{
            const connection = await oracledb.getConnection({
                user: 'philip',
                password: 'philip',
                connectString: 'localhost/xepdb1'
            });

            const result = await connection.execute('select * from orders_pizza');
            return result;

        } catch (error) {
            console.error(error);
            return error;
        }
    }

    getDataOrderspizza()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
});

app.get('/pizzaingredients',(req,res)=>{
    async function getDataPizzaingredients(){
        try{
            const connection = await oracledb.getConnection({
                user: 'philip',
                password: 'philip',
                connectString: 'localhost/xepdb1'
            });

            const result = await connection.execute('select * from pizza_ingredients');
            return result;

        } catch (error) {
            console.error(error);
            return error;
        }
    }

    getDataPizzaingredients()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
});

app.get('/status',(req,res)=>{
    async function getDataStatus(){
        try{
            const connection = await oracledb.getConnection({
                user: 'philip',
                password: 'philip',
                connectString: 'localhost/xepdb1'
            });

            const result = await connection.execute('select * from status');
            return result;

        } catch (error) {
            console.error(error);
            return error;
        }
    }

    getDataStatus()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
});


app.listen(PORT,
    () => {
        console.log('listen to port ${PORT}');
    })