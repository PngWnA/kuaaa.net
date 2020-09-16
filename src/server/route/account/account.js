import express from 'express';

const test = (req: express.Request, res: express.Response): void => {
    res.send("GET /account/");
    return;
};

export { test };