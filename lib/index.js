"use strict";

const ura = require("unique-random-array");
const MediumApi = require("./api");
const getRandomItem = ura(MediumApi);

console.log(getRandomItem());
