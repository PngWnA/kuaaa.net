const hello = (req:any, res: any): void => {
    res.send(`GET / <br> Hello KUAAA.`);
    return;
};

export { hello };