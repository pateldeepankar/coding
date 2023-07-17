

const MailBuilder = (function() {
    function MailBuilder(id) {
        this.id = id;
    }

    /** @private */
    let privateMethod = function() {

    }

    MailBuilder.build = function() {
        console.log("bind called");
    }

    MailBuilder.prototype.createAddress = function(address) {
        this.address = address;
        console.log("createAddress called");
    }
    return MailBuilder;
})();

/** @class @extends {MailBuilder} */
const ChildMailBuilder = (function() {
    function ChildMailBuilder(id, name) {
        this.id = id;
        this.childName = name;
    }
    ChildMailBuilder = Object.assign(MailBuilder, ChildMailBuilder);
    ChildMailBuilder.prototype = Object.assign(MailBuilder.prototype, ChildMailBuilder.prototype);

    ChildMailBuilder.prototype.createSupara = function(s) {
        this.s = s;
        console.log("createSupara called");
    }
    return ChildMailBuilder;
})();

ChildMailBuilder.build();
new ChildMailBuilder('id', 'lawda').createSupara('address');

// function mailCreater(id, provider) {
//     this.id = id;
//     this.provider = provider;
//     mailCreater.prototype.createAddress = function(){
//         return `Email: ${this.id}@${this.provider}.com`;
//     }
// }

// function dummyMailCreator(){
//     this.temp = "temp";
//     dummyMailCreator.prototype = Object.create(mailCreater.prototype, dummyMailCreator.prototype);
// }

// const firstMail = new mailCreater("amit","gmail")
// console.log(firstMail.__proto__);
// //console.log(firstMail.createAddress());

// //new dummyMailCreator.createAddress.bind(firstMail)
// console.log(dummyMailCreator.prototype)

// let dummy = new dummyMailCreator()
// console.log(dummy.temp, dummy.provider);

