//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const { firstName, lastName } = require("./4-names");
const sayHi = require("./5-Utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
sayHi("My name is");
sayHi(firstName);
sayHi(lastName);
