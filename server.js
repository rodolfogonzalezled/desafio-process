import express from 'express';
import { createServer } from "http";
import viewsRouter from './routes/views.router.js';
import randomsRouter from './routes/randoms.router.js';
import minimist from 'minimist';

const app = express();
const httpServer = createServer(app);

app.use(express.json());

app.use('/', viewsRouter);
app.use('/api/randoms', randomsRouter);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("views", "./public/views");
app.set("view engine", "ejs");

const args = minimist(process.argv.slice(2), { alias: { p: "PORT" }, default: { p: 8080 } });
const { PORT } = args;

// --- Conexión del Servidor ------------------------------------------------------------
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
});
connectedServer.on("error", error => console.log(`Error en servidor ${error}`));
// --------------------------------------------------------------------------------------
