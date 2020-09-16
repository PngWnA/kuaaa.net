import express from 'express';

const test = (req, res) => {
    res.send("GET /archive/");
    return;
};

export { test };