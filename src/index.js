"use strict";

import {gretting} from "./say-hello";

const $ = require('jquery');

const sayHello = () => {
    console.log("Hello");
};

console.log(gretting());

sayHello();