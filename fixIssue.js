"use strict";
var person = {
    name : "Jack",
    prop : {
        name : "Daniel",
        getName : function() {
            return this.name;
        }
    }
}

const ok = person.prop.getName();
console.log(ok);
const notOk = person.prop.getName.bind(person.prop);
console.log(notOk());