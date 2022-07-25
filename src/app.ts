import express, {Request, Response, NextFunction } from 'express';

const app = express();

app.get('/root', (req: Request, res: Response, next: NextFunction) => res.send('Root!!'));

app.listen('3002', () => {
    console.log('Start port 3002')
});