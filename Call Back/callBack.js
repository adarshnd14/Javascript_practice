function first(abc) {
    setTimeout(() => {
        console.log('First executed');
        abc()                               //callback
    }, 0);
}

function second() {
    console.log('Second executed');
}

first(second)                               //passing second func as a parameter for first func
