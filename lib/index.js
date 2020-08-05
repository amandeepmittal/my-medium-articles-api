"use strict";

// const ura = require("unique-random-array");
const MediumApi = require("./api");
// const getRandomItem = ura(MediumApi);
const getItem = () => {
	return MediumApi;
};

// module.exports = getRandomItem();
module.exports = getItem();
