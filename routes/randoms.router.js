import { Router } from "express";
import { fork } from "child_process";

const router = Router();

router.get('/', (req, res) => {
    let cant = req.query.cant || 100000000;
    const aleatoriosFork = fork('./numerosAleatorios.js');
    aleatoriosFork.send(cant);
    aleatoriosFork.on('message', val=> {
        res.send({'val': val })
    })

    // res.json(cart ? cart.productos : { error: "Carrito no encontrado" });
})

router.get('/calculoForkeadoDelPoder',(req,res)=>{
    const result = fork('numerosAleatorios.js');
    result.send('Start process!!!!');
    result.on('message',val=>{
        res.send(`El resultado de la suma es ${val}`)
    })
})

export default router;
