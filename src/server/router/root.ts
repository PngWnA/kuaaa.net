const hello = (req:Express.Request, res: Express.Response): void => {
    console.log(req.headers);
    res.json({msg: 'Hello KUAAA'});
    return;
};

export { hello };