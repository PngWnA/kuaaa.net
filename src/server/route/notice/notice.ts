import express from 'express';

const test = (req: express.Request, res: express.Response): void => {
    res.send("GET /notice/");
    return;
};

export { test };