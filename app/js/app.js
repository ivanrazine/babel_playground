"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainTitle = function () {
    function mainTitle(selector, cls, weight) {
        _classCallCheck(this, mainTitle);

        this.selector = document.querySelector(selector);
        this.cls = cls;
        this.weight = weight;

        this.selector.classList.add(cls);
    }

    _createClass(mainTitle, [{
        key: "addColor",
        value: function addColor(newcls) {

            return this.selector.classList.add(newcls);
        }
    }, {
        key: "changeWeight",
        value: function changeWeight(neweight) {

            var w = neweight || this.weight;

            return this.selector.style.fontWeight = w;
        }
    }]);

    return mainTitle;
}();

var title = new mainTitle("h1", "blue", "bold");

title.addColor("red");
title.changeWeight();