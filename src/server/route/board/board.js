import express from 'express';

const test = (req: express.Request, res: express.Response): void => {
    res.send("GET /board/");
    return;
};

export { test };