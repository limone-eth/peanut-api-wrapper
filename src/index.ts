import "dotenv/config"
import express, { Request, Response } from 'express';

import {claimPeanutLinkGasless, getPeanutLink} from "./peanut.js";
import {getWallet} from "./utils.js";

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.post('/peanut', async (req: Request, res: Response) => {
    const {recipientAddress, courseId} = req.body;
    const wallet = getWallet();
    const link = await getPeanutLink(wallet, "0x88A9d29d09A9216F7d750e50B9Aa35dF9eA49203", courseId)
    await claimPeanutLinkGasless(link, recipientAddress, process.env.PEANUT_API_KEY!)
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});