// use local storage to manage cart data
const addToDb = id => {
    let actitivityCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('activity-cart');
    if (storedCart) {
        actitivityCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = actitivityCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        actitivityCart[id] = newQuantity;
    }
    else {
        actitivityCart[id] = 1;
    }
    localStorage.setItem('activity-cart', JSON.stringify(actitivityCart));
}

const getStoredCart = () => {
    let actitivityCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('activity-cart');
    if (storedCart) {
        actitivityCart = JSON.parse(storedCart);
    }
    return actitivityCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('activity-cart');
    if (storedCart) {
        const actitivityCart = JSON.parse(storedCart);
        if (id in actitivityCart) {
            delete actitivityCart[id];
            localStorage.setItem('activity-cart', JSON.stringify(actitivityCart));
        }
    }
}

const deleteactitivityCart = () => {
    localStorage.removeItem('activity-cart');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteactitivityCart
}