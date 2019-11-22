var h1 = new r1();
var l1 = 'z';
var m1 = 0;
var k = "0";
var i = new RegExp("^(?:[+-]*[0-9]*)(?:\\\.[0-9]*)?(?:[Ee][+-]?[0-9]*)?$");
var f = new RegExp("^(?:[+-]*[0-9]*)(?:\\\.[0-9]*)?(?:[Ee][+-]?[0-9]+)?$");

function r1() {
    this.h = new Array();
    this.h[0] = 0;
    this.h[1] = 0;
    this.h[2] = 0;
    this.h[3] = 0;
    this.h[4] = 0;
    r1.prototype.r = function (v) {
        this.h[0] = Number(v);
    };
    r1.prototype.s1 = function (v) {
        if (v.match(f)) {
            var a1 = Number(v);
            this.h[4] = this.h[3];
            this.h[3] = this.h[2];
            this.h[2] = this.h[1];
            this.h[1] = a1;
            this.h[0] = a1;
        };
    };
    r1.prototype.m = function (o1) {
        return this.h[o1];
    };
    r1.prototype.w1 = function () {
        this.h[0] = this.h[0] + this.h[1];
        this.j();
    };
    r1.prototype.d1 = function () {
        this.h[0] = this.h[1] - this.h[0];
        this.j();
    };
    r1.prototype.e1 = function () {
        this.h[0] = this.h[1] * this.h[0];
        this.j();
    };
    r1.prototype.k1 = function () {
        this.h[0] = this.h[1] / this.h[0];
        this.j();
    };
    r1.prototype.a2 = function () {
        this.h[0] = Math.pow(this.h[1], this.h[0]);
        this.j();
    };
    r1.prototype.z1 = function () {
        this.h[0] = this.h[1] / 100 * this.h[0];
    };
    r1.prototype.b2 = function () {
        this.h[0] = Math.sqrt(this.h[0]);
    };
    r1.prototype.reciprocal = function () {
        this.h[0] = 1 / this.h[0];
    };
    r1.prototype.t1 = function () {
        var u1;
        u1 = this.h[0];
        this.h[0] = this.h[1];
        this.h[1] = u1;
    };
    r1.prototype.x1 = function () {
        this.h[0] = this.h[1];
        this.j();
    };
    r1.prototype.j = function () {
        this.h[1] = this.h[2];
        this.h[2] = this.h[3];
        this.h[3] = this.h[4];
    };
    r1.prototype.q = function () {
        this.h[4] = this.h[3];
        this.h[3] = this.h[2];
        this.h[2] = this.h[1];
        this.h[1] = this.h[0];
        this.h[0] = 0;
    };
    r1.prototype.v1 = function () {
        this.h[0] = 0;
        this.h[1] = 0;
        this.h[2] = 0;
        this.h[3] = 0;
        this.h[4] = 0;
    };
};

function y1(v) {
    var v_string = v + '';
    if ((!v_string.match('[A-Za-z]')) && (v_string.match('\\.'))) {
        var split_string = v_string.split('.');
        if (split_string[1].length > 10) {
            v = Math.round(v * 10000000000) / 10000000000;
        };
    };
    return v;
};

function l() {
    document.stackdisplay.stack3.value = y1(h1.m(3));
    document.stackdisplay.stack2.value = y1(h1.m(2));
    document.stackdisplay.stack1.value = y1(h1.m(1));
    document.stackdisplay.stack0.value = y1(h1.m(0));
};

function d() {
    l();
    document.stackdisplay.stack0.setAttribute('autocomplete', 'off');
};

function b3() {
    if (document.stackdisplay.stack0.value.charAt(0) == '-') {
        document.stackdisplay.stack0.value = document.stackdisplay.stack0.value.slice(1);
    } else {
        document.stackdisplay.stack0.value = '-' + document.stackdisplay.stack0.value;
    };
};

function c(x) {
    switch (x) {
        case '+':
        case '-':
        case 'X':
        case '/':
        case '1/x':
        case 'SQRT':
        case 'POW':
        case '%':
        case 'SWAP':
        case 'POP':
        case 'MR':
        case 'MC':
        case 'M+':
        case 'M-':
            g(x);
            break;
        case 'Enter':
            p1();
            break;
        case 'AC':
            q1();
            break;
        case 'C':
            n();
            break;
        case '.':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            n1(x);
            break;
        case 'CHS':
            b3();
            break;
        default:
            break;
    };
};

function n() {
    if ((l1 == 'z') || (l1 == 'w')) {
        document.stackdisplay.stack0.value = 0;
        h1.r(document.stackdisplay.stack0.value);
        l1 = 'w';
    } else {
        document.stackdisplay.stack0.value = document.stackdisplay.stack0.value.substr(0, document.stackdisplay.stack0.value.length - 1);
    };
};

function q1() {
    h1.v1();
    l1 = 'z';
    l();
};

function o() {
    document.stackdisplay.stack0.value = m1;
    h1.r(document.stackdisplay.stack0.value);
};

function t() {
    m1 = Number(m1) + Number(document.stackdisplay.stack0.value);
};

function s() {
    m1 = Number(m1) - Number(document.stackdisplay.stack0.value);
};

function p() {
    m1 = 0;
};

function g(x) {
    h1.r(document.stackdisplay.stack0.value);
    try {
        switch (x) {
            case '+':
                h1.w1();
                break;
            case '-':
                h1.d1();
                break;
            case 'X':
                h1.e1();
                break;
            case '/':
                h1.k1();
                break;
            case '1/x':
                h1.reciprocal();
                break;
            case 'SWAP':
                h1.t1();
                break;
            case 'POP':
                h1.x1();
                break;
            case 'MR':
                o();
                break;
            case 'M+':
                t();
                break;
            case 'M-':
                s();
                break;
            case 'MC':
                p();
                break;
            case 'SQRT':
                h1.b2();
                break;
            case 'POW':
                h1.a2();
                break;
            case '%':
                h1.z1();
                break;
        };
        l1 = 'z';
        l();
        document.stackdisplay.stack0.select();
    } catch (error) {
        alert(error.message);
    };
};

function p1() {
    h1.s1(document.stackdisplay.stack0.value);
    l1 = 'w';
    l();
    document.stackdisplay.stack0.select();
};

function n1(x) {
    if ((l1 == 'z') || (l1 == 'w')) {
        if (l1 == 'z') h1.q();
        l();
        document.stackdisplay.stack0.value = x;
    } else document.stackdisplay.stack0.value = document.stackdisplay.stack0.value + x;
    l1 = 'c1';
};

function b() {
    if (!document.stackdisplay.stack0.value.match(i)) {
        document.stackdisplay.stack0.value = k;
    } else {
        k = document.stackdisplay.stack0.value;
    };
};

function a(g1) {
    if ((g1.keyCode >= 16) && (g1.keyCode <= 18)) return;
    if (g1.keyCode == 13) {
        p1();
    } else {
        if (document.stackdisplay.stack0.value.match(i)) {
            if ((l1 == 'z') || (l1 == 'w')) {
                var j1 = document.stackdisplay.stack0.value;
                if (l1 == 'z') h1.q();
                l();
                document.stackdisplay.stack0.value = j1;
                l1 = 'c1';
            };
        } else {
            var y = document.stackdisplay.stack0.value;
            document.stackdisplay.stack0.value = k;
            var u = new RegExp(k.replace(/(.)/g, '$1?'));
            var f1 = u.exec(y);
            var i1;
            if (f1 != null) {
                i1 = y.charAt(f1[0].length);
                c(i1);
            };
        };
    };
    return true;
};