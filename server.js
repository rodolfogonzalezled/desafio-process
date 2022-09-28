import express from 'express';
import viewsRouter from './routes/views.router.js';
import randomsRouter from './routes/randoms.router.js';
// import minimist from 'minimist';

const app = express();

app.use(express.json());

app.use('/', viewsRouter);
app.use('/api/randoms', randomsRouter);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("views", "./public/views");
app.set("view engine", "ejs");

//OBTENER PUERTO USANDO MINIMIST
// const args = minimist(process.argv.slice(2), { alias: { p: "PORT" }, default: { p: 8080 } });
// const { PORT } = args;

const PORT = process.env.PORT; 

// --- Conexión del Servidor ------------------------------------------------------------
const connectedServer = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
});
connectedServer.on("error", error => console.log(`Error en servidor ${error}`));
// --------------------------------------------------------------------------------------
