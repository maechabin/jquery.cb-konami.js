/*!
 * jquery.cbkonami.js v1.0.3
 * Auther @maechabin
 * Licensed under mit license
 */
;(function (factory) {

  if (typeof module === "object" && typeof module.exports === "object") {

    module.exports = factory(require("jquery"), window, document);

  } else {

    factory(jQuery, window, document);

  }

} (function ($, window, document, undefined) {

    "use strict";

    var Konami = function (element, callback) {

        this.element = element;
        this.command = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        this.key_array = [];
        this.key_count = 0;
        this.callback = callback || function () {alert("Hello Konami.");};

    };

    Konami.prototype.keyDown = function (event) {

        var i, c;
        var key = event.keyCode;

        this.key_array.push(key);
        i = this.key_array.length - 1;
        c = this.command.length;

        if (this.key_array[i] === this.command[i]) {

            this.key_count++;

        } else {

            this.reset();

        }

        if (this.key_count === c) {

            this.action();

        }

    };

    Konami.prototype.addEvent = function () {

        var d = this.element;
        var that = this;

        try {

            d.addEventListener("keydown", function (event) {

                that.keyDown.call(that, event);

            }, false);

        } catch (error) {

            d.attachEvent("keydown", function (event) {

                that.keyDown.call(that, event);

            });

        }
    
    };

    Konami.prototype.action = function () {

        this.callback();
        this.reset();

    };

    Konami.prototype.reset = function () {

        this.key_array = [];
        this.key_count = 0;

    };

    Konami.prototype.init = function () {

        this.addEvent();
        return this;

    };

    $.fn.cbKonami = function (callback) {

        return this.each(function () {

            new Konami(this, callback).init();

        });

    };

}));
