import Vue from 'vue';
import  { writeSomething, test } from "./utils/spinner.js";

let testVar = 1000;
console.log("Hallo, das ist das qualifizierte Startseiten-JS!");
console.log(test);
writeSomething();

window.addEventListener('load', function () {
  var vm = new Vue({
    delimiters: ['${', '}'],
    el: "#testId",
    data: {
      message: "Hallo Welt",
      items: ["dies","ist","ein","Array"]
    }
  });
});
