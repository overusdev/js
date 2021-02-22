'use strict';

function getMsg(name, job, age){
    return `${this.greet}, ${this.msg} ${name} i am ${age} old and i im a ${job}`;
}
  
const obj = {
    greet: 'Hello',
    msg: `my name is`,
};

const obj2 = {
    msg: 'what a fuck',
};

Array.prototype.forIn = function(n) {

    console.log(this);

    return this.map(function(i) {
        return console.log (i * n);
    });

};

[1, 2, 3].forIn(2);

getMsg.bind(obj2, 'Vlad', 'Vampire', 150);

console.log(getMsg.call(obj, 'Sergey', 'FE-developer', 33));

console.log(getMsg.apply(obj, ['Sergey', 'FE-developer', 33]));
