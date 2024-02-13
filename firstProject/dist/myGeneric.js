"use strict";
const score = [];
const names = [];
function identityThree(val) {
    return val;
}
//arrow function
const getMore = (products) => {
    return products[0];
};
identityThree({ brand: 'milton', type: 1 });
getMore([{ brand: 'paras', type: 3 }]);
