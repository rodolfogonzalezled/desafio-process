import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
    let cant = req.query.cant || 100000000;
    // res.json(cart ? cart.productos : { error: "Carrito no encontrado" });
})


export default router;
