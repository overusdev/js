'use strict';

function getMsg(name, job, age){
    return `${this.greet}, ${this.msg} ${name} i am ${age} old and i im a ${job}`;
}
  
const obj = {
    greet: 'Hello',
    msg: `my name is`,
}

console.log(getMsg.call(obj, 'Sergey', 'FE-developer', 33));

console.log(getMsg.apply(obj, ['Sergey', 'FE-developer', 33]));