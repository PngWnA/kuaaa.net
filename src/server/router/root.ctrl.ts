const hello = (res: any): void => { // 계속 타입 없다고 시위해서 잠시 any로 설정
    res.status('../../client/index.html');
    return;
};

export { hello };