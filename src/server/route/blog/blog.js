import express from 'express';

const test = (req, res) => {
    res.send("GET /blog/");
    return;
};

export { test };