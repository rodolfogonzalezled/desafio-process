import { Router } from "express";

const router = Router();

router.get('/info', (req, res) => {


    const info = {
        arg: process.title,
        so: process.platform,
        nodeVersion: process.version,
        rss: process.memoryUsage(),
        path: process.execPath,
        processId: process.pid,
        folder: process.cwd()
    }

    res.render('pages/info', {info})
});

export default router;