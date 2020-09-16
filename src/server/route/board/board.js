import express from 'express';

const test = (req, res) => {
    res.send("GET /board/");
    return;
};

export { test };