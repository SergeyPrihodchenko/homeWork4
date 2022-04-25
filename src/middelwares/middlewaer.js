const middleware =  (store) => (next) => (action) => {
    console.log('we in middleware');

    setTimeout(() => {
        console.log('I middleware');
        console.log('ACTION:', action);
    },
    1500)
};

export default middleware;