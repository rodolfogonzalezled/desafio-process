import express from 'express';
import viewsRouter from './routes/views.router.js';
import randomsRouter from './routes/randoms.router.js';
import { logger, loggerConfig } from './utils/utils.js';
import compression from "compression";
// import minimist from 'minimist';

const app = express();
app.use(compression());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("views", "./public/views");
app.set("view engine", "ejs");

app.use(logger);

app.use('/', viewsRouter);
app.use('/api/randoms', randomsRouter);

//OBTENER PUERTO USANDO MINIMIST
// const args = minimist(process.argv.slice(2), { alias: { p: "PORT" }, default: { p: 8080 } });
// const { PORT } = args;

const PORT = process.env.PORT ?? 8081; 

// --- Conexión del Servidor ------------------------------------------------------------
const connectedServer = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
});
connectedServer.on("error", error => {
    loggerConfig.log('error', `Error en servidor ${error}`);
    console.log(`Error en servidor ${error}`)
});
// --------------------------------------------------------------------------------------

app.get('*', function (req, res) {
    req.logger.warn(`Url llamada ${req.originalUrl}, método ${req.method}`);
    res.status(400).send('Página no encontrada');
});