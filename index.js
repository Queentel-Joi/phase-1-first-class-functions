
function receivesAFunction(callback) {

    if (typeof callback === 'function') {
        callback();
    }
}

function returnsANamedFunction() {
    
    function myNamedFunction() {

    }
    return myNamedFunction;
}

function returnsAnAnonymousFunction() {

    return () => {

    };

}

module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
};