var slice = Array.prototype.slice;

function hyphenToCamel(str) {
    var toCamel = /-(.)/gi;
    return str.trim().replace(/-(.)/gi, function(match, p1) {
        return p1.toUpperCase();
    });
}

var $ = function(selector, context) {
    if (!this instanceof($)) {
        return new $(selector, context);
    }

    if (typeof(selector) === 'string') {
        // 需要验证context和 selector
        context = context || document;
        this.elements = slice.call(context.querySelectorAll(selector));
        return;
    }
    if (selector.nodeType) {
        this.elements = [selector];
    }
};

$.prototype.get = function(number) {
    return $(this.elements[number]);
};

$.prototype.css = function(propertyName, value, pseudoElements) {
    if (value == undefined) {
        //getComputedStyle() return a CSSStyleDeclaration object,
        // so use getPropertyValue is better than [];
        return getComputedStyle(this.elements[0], pseudoElements).getPropertyValue(propertyName);
    } else {
        propertyName = hyphenToCamel(propertyName);
        this.elements.forEach(function(v, i, a) {
            v.style[propName] = value;
        });
    }
};

window.$ = $;
