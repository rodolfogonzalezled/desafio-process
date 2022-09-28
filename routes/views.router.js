import { Router } from "express";
import os from 'os';

const router = Router();

router.get('/info', (req, res) => {
    const info = {
        arg: process.title,
        so: process.platform,
        nodeVersion: process.version,
        rss: process.memoryUsage(),
        path: process.execPath,
        processId: process.pid,
        folder: process.cwd(),
        cantCPUs: os.cpus().length
    }

    res.render('pages/info', {info})
});

export default router;