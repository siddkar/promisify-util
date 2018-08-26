const promisify = hof => (...args) => new Promise((resolve, reject) => {
    hof(...args, (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});

const promisifyAll = (obj) => {
    const hofs = Object.entries(obj).filter(entry => entry[1] instanceof Function);
    const promisifiedObj = { };
    hofs.forEach((entry) => {
        const key = `${entry[0]}Async`;
        promisifiedObj[key] = promisify(entry[1]);
    });
    return {
        ...obj,
        ...promisifiedObj,
    };
};

const odisha = {
    promisify,
    promisifyAll,
};

export default odisha;
