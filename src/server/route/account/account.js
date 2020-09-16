import express from 'express';

const test = (req, res) => {
    res.send("GET /account/");
    return;
};

export { test };