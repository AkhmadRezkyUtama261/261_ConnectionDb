const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: '',
    port: 
})

app.get('/', (req, res, next) =>{
    console.log("TEST DATA :");
    pool.query('Select * from biodata')
    .then(testData => {
        console.log(testData);
        res.send(testData.rows);
})
    .catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
})

