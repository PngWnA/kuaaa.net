import express from 'express';

const test = (req, res) => {
    res.send("GET /gall/");
    return;
};

export { test };