/**
  * @license SVOGV v0.2.1
  * Copyright (c) 2011-2017 Augmented Content GmbH & Joerg <IsAGeek> Krause, Berlin https://www.joergkrause.de/
  * License: ICS 
  */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs/add/operator/filter'), require('@angular/forms'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', 'rxjs/add/operator/filter', '@angular/forms', '@angular/platform-browser'], factory) :
	(factory((global.ac = global.ac || {}, global.ac.svogv = global.ac.svogv || {}),global.ng.core,global._angular_router,global.Rx.Observable.prototype,global.ng.forms,global.ng.platformBrowser));
}(this, (function (exports,_angular_core,_angular_router,rxjs_add_operator_filter,_angular_forms,_angular_platformBrowser) { 'use strict';

function Required(msg) {
    // the original decorator
    function requiredInternal(target, property) {
        new requiredInternalSetup(target, property.toString(), msg);
    }
    // return the decorator
    return requiredInternal;
}
var requiredInternalSetup = (function () {
    function requiredInternalSetup(target, key, msg) {
        this.target = target;
        this.key = key;
        this.msg = msg;
        Object.defineProperty(this.target, "__isRequired__" + this.key, {
            get: function () { return true; },
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__errRequired__" + this.key, {
            value: this.msg || "The field " + this.key + " is required",
            enumerable: false,
            configurable: false
        });
    }
    return requiredInternalSetup;
}());

/**
 * The maxlength decorator assures that a string field contains not more than a number of characters.
 *
 * @param len: the maximum length.
 * @param msg: A custom message.
 *
 */
/**
 * The maxlength decorator assures that a string field contains not more than a number of characters.
 *
 * @param len: the maximum length.
 * @param msg: A custom message.
 *
 */ function MaxLength(len, msg) {
    // the original decorator
    function maxLengthInternal(target, property) {
        new maxLengthInternalSetup(target, property.toString(), len, msg);
    }
    // return the decorator
    return maxLengthInternal;
}
var maxLengthInternalSetup = (function () {
    function maxLengthInternalSetup(target, key, len, msg) {
        this.target = target;
        this.key = key;
        this.len = len;
        this.msg = msg;
        // create a helper property to transport a meta data value
        Object.defineProperty(target, "__hasMaxLength__" + key, {
            value: this.len,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(target, "__errMaxLength__" + key, {
            value: this.msg || "The field " + this.key + " has max length of " + this.len + " characters",
            enumerable: false,
            configurable: false
        });
    }
    return maxLengthInternalSetup;
}());

/**
 * The minlength decorator assures that a string field contains at least a number of characters.
 *
 * @param len: the required length.
 * @param msg: A custom message.
 *
 */
/**
 * The minlength decorator assures that a string field contains at least a number of characters.
 *
 * @param len: the required length.
 * @param msg: A custom message.
 *
 */ function MinLength(len, msg) {
    // the original decorator
    function minLengthInternal(target, property) {
        new minLengthInternalSetup(target, property.toString(), len, msg);
    }
    // return the decorator
    return minLengthInternal;
}
var minLengthInternalSetup = (function () {
    function minLengthInternalSetup(target, key, len, msg) {
        this.target = target;
        this.key = key;
        this.len = len;
        this.msg = msg;
        // create a helper property to transport a meta data value
        Object.defineProperty(target, "__hasMinLength__" + key, {
            value: this.len,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(target, "__errMinLength__" + key, {
            value: this.msg || "The field " + this.key + " needs at least " + this.len + " characters",
            enumerable: false,
            configurable: false
        });
    }
    return minLengthInternalSetup;
}());

/**
 * The decorator that assures that a string field contains at least a number of characters and a minimum number, too.
 *
 * @param min: the required length.
 * @param max: the maximum length.
 * @param msg: A custom message.
 *
 */
/**
 * The decorator that assures that a string field contains at least a number of characters and a minimum number, too.
 *
 * @param min: the required length.
 * @param max: the maximum length.
 * @param msg: A custom message.
 *
 */ function StringLength(min, max, msg) {
    // the original decorator
    function stringLengthInternal(target, property) {
        new stringLengthInternalSetup(target, property.toString(), min, max, msg);
    }
    // return the decorator
    return stringLengthInternal;
}
var stringLengthInternalSetup = (function () {
    function stringLengthInternalSetup(target, key, min, max, msg) {
        this.target = target;
        this.key = key;
        this.min = min;
        this.max = max;
        this.msg = msg;
        // create a helper property to transport a meta data value
        Object.defineProperty(target, "__hasMaxLength__" + key, {
            value: this.max,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(target, "__errMaxLength__" + key, {
            value: this.msg || "The field " + this.key + " has max length of " + this.max + " characters",
            enumerable: false,
            configurable: false
        });
        // create a helper property to transport a meta data value
        Object.defineProperty(target, "__hasMinLength__" + key, {
            value: this.min,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(target, "__errMinLength__" + key, {
            value: this.msg || "The field " + this.key + " needs at least " + this.min + " characters",
            enumerable: false,
            configurable: false
        });
    }
    return stringLengthInternalSetup;
}());

/**
 * The decorator assures that a string field fullfilles a regular expression pattern.
 *
 * @param pattern: The expression as RegExp.
 * @param msg: A custom message.
 *
 */
/**
 * The decorator assures that a string field fullfilles a regular expression pattern.
 *
 * @param pattern: The expression as RegExp.
 * @param msg: A custom message.
 *
 */ function Pattern(pattern, msg) {
    // the original decorator
    function patternInternal(target, property) {
        new patternInternalSetup(target, property.toString(), pattern, msg);
    }
    // return the decorator
    return patternInternal;
}
var patternInternalSetup = (function () {
    function patternInternalSetup(target, key, reg, msg) {
        this.target = target;
        this.key = key;
        this.reg = reg;
        this.msg = msg;
        // create a helper property to transport a meta data value
        Object.defineProperty(this.target, "__hasPattern__" + key, {
            value: this.reg,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__errPattern__" + key, {
            value: this.msg || "The field " + this.key + " must fullfill the pattern " + this.reg,
            enumerable: false,
            configurable: false
        });
    }
    return patternInternalSetup;
}());

/**
 * Validates a field against an email pattern.
 * Based on "pattern", so in form one must use hasError('pattern') to get validation results.
 *
 * @param msg: A custom message. If not provided "The field ffff must contain a valid e-mail address."
 *             will be generated, while ffff is the property name.
 *
 */
/**
 * Validates a field against an email pattern.
 * Based on "pattern", so in form one must use hasError('pattern') to get validation results.
 *
 * @param msg: A custom message. If not provided "The field ffff must contain a valid e-mail address."
 *             will be generated, while ffff is the property name.
 *
 */ function Email(msg) {
    // the original decorator
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    function emailInternal(target, property) {
        new emailInternalSetup(target, property.toString(), pattern, msg);
    }
    // return the decorator
    return emailInternal;
}
var emailInternalSetup = (function () {
    function emailInternalSetup(target, key, reg, msg) {
        this.target = target;
        this.key = key;
        this.reg = reg;
        this.msg = msg;
        // create a helper property to transport a meta data value
        Object.defineProperty(this.target, "__hasPattern__" + key, {
            value: this.reg,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__errPattern__" + key, {
            value: this.msg || "The field " + this.key + " must contain a valid e-mail address.",
            enumerable: false,
            configurable: false
        });
    }
    return emailInternalSetup;
}());

/**
 * Validates a field against an range. Applies to numerical values or dates.
 *
 * The range's values are included in the valid range.
 *
 * @param from  The minimum value (included) as number or Date
 * @param to    The maximum value (included) as number or Date
 * @param msg   A custom message. If not provided "The field [field] does not fall into the range from [from] to [to]"
 *              will be generated, while [field] is the propertie's name.
 */
/**
 * Validates a field against an range. Applies to numerical values or dates.
 *
 * The range's values are included in the valid range.
 *
 * @param from  The minimum value (included) as number or Date
 * @param to    The maximum value (included) as number or Date
 * @param msg   A custom message. If not provided "The field [field] does not fall into the range from [from] to [to]"
 *              will be generated, while [field] is the propertie's name.
 */ function Range(from, to, msg) {
    // the original decorator
    function rangeInternal(target, property) {
        new rangeInternalSetup(target, property.toString(), from, to, msg);
    }
    // return the decorator
    return rangeInternal;
}
var rangeInternalSetup = (function () {
    function rangeInternalSetup(target, key, from, to, msg) {
        // property value
        this.target = target;
        this.key = key;
        this.from = from;
        this.to = to;
        this.msg = msg;
        // create a helper property to transport a meta data value
        Object.defineProperty(target, "__hasRangeFrom__" + key, {
            value: this.from,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(target, "__hasRangeTo__" + key, {
            value: this.to,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(target, "__errRange__" + key, {
            value: this.msg
                || "The field " + this.key + " does not fall into the range from " + this.from + " to " + this.to,
            enumerable: false,
            configurable: false
        });
    }
    return rangeInternalSetup;
}());

/**
 * The compare decorator, compares two field's values and
 * shows an error message on the decorated field. The other field (compared to) does
 * not has a decorator nor receives a message.
 *
 * @param withProperty: A string that represents the compared field's name.
 * @param msg: A custom message.
 *
 */
/**
 * The compare decorator, compares two field's values and
 * shows an error message on the decorated field. The other field (compared to) does
 * not has a decorator nor receives a message.
 *
 * @param withProperty: A string that represents the compared field's name.
 * @param msg: A custom message.
 *
 */ function Compare(withProperty, msg) {
    // the original decorator
    function compareInternal(target, property) {
        new compareInternalSetup(target, property.toString(), withProperty, msg);
    }
    // return the decorator
    return compareInternal;
}
var compareInternalSetup = (function () {
    function compareInternalSetup(target, key, withProperty, msg) {
        this.target = target;
        this.key = key;
        this.withProperty = withProperty;
        this.msg = msg;
        // create a helper property to transport a meta data value
        Object.defineProperty(this.target, "__hasCompareProperty__" + key, {
            value: true,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__withCompare__" + key, {
            value: this.withProperty,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__errCompareProperty__" + key, {
            value: this.msg
                || "The field " + this.key + " must have the same value as field " + this.withProperty,
            enumerable: false,
            configurable: false
        });
    }
    return compareInternalSetup;
}());

/**
 * The Display decorator.
 * @param name          The Name or Label that appears in forms or as header in grids.
 * @param order         If one uses AcAutoForm to create a whole form from a model, this controls the element's order.
 * @param description   A tooltip that can be used optionally.
 */
/**
 * The Display decorator.
 * @param name          The Name or Label that appears in forms or as header in grids.
 * @param order         If one uses AcAutoForm to create a whole form from a model, this controls the element's order.
 * @param description   A tooltip that can be used optionally.
 */ function Display(name, order, description) {
    if (order === void 0) { order = 0; }
    // the original decorator
    function displayInternal(target, property) {
        new displayInternalSetup(target, property.toString(), name, order, description);
    }
    // return the decorator
    return displayInternal;
}
var displayInternalSetup = (function () {
    function displayInternalSetup(target, key, name, order, description) {
        this.target = target;
        this.key = key;
        this.name = name;
        this.order = order;
        this.description = description;
        this.order = parseInt(this.order.toString());
        // create a helper property to transport a meta data value
        Object.defineProperty(this.target, "__displayName__" + this.key, {
            value: this.name,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__displayOrder__" + this.key, {
            value: this.order,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__displayDesc__" + this.key, {
            value: this.description,
            enumerable: false,
            configurable: false
        });
    }
    return displayInternalSetup;
}());

/**
 * The DisplayGroup decorator. Groups fields in auto forms.
 *
 * @param name          The Name or Label that appears in forms as the groups legend.
 * @param order         If one uses AcAutoForm to create a whole form from a model, this controls the groups order.
 * @param description   A tooltip that can be used optionally.
 */
/**
 * The DisplayGroup decorator. Groups fields in auto forms.
 *
 * @param name          The Name or Label that appears in forms as the groups legend.
 * @param order         If one uses AcAutoForm to create a whole form from a model, this controls the groups order.
 * @param description   A tooltip that can be used optionally.
 */ function DisplayGroup(name, order, description) {
    if (order === void 0) { order = 0; }
    // the original decorator
    function displayGroupInternal(target, property) {
        new displayGroupInternalSetup(target, property.toString(), name, order, description);
    }
    // return the decorator
    return displayGroupInternal;
}
var displayGroupInternalSetup = (function () {
    function displayGroupInternalSetup(target, key, name, order, description) {
        this.target = target;
        this.key = key;
        this.name = name;
        this.order = order;
        this.description = description;
        this.order = parseInt(this.order.toString());
        // create a helper property to transport a meta data value
        Object.defineProperty(this.target, "__isGrouped__" + this.key, {
            value: true,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__groupName__" + this.key, {
            value: this.name,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__groupOrder__" + this.key, {
            value: this.order,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__groupDesc__" + this.key, {
            value: this.description,
            enumerable: false,
            configurable: false
        });
    }
    return displayGroupInternalSetup;
}());

/**
 * The Placeholder decorator.
 *
 * The placeholder adds the given text as a watermark to any input fields.
 * There is no function in DataGrid.
 *
 * @param name          The Name that appears in form fields as a watermark.
 */
/**
 * The Placeholder decorator.
 *
 * The placeholder adds the given text as a watermark to any input fields.
 * There is no function in DataGrid.
 *
 * @param name          The Name that appears in form fields as a watermark.
 */ function Placeholder(name) {
    // the original decorator
    function placeholderInternal(target, property) {
        new placeholderInternalSetup(target, property.toString(), name);
    }
    // return the decorator
    return placeholderInternal;
}
var placeholderInternalSetup = (function () {
    function placeholderInternalSetup(target, key, name) {
        this.target = target;
        this.key = key;
        this.name = name;
        // create a helper property to transport a meta data value
        Object.defineProperty(this.target, "__watermark__" + this.key, {
            value: this.name,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__hasWatermark__" + this.key, {
            value: true,
            enumerable: false,
            configurable: false
        });
    }
    return placeholderInternalSetup;
}());

/**
 * The Template decorator.
 *
 * One can define the way a property gets rendered.
 * Currently supported:
 *  - TextArea
 *  - Calendar
 *  - Range
 *  - Number
 *  - Text
 *
 * The Calendar creates Date-fielsd. However, in casde of a datatype Date the date field will be created anyway.
 *
 * @param template        The Name that appears in form fields as a watermark.
 * @param params          Depending of template some additional values as a dictionary.
 */
/**
 * The Template decorator.
 *
 * One can define the way a property gets rendered.
 * Currently supported:
 *  - TextArea
 *  - Calendar
 *  - Range
 *  - Number
 *  - Text
 *
 * The Calendar creates Date-fielsd. However, in casde of a datatype Date the date field will be created anyway.
 *
 * @param template        The Name that appears in form fields as a watermark.
 * @param params          Depending of template some additional values as a dictionary.
 */ function TemplateHint(template, params) {
    // the original decorator
    function templateHintInternal(target, name) {
        new templateHintInternalSetup(target, name, template, params);
    }
    // return the decorator
    return templateHintInternal;
}
var templateHintInternalSetup = (function () {
    function templateHintInternalSetup(target, key, template, params) {
        this.target = target;
        this.key = key;
        this.template = template;
        this.params = params;
        // create a helper property to transport a meta data value
        Object.defineProperty(this.target, "__templateHint__" + this.key, {
            value: this.template,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__templateHintParams__" + this.key, {
            value: this.params,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty(this.target, "__hasTemplateHint__" + this.key, {
            value: true,
            enumerable: false,
            configurable: false
        });
    }
    return templateHintInternalSetup;
}());

/**
 * The Hidden decorator.
 *
 * The @see `DataGrid` does not show columns for properties tagged with @Hidden().
 * Fields in forms that render automatically
 * using the <ac-editor> component will render as <input type="hidden">.
 *
 * @param hide          Optional, default is true.
 * @param description   A tooltip that can be used optionally.
 */
/**
 * The Hidden decorator.
 *
 * The @see `DataGrid` does not show columns for properties tagged with @Hidden().
 * Fields in forms that render automatically
 * using the <ac-editor> component will render as <input type="hidden">.
 *
 * @param hide          Optional, default is true.
 * @param description   A tooltip that can be used optionally.
 */ function Hidden(hide) {
    if (hide === void 0) { hide = true; }
    // the original decorator
    function hiddenInternal(target, property) {
        new hiddenInternalSetup(target, property.toString(), hide);
    }
    // return the decorator
    return hiddenInternal;
}
var hiddenInternalSetup = (function () {
    function hiddenInternalSetup(target, key, hide) {
        this.target = target;
        this.key = key;
        this.hide = hide;
        // create a helper property to transport a meta data value
        Object.defineProperty(this.target, "__isHidden__" + this.key, {
            value: this.hide,
            enumerable: false,
            configurable: false
        });
    }
    return hiddenInternalSetup;
}());

/**
 * The Readonly decorator. The field is readonly in the form. It just renders grayed out
 * and handles the internals using default HTML5 techniques.
 *
 *
 * @param readonly      Optional, default is true.
 * @param description   A tooltip that can be used optionally.
 */
/**
 * The Readonly decorator. The field is readonly in the form. It just renders grayed out
 * and handles the internals using default HTML5 techniques.
 *
 *
 * @param readonly      Optional, default is true.
 * @param description   A tooltip that can be used optionally.
 */ function Readonly(readonly) {
    if (readonly === void 0) { readonly = true; }
    // the original decorator
    function readonlyInternal(target, property) {
        new readonlyInternalSetup(target, property.toString(), readonly);
    }
    // return the decorator
    return readonlyInternal;
}
var readonlyInternalSetup = (function () {
    function readonlyInternalSetup(target, key, readonly) {
        this.target = target;
        this.key = key;
        this.readonly = readonly;
        // create a helper property to transport a meta data value
        Object.defineProperty(this.target, "__isReadonly__" + this.key, {
            value: this.readonly,
            enumerable: false,
            configurable: false
        });
    }
    return readonlyInternalSetup;
}());

var EnumConverter = function (value, enumerationType) {
    var sanitizedValue = value.toString();
    var color = (enumerationType[sanitizedValue]);
    return color.toString();
};
var StringConverter = function (value) {
    if (value === null || value === undefined || typeof value === 'string') {
        return value;
    }
    return value.toString();
};
var BooleanConverter = function (value) {
    if (value === null || value === undefined || typeof value === 'boolean') {
        return value;
    }
    return value.toString() === 'true';
};
var NumberConverter = function (value) {
    if (value === null || value === undefined || typeof value === 'number') {
        return value;
    }
    return parseFloat(value.toString());
};
function InputConverter(converter, enumerationType) {
    return function (target, key) {
        if (converter === undefined) {
            var metadata = Reflect.getMetadata('design:type', target, key);
            if (metadata === undefined || metadata === null)
                throw new Error('The reflection metadata could not be found.');
            switch (metadata.name) {
                case 'String':
                    converter = StringConverter;
                    break;
                case 'Boolean':
                    converter = BooleanConverter;
                    break;
                case 'Number':
                    converter = NumberConverter;
                    break;
                default:
                    throw new Error('There is no converter for the given property type \'' + metadata.name + '\'.');
            }
        }
        var definition = Object.getOwnPropertyDescriptor(target, key);
        if (definition) {
            Object.defineProperty(target, key, {
                get: definition.get,
                set: function (newValue) {
                    if (enumerationType) {
                        definition.set(converter(newValue, enumerationType));
                    }
                    else {
                        definition.set(converter(newValue));
                    }
                },
                enumerable: true,
                configurable: true
            });
        }
        else {
            // create a helper to access the converter
            Object.defineProperty(target, key, {
                get: function () {
                    return this['__' + key];
                },
                set: function (newValue) {
                    this['__' + key] = enumerationType === undefined ? converter(newValue) : converter(newValue, enumerationType);
                },
                enumerable: false,
                configurable: true
            });
        }
    };
}

/**
 * Colors
 */
/**
 * Colors
 */ 
(function (Meaning) {
    Meaning[Meaning["Success"] = 0] = "Success";
    Meaning[Meaning["Info"] = 1] = "Info";
    Meaning[Meaning["Warning"] = 2] = "Warning";
    Meaning[Meaning["Danger"] = 3] = "Danger";
})(exports.Meaning || (exports.Meaning = {}));
/**
 * Semantic Meaning of buttons
 */

(function (Actions) {
    Actions[Actions["Default"] = 0] = "Default";
    Actions[Actions["Primary"] = 1] = "Primary";
    Actions[Actions["Secondary"] = 2] = "Secondary";
    Actions[Actions["Success"] = 3] = "Success";
    Actions[Actions["Info"] = 4] = "Info";
    Actions[Actions["Warning"] = 5] = "Warning";
    Actions[Actions["Danger"] = 6] = "Danger";
})(exports.Actions || (exports.Actions = {}));
/**
 * Sizes of menus and buttons
 */

(function (Sizes) {
    Sizes[Sizes["XSmall"] = 0] = "XSmall";
    Sizes[Sizes["Small"] = 1] = "Small";
    Sizes[Sizes["Medium"] = 2] = "Medium";
    Sizes[Sizes["Large"] = 3] = "Large";
    Sizes[Sizes["XLarge"] = 4] = "XLarge";
})(exports.Sizes || (exports.Sizes = {}));

var AcInfoBoxOptions = (function () {
    function AcInfoBoxOptions() {
        this.hasProgress = false;
        this.hasFooter = false;
        this.color = exports.Meaning.Danger;
    }
    return AcInfoBoxOptions;
}());

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The InfoBox is a rectangle area to show dynamic data. It has icon, text, and additional information.
 *
 * @param icon The name of an FontAwesome icon, such as "fa-circle"
 * @param text The text that appears prominently
 * @param number A number that covers the element as the value
 * @param footerText A smaller explanation text at the end
 * @param footerLink A link, suitable for [routerLink] that is being invoked from the footerText
 * @param progressValue A progress Value that creates a progress bar position
 * @param progressText A progress Text that replaces the footerText
 * @param color The background color
 */
exports.AcInfoBox = (function () {
    function AcInfoBox() {
        this.color = exports.Meaning.Info;
        this.text = 'Demo';
        this.progressValue = 0;
        this.progressText = '';
        this.footerLink = '/';
        this.footerText = '';
        this.icon = 'fa-user';
        this.options = new AcInfoBoxOptions();
    }
    AcInfoBox.prototype.getColor = function (type) {
        if (this.color) {
            var color = EnumConverter(this.color, exports.Meaning).toLowerCase();
            return type + "-" + color;
        }
    };
    return AcInfoBox;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.AcInfoBox.prototype, "icon", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.AcInfoBox.prototype, "text", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.AcInfoBox.prototype, "number", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.AcInfoBox.prototype, "footerText", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.AcInfoBox.prototype, "footerLink", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Number)
], exports.AcInfoBox.prototype, "progressValue", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.AcInfoBox.prototype, "progressText", void 0);
__decorate([
    _angular_core.Input(),
    InputConverter(EnumConverter, exports.Meaning) // need EnumConverter, as otherwise metadata returns Number
    ,
    __metadata("design:type", Number)
], exports.AcInfoBox.prototype, "color", void 0);
__decorate([
    _angular_core.Input(),
    __metadata("design:type", AcInfoBoxOptions)
], exports.AcInfoBox.prototype, "options", void 0);
exports.AcInfoBox = __decorate([
    _angular_core.Component({
        selector: 'ac-infobox',
        template: "<div class=\"card card-inverse\" [ngClass]=\"getColor('card')\">\n                  <div class=\"card-block\" [ngClass]=\"getColor('bg')\">\n                    <div class=\"rotate\">\n                        <i class=\"fa fa-5x\" [ngClass]=\"icon\"></i>\n                    </div>\n                    <h6 class=\"text-uppercase\">{{ text }}</h6>\n                    <h1 class=\"display-1\">{{ number }}</h1>\n                    <div class=\"progress\" *ngIf=\"options.hasProgress\">\n                        <div class=\"progress-bar\" [style.width]=\"progressValue\"></div>\n                    </div>\n                    <span class=\"progress-description\" *ngIf=\"options.hasProgress\">\n                        {{progressText}}\n                    </span>\n                    <span class=\"progress\" *ngIf=\"options.hasFooter\">\n                        <a href=\"#\" [routerLink]=\"footerLink\">{{foooterText}}</a>\n                    </span>\n                  </div>\n                </div>"
    }) //
    ,
    __metadata("design:paramtypes", [])
], exports.AcInfoBox);

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.AcBreadCrumb = (function () {
    function AcBreadCrumb(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.home = 'Home';
        this.icon = 'fa-dashboard';
        this.breadcrumbs = new Array();
    }
    AcBreadCrumb.prototype.ngOnInit = function () {
        var _this = this;
        // put data: { "breadcrumb": true, "subtitle": "Sub Route Name" } in the router config for those items that shall appear in the breadcrumb 
        var ROUTE_DATA_BREADCRUMB = 'breadcrumb';
        var ROUTE_DATA_SUBTITLE = 'subtitle';
        // subscribe to the NavigationEnd event
        this.router.events.filter(function (event) { return event instanceof _angular_router.NavigationEnd; }).subscribe(function (event) {
            // reset breadcrumbs
            _this.breadcrumbs = new Array();
            // get the root route
            var currentRoute = _this.activatedRoute.root;
            // set the url to an empty string
            var url = '';
            // iterate from activated route to children
            while (currentRoute.children.length > 0) {
                var childrenRoutes = currentRoute.children;
                // iterate over each children
                childrenRoutes.forEach(function (route) {
                    // set currentRoute to this route
                    currentRoute = route;
                    // verify this is the primary route
                    if (route.outlet !== _angular_router.PRIMARY_OUTLET) {
                        return;
                    }
                    // verify the custom data property "breadcrumb" is specified on the route
                    if (!route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                        return;
                    }
                    // get the route's URL segment
                    var routeURL = route.snapshot.url.map(function (segment) { return segment.path; }).join("/");
                    // append route URL to URL
                    url += "/" + routeURL;
                    // add breadcrumb
                    var breadcrumb = {
                        label: route.snapshot.data[ROUTE_DATA_SUBTITLE],
                        params: route.snapshot.params,
                        url: url
                    };
                    _this.breadcrumbs.push(breadcrumb);
                });
            }
        });
    };
    return AcBreadCrumb;
}());
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", String)
], exports.AcBreadCrumb.prototype, "icon", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata$1("design:type", String)
], exports.AcBreadCrumb.prototype, "home", void 0);
exports.AcBreadCrumb = __decorate$1([
    _angular_core.Component({
        selector: 'ac-breadcrumb',
        template: "<ol class=\"list-inline breadcrumb\" >\n                 <li class=\"list-inline-item\"><a routerLink=\"\"><i class=\"fa \" [ngClass]=\"icon\"></i>{{ home }}</a></li>\n                 <li class=\"list-inline-item\" *ngFor=\"let breadcrumb of breadcrumbs; let lastItem=last\">\n                    <a [routerLink]=\"[breadcrumb.url, breadcrumb.params]\">{{ breadcrumb.label }}</a>\n                    <span *ngIf=\"!lastItem\">&nbsp;/&nbsp;</span>\n                 </li>\n               </ol>",
        styles: [
            ".breadcrumb {\n            position: relative;\n            margin-top: 5px;\n            margin-bottom: 5px;\n            top: 0;\n            right: 0;\n            float: none;\n            padding: 7px 5px;\n            padding-left: 10px;\n            font-size: 12px;\n            border-radius: 2px;\n         }"
        ]
    }) //
    ,
    __metadata$1("design:paramtypes", [_angular_router.ActivatedRoute, _angular_router.Router])
], exports.AcBreadCrumb);

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.AcWebPart = (function () {
    function AcWebPart() {
        this.colorclass = 'box-danger';
        this.title = 'Demo';
        this.showTools = true;
    }
    AcWebPart.prototype.getDesign = function () {
        var classes = {
            'box-solid': this.solidHeader
        };
        if (this.colorclass) {
            classes[this.colorclass] = true;
        }
        return classes;
    };
    return AcWebPart;
}());
__decorate$2([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], exports.AcWebPart.prototype, "title", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], exports.AcWebPart.prototype, "colorclass", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata$2("design:type", String)
], exports.AcWebPart.prototype, "footer", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata$2("design:type", Boolean)
], exports.AcWebPart.prototype, "showTools", void 0);
__decorate$2([
    _angular_core.Input(),
    __metadata$2("design:type", Boolean)
], exports.AcWebPart.prototype, "solidHeader", void 0);
exports.AcWebPart = __decorate$2([
    _angular_core.Component({
        selector: 'ac-webpart',
        template: "<div class=\"box\" [ngClass]=\"getDesign()\">\n                <div class=\"box-header\">\n                  <h3 class=\"box-title\">{{ title }}</h3>\n                  <div class=\"box-tools pull-right\" *ngIf=\"showTools\">\n                    <button type=\"button\" class=\"btn btn-box-tool\" \n                            (click)=\"collapse()\"><i class=\"fa fa-minus\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-box-tool\" \n                            (click)=\"remove()\"><i class=\"fa fa-remove\"></i>\n                    </button>\n                  </div>\n                </div>\n                <div class=\"box-body\">\n                    <ng-content></ng-content>\n                </div>\n                <div class=\"box-footer\">{{ footer }}</div>\n              </div>"
    }) //
    ,
    __metadata$2("design:paramtypes", [])
], exports.AcWebPart);

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.AcDataGridPagination = (function () {
    function AcDataGridPagination() {
        this.pageNumberChanged = new _angular_core.EventEmitter();
        this.currentPageNumber = 1;
    }
    AcDataGridPagination.prototype.ngOnInit = function () {
        this.setCurrentPage(1);
    };
    AcDataGridPagination.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['maxPageIndex']) {
            var change = changes['maxPageIndex'];
            if (this.currentPageNumber > change.currentValue) {
                // throws ExpressionChangedAfterItHasBeenCheckedException
                // if there's no setTimeout.
                // no need to add setTimeout if ngOnChanges 
                // is fired after changes made on root component.
                setTimeout(function () { return _this.setCurrentPage(1); }, 1);
            }
        }
    };
    AcDataGridPagination.prototype.setCurrentPage = function (pageNumber, event) {
        if (event) {
            event.preventDefault();
        }
        if (pageNumber === 0 || pageNumber > this.maxPageIndex
            || pageNumber === this.currentPageNumber) {
            return;
        }
        this.pageNumberChanged.emit(pageNumber);
        this.currentPageNumber = pageNumber;
    };
    AcDataGridPagination.prototype.range = function (min, max) {
        var result = new Array();
        for (var i = min; i <= max; i++) {
            result.push(i);
        }
        return result;
    };
    Object.defineProperty(AcDataGridPagination.prototype, "pageStartNumber", {
        get: function () {
            var startNumber = this.currentPageNumber <= 4
                ? 1
                : this.currentPageNumber >= this.maxPageIndex - 3
                    ? this.maxPageIndex - 6
                    : this.currentPageNumber - 3;
            return startNumber < 1 ? 1 : startNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcDataGridPagination.prototype, "pageEndNumber", {
        get: function () {
            var pageEnd = this.pageStartNumber + 6;
            return pageEnd > this.maxPageIndex ? this.maxPageIndex : pageEnd;
        },
        enumerable: true,
        configurable: true
    });
    return AcDataGridPagination;
}());
__decorate$3([
    _angular_core.Input(),
    __metadata$3("design:type", Number)
], exports.AcDataGridPagination.prototype, "maxPageIndex", void 0);
__decorate$3([
    _angular_core.Output(),
    __metadata$3("design:type", Object)
], exports.AcDataGridPagination.prototype, "pageNumberChanged", void 0);
exports.AcDataGridPagination = __decorate$3([
    _angular_core.Component({
        selector: 'ac-pagination',
        styles: [
            ".pagination {\n      display: inline-block;\n      padding-left: 0;\n      margin: 20px 0;\n      border-radius: 4px;\n    }",
            ".pagination > li {\n      display: inline;\n    }",
            ".pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left -radius: 4px;\n      border-top-left-radius: 4px;\n    }",
            ".pagination >.disabled > a, .pagination >.disabled > a:focus, .pagination >.disabled > a:hover, .pagination >.disabled > span, .pagination >.disabled > span:focus, .pagination >.disabled > span:hover {\n      color: #777;\n      background-color: #fff;\n      border-color: #ddd;\n      cursor: not-allowed;\n    }",
            ".pagination > li > a, .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 6px 12px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #337ab7;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px;\n    }"
        ],
        template: "\n    <div>\n        <ul class=\"pagination float-right\">\n            <li [class.disabled]=\"currentPageNumber === 1 || !maxPageIndex\">\n                <a href (click)=\"setCurrentPage(1, $event)\" aria-label=\"Previous\">\n                    <span aria-hidden=\"true\">\u00AB</span>\n                </a>\n            </li>\n            <li [class.disabled]=\"currentPageNumber === 1 || !maxPageIndex\">\n                <a href aria-label=\"Previous\" \n                    (click)=\"setCurrentPage(currentPageNumber - 1, $event)\">\n                    <span aria-hidden=\"true\">\u2039</span>\n                </a>\n            </li>\n            <li *ngFor=\"let index of range(pageStartNumber, pageEndNumber)\" \n                        [class.active]=\"currentPageNumber === index\">\n                <a href (click)=\"setCurrentPage(index, $event)\">\n                    <span aria-hidden=\"true\">{{ index }}</span>\n                </a>\n            </li>\n            <li [class.disabled]=\"currentPageNumber === maxPageIndex \n                                  || !maxPageIndex\">\n                <a href (click)=\"setCurrentPage(currentPageNumber + 1, $event)\" aria-label=\"Last\">\n                    <span aria-hidden=\"true\">\u203A</span>\n                </a>\n            </li>\n            <li [class.disabled]=\"currentPageNumber === maxPageIndex \n                                  || !maxPageIndex\">\n                <a href (click)=\"setCurrentPage(maxPageIndex, $event)\" aria-label=\"Last\">\n                    <span aria-hidden=\"true\">\u00BB</span>\n                </a>\n            </li>\n        </ul>\n    </div>    \n    "
    })
], exports.AcDataGridPagination);

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Create a single tab for tab views.
 * The link shall be a regular route array.
 */
var AcTab = (function () {
    /**
     * Ctor to create Tabs definitions
     * @param link: Array of routes or outlet routes
     * @param text: Text shown on tab
     * @param active: Set class for active tab
     * @param disabled: Optionally set the tab inactive
     */
    function AcTab(link, text, active, disabled) {
        this.link = link;
        this.text = text;
        this.active = active;
        this.disabled = disabled;
    }
    return AcTab;
}());
/**
 * A collection of tabs used to create a tabbed view.
 * The tabs' content is pulled from routes / child routes.
 */
var AcTabData = (function () {
    function AcTabData(items) {
        this.tabs = items;
    }
    return AcTabData;
}());
/**
 * The Tab Component. It looks like a Bootstrap component, but the active part
 * is the Angular router, so no data-toggle is required.
 */
exports.AcTabs = AcTabs_1 = (function () {
    function AcTabs(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.limitBreadcrumb = false;
    }
    AcTabs.prototype.activateTab = function (tab) {
        this.currentTab = tab;
        this.tabs.tabs.forEach(function (t) { return t.active = false; });
        tab.active = true;
    };
    AcTabs.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to the NavigationEnd event
        this.router.events.filter(function (event) { return event instanceof _angular_router.NavigationEnd; }).subscribe(function (event) {
            // get the root route
            var currentRoute = _this.activatedRoute.root;
            // iterate from activated route to children
            if (currentRoute.children.length > 0) {
                _this.recurseRouteChildren(currentRoute);
            }
        });
    };
    AcTabs.prototype.recurseRouteChildren = function (currentRoute) {
        var _this = this;
        var url = '';
        var childrenRoutes = currentRoute.children;
        // iterate over each children
        childrenRoutes.forEach(function (route) {
            // verify this is the primary route
            if (route.outlet !== _angular_router.PRIMARY_OUTLET) {
                return;
            }
            // verify the custom data property "breadcrumb" is specified on the route,
            // limitBreadcrumb must be set to true to activate this
            if (!route.snapshot.data.hasOwnProperty(AcTabs_1.ROUTE_DATA_BREADCRUMB) && _this.limitBreadcrumb) {
                return;
            }
            // get the route's URL segment
            var routeURL = route.snapshot.url.map(function (segment) { return segment.path; }).join('/');
            // add router data as current tab
            // in case of subroutes it looks like this: link[0] = /editor, link[1] = /edit/:id
            // regex checks /xxx/:nn/
            var rx = new RegExp('^((\/.*?)\/\:[^\/]*?\/?)$');
            var lastmatch = function (l) { return l.match(rx) && l.match(rx).filter(function (m) { return m === l; }).length > 0; };
            var matchTab = _this.tabs.tabs.filter(function (t) {
                if (typeof (t.link) === 'string') {
                    return t.link == routeURL || lastmatch(t.link);
                }
                else {
                    return (t.link.length > 0
                        && t.link.filter(function (sublink) { return sublink === routeURL || lastmatch(sublink); }).length > 0);
                }
            });
            if (matchTab && matchTab.length == 1) {
                _this.activateTab(matchTab[0]);
                return;
            }
            if (route.children.length > 0) {
                _this.recurseRouteChildren(route);
            }
        });
    };
    return AcTabs;
}());
// put data: { "breadcrumb": true, "subtitle": "Sub Route Name" }
// in the router config for those items that shall appear in the breadcrumb
exports.AcTabs.ROUTE_DATA_BREADCRUMB = 'breadcrumb';
exports.AcTabs.ROUTE_DATA_SUBTITLE = 'subtitle';
__decorate$4([
    _angular_core.Input(),
    __metadata$4("design:type", AcTabData)
], exports.AcTabs.prototype, "tabs", void 0);
__decorate$4([
    _angular_core.Input(),
    __metadata$4("design:type", Object)
], exports.AcTabs.prototype, "limitBreadcrumb", void 0);
__decorate$4([
    _angular_core.Output(),
    __metadata$4("design:type", AcTab)
], exports.AcTabs.prototype, "currentTab", void 0);
exports.AcTabs = AcTabs_1 = __decorate$4([
    _angular_core.Component({
        selector: 'ac-tabs',
        template: "<ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li class=\"nav-item\" *ngFor=\"let tab of tabs.tabs\" [ngClass]=\"{ active: tab.active }\">\n                    <a class=\"nav-link \" *ngIf=\"!tab.disabled\"                        \n                       (click)=\"activateTab(tab)\"\n                       [ngClass]=\"{ active: tab.active }\"\n                       href=\"#\" [routerLink]=\"tab.link\"\n                       role=\"tab\" >{{ tab.text }}</a>\n                    <a class=\"nav-link text-muted\" *ngIf=\"tab.disabled\"                      \n                       href=\"#\" disabled=\"disabled\" onclick=\"return false;\"\n                       role=\"tab\" >{{ tab.text }}</a>\n                </li>\n            </ul>\n            <div class=\"tab-content\">\n              <br />\n              <div role=\"tabpanel\" class=\"tab-pane active\">\n                <router-outlet></router-outlet>\n              </div>\n            </div>\n"
    }) //
    ,
    __metadata$4("design:paramtypes", [_angular_router.ActivatedRoute, _angular_router.Router])
], exports.AcTabs);
var AcTabs_1;

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.AcLoaderIcon = (function () {
    function AcLoaderIcon() {
        this.rotateSpeed = 1;
        this.color = '#FF0000';
    }
    return AcLoaderIcon;
}());
__decorate$5([
    _angular_core.Input(),
    __metadata$5("design:type", Number)
], exports.AcLoaderIcon.prototype, "rotateSpeed", void 0);
__decorate$5([
    _angular_core.Input(),
    __metadata$5("design:type", String)
], exports.AcLoaderIcon.prototype, "color", void 0);
exports.AcLoaderIcon = __decorate$5([
    _angular_core.Component({
        selector: 'ac-loadericon',
        template: "\n<svg width=\"36px\" height=\"36px\" viewBox=\"0 0 36 36\" version=\"1.1\" \n     xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"Group-3\" [attr.fill]=\"color\">\n            <rect id=\"Rectangle-1\"  x=\"16.5873418\" y=\"0\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-2\" fill-opacity=\"0.58\"  x=\"16.678481\" y=\"26.8629442\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-4\" fill-opacity=\"0.79\"  \n            transform=\"translate(31.530380, 17.954315) rotate(-270.000000) translate(-31.530380, -17.954315) \" \n            x=\"30.0303797\" y=\"13.3857868\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-3\" fill-opacity=\"0.37\"  \n            transform=\"translate(4.735443, 18.045685) rotate(-270.000000) translate(-4.735443, -18.045685) \" \n            x=\"3.23544304\" y=\"13.4771574\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-4\" fill-opacity=\"0.72\"  \n            transform=\"translate(29.758244, 24.676171) rotate(-240.000000) translate(-29.758244, -24.676171) \" \n            x=\"28.2582441\" y=\"20.1076435\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-3\" fill-opacity=\"0.3\"  \n            transform=\"translate(6.507579, 11.323829) rotate(-240.000000) translate(-6.507579, -11.323829) \" \n            x=\"5.00757864\" y=\"6.75530065\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-4\" fill-opacity=\"0.65\"  \n            transform=\"translate(24.871110, 29.609153) rotate(-210.000000) translate(-24.871110, -29.609153) \" \n            x=\"23.37111\" y=\"25.0406255\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-3\" fill-opacity=\"0.23\"  \n            transform=\"translate(11.394713, 6.390847) rotate(-210.000000) translate(-11.394713, -6.390847) \" \n            x=\"9.89471277\" y=\"1.82231869\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-4\" fill-opacity=\"0.51\"  \n            transform=\"translate(11.473642, 29.654839) rotate(-150.000000) translate(-11.473642, -29.654839) \" \n            x=\"9.97364166\" y=\"25.0863108\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-3\" fill-opacity=\"0.93\"  \n            transform=\"translate(24.792181, 6.345161) rotate(-150.000000) translate(-24.792181, -6.345161) \" \n            x=\"23.2921811\" y=\"1.77663341\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-4\" fill-opacity=\"0.44\"  \n            transform=\"translate(6.553148, 24.755301) rotate(-120.000000) translate(-6.553148, -24.755301) \" \n            x=\"5.05314826\" y=\"20.1867727\" width=\"3\" height=\"9.13705584\"></rect>\n            <rect id=\"Rectangle-3\" fill-opacity=\"0.86\"  \n            transform=\"translate(29.712675, 11.244699) rotate(-120.000000) translate(-29.712675, -11.244699) \" \n            x=\"28.2126745\" y=\"6.67617143\" width=\"3\" height=\"9.13705584\"></rect>\n        </g>\n<animateTransform attributeName=\"transform\"\n            type=\"rotate\"\n            from=\"0 18 18\"\n            to=\"360 18 18\"\n            begin=\"0s\"\n            [attr.dur]=\"rotateSpeed + 's'\"\n            repeatCount=\"indefinite\"\n        />\n    </g>\n</svg>\n"
    }),
    __metadata$5("design:paramtypes", [])
], exports.AcLoaderIcon);

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The Editor Widget. Creates a field with all required validators using decorators and forms service.
 */
exports.AcEditor = (function () {
    function AcEditor() {
        this.type = 'text';
        this.inline = true;
        // range only
        this.fromValue = 0;
        this.toValue = 100;
        this.waterMark = '';
        this.readonly = false;
        this.params = new Array();
    }
    AcEditor.prototype.getParams = function (key) {
        return this.first(this.params.filter(function (e) { return e.key === key; }), 0);
    };
    AcEditor.prototype.first = function (array, n) {
        if (array == null) {
            return void 0;
        }
        if (n == null) {
            return array[0];
        }
        if (n < 0) {
            return [];
        }
        return array.slice(0, n);
    };
    AcEditor.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        // this is set by FormValidatorService
        var editorModel = this.userForm['__editorModel__'];
        // get type from form
        if (editorModel) {
            // get elementary types, this might get overwritten later according to decorators found
            if (typeof editorModel[this.name] === 'string') {
                this.type = 'text';
            }
            if (typeof editorModel[this.name] === 'boolean') {
                this.type = 'boolean';
            }
            if (typeof editorModel[this.name] === 'number') {
                this.type = 'number';
            }
            if (editorModel[this.name] instanceof Date) {
                this.type = 'calendar';
            }
            // make an instance to read the properties
            this.label = editorModel["__displayName__" + this.name] || this.label || this.name;
            this.tooltip = editorModel["__displayDesc__" + this.name] || this.tooltip || this.name;
            // render as range id there is a range definition
            if (editorModel["__hasRangeFrom__" + this.name] && Number(editorModel["__hasRangeFrom__" + this.name])) {
                this.fromValue = editorModel["__hasRangeFrom__" + this.name];
                this.type = 'range';
            }
            if (editorModel["__hasRangeTo__" + this.name] && Number(editorModel["__hasRangeTo__" + this.name])) {
                this.toValue = editorModel["__hasRangeTo__" + this.name];
                this.type = 'range';
            }
            // placeholder
            if (editorModel["__hasWatermark__" + this.name]) {
                this.waterMark = editorModel["__watermark__" + this.name];
            }
            // templates
            if (editorModel["__hasTemplateHint__" + this.name]) {
                this.type = editorModel["__templateHint__" + this.name].toLowerCase();
                if (editorModel["__templateHintParams__" + this.name]) {
                    this.params = editorModel["__templateHintParams__" + this.name];
                }
            }
            // render hidden fields as hidden even in forms
            if (editorModel["__isHidden__" + this.name]) {
                this.type = 'hidden';
            }
            // check readonly
            if (editorModel["__isReadonly__" + this.name]) {
                this.readonly = !!editorModel["__isReadonly__" + this.name];
            }
        }
    };
    AcEditor.prototype.onValueChanged = function (data) {
        // check validation on change
        this.errors = new Array();
        for (var error in this.userForm.controls[this.name].errors) {
            this.errors.push(error);
        }
    };
    return AcEditor;
}());
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", String)
], exports.AcEditor.prototype, "name", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", Object)
], exports.AcEditor.prototype, "type", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", String)
], exports.AcEditor.prototype, "label", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", String)
], exports.AcEditor.prototype, "tooltip", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", _angular_forms.FormGroup)
], exports.AcEditor.prototype, "userForm", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", Object)
], exports.AcEditor.prototype, "inline", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", Object)
], exports.AcEditor.prototype, "enumValues", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", Object)
], exports.AcEditor.prototype, "fromValue", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", Object)
], exports.AcEditor.prototype, "toValue", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", Object)
], exports.AcEditor.prototype, "waterMark", void 0);
__decorate$6([
    _angular_core.Input(),
    __metadata$6("design:type", Object)
], exports.AcEditor.prototype, "readonly", void 0);
__decorate$6([
    _angular_core.Output(),
    _angular_core.Input(),
    __metadata$6("design:type", Object)
], exports.AcEditor.prototype, "value", void 0);
exports.AcEditor = __decorate$6([
    _angular_core.Component({
        selector: 'ac-editor',
        styles: [
            'input[type="checkbox"] { display: none; }',
            'input[type="checkbox"] + label:before { font-family: FontAwesome; }',
            'input[type="checkbox"] + label:before { content: "\\f096"; }',
            'input[type="checkbox"]:checked + label:before { content: "\\f046"; }',
            "input[type=\"checkbox\"] + label { \n      display:inline-block; width:15px; height: 20px; margin: -1px 4px 0 0; vertical-align:middle; cursor: pointer; \n    }",
        ],
        template: "<div class=\"form-group row\" \n                  [formGroup]=\"userForm\" *ngIf=\"type != 'hidden'\"\n                  [ngClass]=\"{ 'has-danger': !userForm.controls[name].valid && userForm.controls[name].touched }\">\n              <label class=\"col-form-label col-md-3 col-sm-10\"\n                     [attr.for]=\"name\" \n                     [attr.title]=\"tooltip\" >{{ label }}: </label>\n              <div [ngClass]=\"{ 'col-md-7 col-sm-10': inline }\">\n                <textarea *ngIf=\"type == 'textarea'\" \n                          class=\"form-control\" \n                          [id]=\"name\" \n                          [readOnly]='readonly'\n                          [formControlName]=\"name\" \n                          [attr.rows]=\"getParams('rows')\" \n                          [attr.cols]=\"getParams('cols')\">\n                </textarea>\n                <select *ngIf=\"type == 'enum'\" class=\"form-control\" [id]=\"name\" \n                        [formControlName]=\"name\" [disabled]='readonly'>\n                  <option *ngFor=\"let option of enumValues\" [value]=\"option.key\">{{option.val}}</option>\n                </select>\n                <input *ngIf=\"type == 'range'\" type=\"range\" \n                       class=\"form-control\" \n                       [placeholder]=\"waterMark\" \n                       [attr.minvalue]=\"fromValue\" \n                       [attr.maxvalue]=\"toValue\" \n                       [attr.min]=\"fromValue\" \n                       [attr.max]=\"toValue\" \n                       [id]=\"name\" \n                       [formControlName]=\"name\" \n                       [title]=\"tooltip\" />\n                <input *ngIf=\"type == 'calendar'\" type=\"date\"\n                       class=\"form-control\" \n                       [placeholder]=\"waterMark\" \n                       [readOnly]='readonly'\n                       [id]=\"name\" \n                       [formControlName]=\"name\" \n                       [title]=\"tooltip\" />\n                <input *ngIf=\"type == 'number'\" type=\"number\" \n                       class=\"form-control\" \n                       [placeholder]=\"waterMark\" \n                       [readOnly]='readonly'\n                       [id]=\"name\" \n                       [formControlName]=\"name\" \n                       [title]=\"tooltip\" />\n                <input *ngIf=\"type == 'boolean'\" type=\"checkbox\" \n                       class=\"form-control\" \n                       [readOnly]='readonly'\n                       [id]=\"name\" \n                       [formControlName]=\"name\" \n                       [title]=\"tooltip\" />\n                <label *ngIf=\"type == 'boolean'\" [attr.for]=\"name\"></label>\n                <input *ngIf=\"type == 'text' || type == ''\" [placeholder]=\"waterMark\" \n                       [readOnly]='readonly'\n                       type=\"text\" class=\"form-control\" [id]=\"name\" [formControlName]=\"name\" />\n                <span class=\"fa fa-warning text-danger form-control-feedback\" \n                      [hidden]=\"userForm.controls[name].valid || userForm.controls[name].pristine\"></span>\n                <small class=\"text-danger\" \n                       [hidden]=\"userForm.controls[name].valid || userForm.controls[name].pristine\">\n                  <span *ngFor=\"let error of errors\">{{ userForm.controls[name].messages[error] }}</span>\n                </small>\n              </div>\n             </div>\n             <div [formGroup]=\"userForm\">\n              <input *ngIf=\"type == 'hidden'\" [id]=\"name\" [formControlName]=\"name\" type=\"hidden\" />\n             </div>\n"
    }) //
    ,
    __metadata$6("design:paramtypes", [])
], exports.AcEditor);

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This component creates a complete editor out of a viewmodel.
 * It creates one field for each property not decorated with @Hidden.
 *
 */
exports.AcAutoForm = (function () {
    function AcAutoForm() {
        /**
         * Ungrouped element will appear at the end, after all groupes.
         * If there are no groups this will be ignored. Optional.
         */
        this.ungroupedAfter = true;
        this.editors = new Array();
        this.groups = new Array();
    }
    AcAutoForm.prototype.ngOnInit = function () {
        // take all controls as is
        var hasDecorators = (this.formGroup['__editorModel__']);
        var _loop_1 = function () {
            var displayOrder = 0;
            var groupOrder = 0;
            var groupName;
            var groupDesc = void 0;
            var isInGroup = false;
            if (hasDecorators) {
                displayOrder = this_1.formGroup['__editorModel__']["__displayOrder__" + controlName];
                isInGroup = !!this_1.formGroup['__editorModel__']["__isGrouped__" + controlName];
                if (isInGroup) {
                    groupName = this_1.formGroup['__editorModel__']["__groupName__" + controlName];
                    groupOrder = this_1.formGroup['__editorModel__']["__groupOrder__" + controlName];
                    groupDesc = this_1.formGroup['__editorModel__']["__groupDesc__" + controlName];
                }
            }
            if (!isInGroup) {
                // if not part of any group just push to main group
                this_1.editors.push({
                    key: displayOrder,
                    editor: controlName
                });
            }
            else {
                // check if group already exists
                var existingGroupArray = this_1.groups.filter(function (g) { return g.name === groupName; });
                groupExists = existingGroupArray.length === 1;
                if (!groupExists) {
                    this_1.groups.push({
                        key: groupOrder,
                        name: groupName,
                        desc: groupDesc,
                        editors: new Array()
                    });
                }
                // add field to existing group (assume that here the group always exists)
                var existingGroup = this_1.groups.filter(function (g) { return g.name === groupName; })[0];
                // and store
                existingGroup.editors.push({
                    key: displayOrder,
                    editor: controlName
                });
            }
        };
        var this_1 = this, groupExists;
        // loop through all fields
        for (var controlName in this.formGroup.controls) {
            _loop_1();
        }
        // check the display decorator and sort
        this.editors.sort(function (e, n) { return e.key - n.key; });
        // sort groups
        this.groups.sort(function (e, n) { return e.key - n.key; });
    };
    AcAutoForm.prototype.grouped = function () {
        return this.groups && this.groups.length > 0;
    };
    return AcAutoForm;
}());
__decorate$7([
    _angular_core.Input(),
    __metadata$7("design:type", _angular_forms.FormGroup)
], exports.AcAutoForm.prototype, "formGroup", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$7("design:type", Object)
], exports.AcAutoForm.prototype, "ungroupedAfter", void 0);
exports.AcAutoForm = __decorate$7([
    _angular_core.Component({
        selector: 'ac-autoform',
        styles: [
            'fieldset { border-top: 1px silver solid; padding: 10px; }',
            'legend { width: auto; padding-left: 10px; padding-right: 10px; font-size: 1em;}'
        ],
        template: "<ng-content></ng-content>\n               <ng-container *ngIf=\"!ungroupedAfter\">\n                   <ac-editor *ngFor=\"let editor of editors\" [name]=\"editor.editor\" [userForm]=\"formGroup\"></ac-editor>\n               </ng-container>\n               <ng-container *ngIf=\"grouped()\">\n                <fieldset *ngFor=\"let group of groups\">\n                    <legend [attr.title]=\"group.desc\" *ngIf=\"group.name\">{{ group.name }}</legend>\n                    <ac-editor *ngFor=\"let editor of group.editors\" \n                               [name]=\"editor.editor\" [userForm]=\"formGroup\"></ac-editor>\n                </fieldset>                 \n               </ng-container>\n               <ng-container *ngIf=\"ungroupedAfter\">\n                   <ac-editor *ngFor=\"let editor of editors\" [name]=\"editor.editor\" [userForm]=\"formGroup\"></ac-editor>\n               </ng-container>\n              "
    }),
    __metadata$7("design:paramtypes", [])
], exports.AcAutoForm);

/** The state of node */
var AcTreeNodeState;
(function (AcTreeNodeState) {
    AcTreeNodeState[AcTreeNodeState["undefined"] = 0] = "undefined";
    AcTreeNodeState[AcTreeNodeState["checked"] = 1] = "checked";
    AcTreeNodeState[AcTreeNodeState["disabled"] = 2] = "disabled";
    AcTreeNodeState[AcTreeNodeState["expanded"] = 4] = "expanded";
    AcTreeNodeState[AcTreeNodeState["selected"] = 8] = "selected";
})(AcTreeNodeState || (AcTreeNodeState = {}));
/** The view options of node */
var AcTreeNodeOptions = (function () {
    function AcTreeNodeOptions(options) {
        if (options) {
        }
    }
    return AcTreeNodeOptions;
}());

var AcTreeNode = (function () {
    function AcTreeNode(options, nodes) {
        this.options = options || new AcTreeNodeOptions();
        if (nodes && nodes instanceof Array) {
            this.children = nodes;
        }
        else {
            if (nodes) {
                this.children = [nodes];
            }
        }
        this.stateChange = new _angular_core.EventEmitter();
        this.state = AcTreeNodeState.undefined;
    }
    Object.defineProperty(AcTreeNode.prototype, "path", {
        get: function () {
            // walk up tree and return path with names
            var p = new Array();
            p.push(this);
            var n = this;
            while (this.parent) {
                n = n.parent;
                p.push(n);
            }
            return p;
        },
        enumerable: true,
        configurable: true
    });
    AcTreeNode.prototype.hasDirectAncestor = function (node) {
        return this.parent !== undefined;
    };
    Object.defineProperty(AcTreeNode.prototype, "hasChildren", {
        get: function () {
            return this.children !== undefined && this.children.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    AcTreeNode.prototype.add = function (nodes) {
        if (nodes && nodes instanceof Array) {
            (_a = this.children).push.apply(_a, nodes);
        }
        else {
            this.children.push(nodes);
        }
        var _a;
    };
    AcTreeNode.prototype.remove = function (node) {
        var idx = this.children.indexOf(node);
        if (idx > -1) {
            this.children.splice(idx, 1);
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(AcTreeNode.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
            this.stateChange.emit(this._state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcTreeNode.prototype, "stateIsExpandend", {
        get: function () {
            return (this.state & AcTreeNodeState.expanded) === AcTreeNodeState.expanded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcTreeNode.prototype, "stateIsDisabled", {
        get: function () {
            return (this.state & AcTreeNodeState.disabled) === AcTreeNodeState.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcTreeNode.prototype, "stateIsSelected", {
        get: function () {
            return (this.state & AcTreeNodeState.selected) === AcTreeNodeState.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcTreeNode.prototype, "stateIsChecked", {
        get: function () {
            return (this.state & AcTreeNodeState.checked) === AcTreeNodeState.checked;
        },
        enumerable: true,
        configurable: true
    });
    return AcTreeNode;
}());

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AcTextTreeNode = (function (_super) {
    __extends(AcTextTreeNode, _super);
    function AcTextTreeNode(text, options, nodes) {
        var _this = _super.call(this, options, nodes) || this;
        _this.text = text;
        _this.name = text; // default, must be set explicitly
        return _this;
    }
    return AcTextTreeNode;
}(AcTreeNode));

var __extends$1 = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AcComponentTreeNode = (function (_super) {
    __extends$1(AcComponentTreeNode, _super);
    function AcComponentTreeNode(component, options, nodes) {
        var _this = _super.call(this, options, nodes) || this;
        _this.component = component;
        return _this;
    }
    return AcComponentTreeNode;
}(AcTreeNode));

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.AcTreeView = (function () {
    function AcTreeView() {
        this.nodeClick = new _angular_core.EventEmitter();
        this.checkChanged = new _angular_core.EventEmitter();
        this.selectedChanged = new _angular_core.EventEmitter();
        this.collapseChanged = new _angular_core.EventEmitter();
    }
    AcTreeView.prototype.onNodeClick = function (node) {
        this.nodeClick.emit(node);
    };
    AcTreeView.prototype.onCheckChanged = function (node) {
        this.checkChanged.emit(node);
    };
    AcTreeView.prototype.onSelectedChanged = function (node) {
        this.selectedChanged.emit(node);
    };
    AcTreeView.prototype.onCollapseChanged = function (node) {
        this.collapseChanged.emit(node);
    };
    AcTreeView.prototype.ngOnChanges = function () {
        return;
    };
    return AcTreeView;
}());
__decorate$8([
    _angular_core.Input(),
    __metadata$8("design:type", AcTreeNode)
], exports.AcTreeView.prototype, "nodes", void 0);
__decorate$8([
    _angular_core.Output(),
    __metadata$8("design:type", _angular_core.EventEmitter)
], exports.AcTreeView.prototype, "nodeClick", void 0);
__decorate$8([
    _angular_core.Output(),
    __metadata$8("design:type", _angular_core.EventEmitter)
], exports.AcTreeView.prototype, "checkChanged", void 0);
__decorate$8([
    _angular_core.Output(),
    __metadata$8("design:type", _angular_core.EventEmitter)
], exports.AcTreeView.prototype, "selectedChanged", void 0);
__decorate$8([
    _angular_core.Output(),
    __metadata$8("design:type", _angular_core.EventEmitter)
], exports.AcTreeView.prototype, "collapseChanged", void 0);
exports.AcTreeView = __decorate$8([
    _angular_core.Component({
        selector: 'ac-tree',
        template: "<ul class=\"treeview\">\n                 <ac-treenode [node]=\"nodes\" \n                               (nodeClick)=\"onNodeClick($event)\" \n                               (checkChanged)=\"onCheckChanged($event)\"\n                               (selectedChanged)=\"onSelectedChanged($event)\"\n                               (collapseChanged)=\"onCollapseChanged($event)\"\n                  ></ac-treenode>\n               </ul>",
        styles: ['.treeview { list-style: none; margin-left: -25px; }']
    }) //
    ,
    __metadata$8("design:paramtypes", [])
], exports.AcTreeView);

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The treenode class represents a single treenode for the treeview. Actually, this renders the real UI.
 *
 * The component needs this input value:
 *
 * * @Input() node: AcTextTreeNode;
 *
 * The several options are set through the AcTreeNodeOptions object that is being held by the
 * AcTextTreeNode class. This includes colors, icons, and other styles.
 *
 * The component can fire these events:
 *
 * * @Output() nodeClick: EventEmitter<AcTreeNode>;
 * * @Output() checkChanged: EventEmitter<AcTreeNode>;
 * * @Output() selectedChanged: EventEmitter<AcTreeNode>;
 * * @Output() collapseChanged: EventEmitter<AcTreeNode>;
 *
 */
exports.AcTreeViewNode = AcTreeViewNode_1 = (function () {
    function AcTreeViewNode(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.isExpanded = false;
        this.nodeClick = new _angular_core.EventEmitter();
        this.checkChanged = new _angular_core.EventEmitter();
        this.selectedChanged = new _angular_core.EventEmitter();
        this.collapseChanged = new _angular_core.EventEmitter();
    }
    AcTreeViewNode.prototype.ngOnInit = function () {
        var _this = this;
        // set HTML according to options
        this.collapseClasses = new Array();
        this.iconClasses = new Array();
        // expander area with icon 
        if (this.node) {
            // expect a font-awesome class with or without fa class
            if (this.node.options && this.node.options.icon) {
                if (this.node.options.icon.indexOf(AcTreeViewNode_1.pfxIcon + " ") !== 0) {
                    this.iconClasses.push('fa');
                }
                this.iconClasses.push(this.node.options.icon);
            }
            if (this.node.options && this.node.options.href) {
                this.href = this.node.options.href;
            }
            else {
                this.href = 'javascript:void(0)';
            }
            // open/close area for elements with children
            if (this.node.hasChildren) {
                this.collapseClasses.push('ac-icon'); // base class
                this.collapseClasses.push(AcTreeViewNode_1.pfxIcon);
                this.collapseClasses.push(AcTreeViewNode_1.opnIcon);
                // collapsed by default
                this.node.state &= ~AcTreeNodeState.checked;
            }
            if (this.node.options && this.node.options.color) {
                this.foreColor = this.node.options.color;
            }
            if (this.node.options && this.node.options.backColor) {
                this.backColor = this.node.options.backColor;
            }
            this.node.stateChange.subscribe(function (se) {
                _this.collapseChanged.emit(_this.node);
                if (!_this.node.stateIsExpandend) {
                    _this.collapseClasses = _this.collapseClasses.filter(function (s) { return s != AcTreeViewNode_1.clsIcon; });
                    _this.collapseClasses.push(AcTreeViewNode_1.opnIcon);
                }
                else {
                    _this.collapseClasses = _this.collapseClasses.filter(function (s) { return s != AcTreeViewNode_1.opnIcon; });
                    _this.collapseClasses.push(AcTreeViewNode_1.clsIcon);
                }
                _this.isExpanded = _this.node.stateIsExpandend;
            });
        }
    };
    // forward events in the node tree
    AcTreeViewNode.prototype.onNodeClick = function (node) {
        this.nodeClick.emit(node);
    };
    AcTreeViewNode.prototype.onCheckChanged = function (node) {
        this.checkChanged.emit(node);
    };
    AcTreeViewNode.prototype.onSelectedChanged = function (node) {
        this.selectedChanged.emit(node);
    };
    AcTreeViewNode.prototype.onCollapseChanged = function (node) {
        if (this.node.options.collapsable && this.node.hasChildren) {
            this.collapseChanged.emit(node);
        }
    };
    AcTreeViewNode.prototype.handleCheckChange = function () {
        if (this.node.options.checkable && !this.node.stateIsDisabled) {
            if (this.node.state & AcTreeNodeState.checked) {
                this.node.state &= ~AcTreeNodeState.checked;
            }
            else {
                this.node.state |= AcTreeNodeState.checked;
            }
            this.checkChanged.emit(this.node);
        }
    };
    AcTreeViewNode.prototype.handleClick = function ($event) {
        $event.stopPropagation();
        // always emit click
        this.nodeClick.emit(this.node);
    };
    AcTreeViewNode.prototype.handleCollapse = function () {
        // if collapsable handle icons and view state
        if (this.node.options.collapsable) {
            // toggle state
            if (this.node.state && (this.node.state & AcTreeNodeState.expanded)) {
                this.node.state &= ~AcTreeNodeState.expanded;
            }
            else {
                this.node.state |= AcTreeNodeState.expanded;
            }
        }
    };
    AcTreeViewNode.prototype.handlePreSelection = function (state) {
        // handle the states according to options
        if (this.node.options.selectable && !this.node.stateIsDisabled) {
            if (state) {
                if (this.node.options && this.node.options.color) {
                    this.foreColor = this.node.options.backColor;
                }
                else {
                    this.foreColor = '#fff';
                }
                if (this.node.options && this.node.options.backColor) {
                    this.backColor = this.node.options.color;
                }
                else {
                    this.backColor = '#000';
                }
            }
            else {
                if (this.node.options && this.node.options.color) {
                    this.foreColor = this.node.options.color;
                }
                else {
                    this.foreColor = '#000';
                }
                if (this.node.options && this.node.options.backColor) {
                    this.backColor = this.node.options.backColor;
                }
                else {
                    this.backColor = '#fff';
                }
            }
            this.preSelectState = state;
        }
    };
    AcTreeViewNode.prototype.handleSelection = function ($event) {
        // handle the states according to options
        if (this.node.options.selectable && !this.node.stateIsDisabled && this.preSelectState === true) {
            if (this.node.state & AcTreeNodeState.selected) {
                this.node.state &= ~AcTreeNodeState.selected;
            }
            else {
                this.node.state |= AcTreeNodeState.selected;
            }
            if (this.node.stateIsSelected) {
                if (this.node.options && this.node.options.color) {
                    this.foreColor = this.node.options.backColor;
                }
                else {
                    this.foreColor = '#fff';
                }
                if (this.node.options && this.node.options.backColor) {
                    this.backColor = this.node.options.color;
                }
                else {
                    this.backColor = '#000';
                }
            }
            else {
                if (this.node.options && this.node.options.color) {
                    this.foreColor = this.node.options.color;
                }
                else {
                    this.foreColor = '#000';
                }
                if (this.node.options && this.node.options.backColor) {
                    this.backColor = this.node.options.backColor;
                }
                else {
                    this.backColor = '#fff';
                }
            }
            this.selectedChanged.emit(this.node);
        }
    };
    return AcTreeViewNode;
}());
exports.AcTreeViewNode.pfxIcon = 'fa';
exports.AcTreeViewNode.opnIcon = 'fa-plus';
exports.AcTreeViewNode.clsIcon = 'fa-minus';
__decorate$9([
    _angular_core.Input(),
    __metadata$9("design:type", AcTextTreeNode)
], exports.AcTreeViewNode.prototype, "node", void 0);
__decorate$9([
    _angular_core.Output(),
    __metadata$9("design:type", _angular_core.EventEmitter)
], exports.AcTreeViewNode.prototype, "nodeClick", void 0);
__decorate$9([
    _angular_core.Output(),
    __metadata$9("design:type", _angular_core.EventEmitter)
], exports.AcTreeViewNode.prototype, "checkChanged", void 0);
__decorate$9([
    _angular_core.Output(),
    __metadata$9("design:type", _angular_core.EventEmitter)
], exports.AcTreeViewNode.prototype, "selectedChanged", void 0);
__decorate$9([
    _angular_core.Output(),
    __metadata$9("design:type", _angular_core.EventEmitter)
], exports.AcTreeViewNode.prototype, "collapseChanged", void 0);
exports.AcTreeViewNode = AcTreeViewNode_1 = __decorate$9([
    _angular_core.Component({
        selector: 'ac-treenode',
        template: "<li class=\"treeview\" (click)=\"handleClick($event)\">\n                   <i class=\"ac-collapse\" [ngClass]=\"collapseClasses\" *ngIf=\"node.hasChildren\" (click)=\"handleCollapse()\"></i>\n                   <i class=\"ac-collapse\" *ngIf=\"!node.hasChildren\"></i>\n                   <i class=\"ac-icon\" [ngClass]=\"iconClasses\" [style.color]=\"node.options.iconColor\" *ngIf=\"!node.options.checkable\"></i>\n                   <input type=\"checkbox\" [id]=\"node.name\" *ngIf=\"node.options.checkable\" \n                          [checked]=\"node.stateIsChecked\" (click)=\"handleCheckChange()\">\n                   <label [attr.for]=\"node.name\"></label>\n                   <a class=\"ac-container\"\n                         [href]=\"href\"\n                         [style.color]=\"foreColor\" \n                         [style.background-color]=\"backColor\" \n                         (mouseover)=\"handlePreSelection(true)\"\n                         (mouseout)=\"handlePreSelection(false)\"\n                         (click)=\"handleSelection($event)\">\n                       {{ node.text }}\n                   </a>\n                   <ul class=\"treeview\" *ngIf=\"node.hasChildren\" [hidden]=\"!isExpanded\">\n                       <ac-treenode *ngFor=\"let child of node.children\" \n                                    [node]=\"child\"\n                                    (nodeClick)=\"onNodeClick($event)\" \n                                    (checkChanged)=\"onCheckChanged($event)\"\n                                    (selectedChanged)=\"onSelectedChanged($event)\"\n                                    (collapseChanged)=\"onCollapseChanged($event)\">\n                       </ac-treenode>\n                   </ul>                   \n               </li>",
        styles: [
            'ul.treeview { list-style: none; margin-left: -2em; }',
            'li.treeview  { margin-left: 10px; margin-bottom: 3px; box-sizing: border-box; }',
            'li.treeview a.ac-container { border-radius: 2px; display: inline-block; padding: 3px; text-decoration: none; }',
            'li.treeview input[type="checkbox"] { display: none; }',
            'li.treeview input[type="checkbox"] + label:before { font-family: FontAwesome; }',
            'li.treeview input[type="checkbox"] + label:before { content: "\\f096"; }',
            'li.treeview input[type="checkbox"]:checked + label:before { content: "\\f046"; }',
            'li.treeview input[type="checkbox"] + label { display:inline-block; width:15px; height: 20px; margin: -1px 4px 0 0; vertical-align:middle; cursor: pointer; }',
            'li.treeview i.ac-collapse { width: 15px; cursor: pointer; display: inline-block; margin-left: -1.7em; }',
            'li.treeview i.ac-icon { width: 15px; cursor: pointer; display: inline-block }',
            'li.treeview .ac-node-disabled { color: silver; cursor: not-allowed; }'
        ]
    }),
    __metadata$9("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], exports.AcTreeViewNode);
var AcTreeViewNode_1;

/**
 * The menu container, can provide a recursive list of menu items.
 */
var AcMenu = (function () {
    function AcMenu() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.children = items;
    }
    // Get the item and return null if not of expected subtype, or text not unique, or not found.
    AcMenu.prototype.getMenuItem = function (name) {
        var foundItems = this.children.filter(function (item) { return item.text === name; });
        if (foundItems.length === 1) {
            return foundItems[0];
        }
        return null;
    };
    
    return AcMenu;
}());

var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.AcSideMenu = (function () {
    function AcSideMenu() {
        /**
         * Format links so they use [routerlink] syntax. Default is true.
         */
        this.useRouterLinks = true;
        console.log('AcSideMenu ctor');
        // create Menu dynamically
    }
    AcSideMenu.prototype.ngOnInit = function () {
        console.log('AcSideMenu onInit');
    };
    // tslint:disable-next-line:no-unused-variable
    AcSideMenu.prototype.itemType = function (item) {
        if (item === undefined || item === null) {
            throw new Error('The reflection metadata could not be found.');
        }
        var itemType = item['__name__'];
        return itemType;
    };
    return AcSideMenu;
}());
__decorate$10([
    _angular_core.Input(),
    __metadata$10("design:type", AcMenu)
], exports.AcSideMenu.prototype, "menu", void 0);
__decorate$10([
    _angular_core.Input(),
    __metadata$10("design:type", Object)
], exports.AcSideMenu.prototype, "useRouterLinks", void 0);
exports.AcSideMenu = __decorate$10([
    _angular_core.Component({
        selector: 'ac-sidemenu',
        styles: ['.headerItem { margin-left: 32px }',
            '.linkItem { margin-right: 5px }',
            '.sideMenuCanvas { padding: 15px; }'],
        template: "<nav class=\"nav flex-column sideMenuCanvas\" \n                 *ngIf=\"menu && menu.children && menu.children.length > 0\">\n              <ng-container *ngFor=\"let item of menu.children\" class=\"nav-item\" [ngSwitch]=\"itemType(item)\">\n                <ng-container *ngSwitchCase=\"'AcMenuHeaderItem'\">\n                  <i class=\"headerItem\">&nbsp;</i><a><strong>{{ item.text }}</strong></a>\n                </ng-container>\n                <a *ngSwitchCase=\"'AcMenuLabelItem'\" class=\"nav-link\" href=\"#\">\n                  <i class=\"float-xs-left linkItem hidden-xs-down fa \" [ngClass]=\"item.icon\"></i> \n                  <span>{{ item.text }}</span>\n                </a>\n                <a *ngSwitchCase=\"'AcMenuLinkItem'\" class=\"nav-link\" href=\"#\" [routerLink]=\"item.link\">\n                  <i class=\"float-xs-left linkItem hidden-xs-down fa \" [ngClass]=\"item.icon\"></i> \n                  <span>{{ item.text }}</span>\n              </a>\n              </ng-container>\n            </nav>"
    }),
    __metadata$10("design:paramtypes", [])
], exports.AcSideMenu);

/**
 * Base class for menu items.
 */
var AcMenuItem = (function () {
    function AcMenuItem(text) {
        this.text = text;
    }
    return AcMenuItem;
}());

var __extends$4 = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A header, not clickable element in the menu
 */
var AcMenuHeaderItem = (function (_super) {
    __extends$4(AcMenuHeaderItem, _super);
    function AcMenuHeaderItem(text) {
        var _this = _super.call(this, text) || this;
        _this.__name__ = 'AcMenuHeaderItem';
        return _this;
    }
    return AcMenuHeaderItem;
}(AcMenuItem));

var __extends$3 = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A non clickable item in the menu, can provide an icon.
 */
var AcMenuLabelItem = (function (_super) {
    __extends$3(AcMenuLabelItem, _super);
    function AcMenuLabelItem(text, icon) {
        var _this = _super.call(this, text) || this;
        _this.__name__ = 'AcMenuLabelItem';
        _this.icon = icon;
        return _this;
    }
    return AcMenuLabelItem;
}(AcMenuHeaderItem));

var __extends$2 = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A regular, clickable element with text and icon.
 */
var AcMenuLinkItem = (function (_super) {
    __extends$2(AcMenuLinkItem, _super);
    function AcMenuLinkItem(text, link, icon) {
        var _this = _super.call(this, text, icon) || this;
        _this.__name__ = 'AcMenuLinkItem';
        _this.link = link;
        return _this;
    }
    return AcMenuLinkItem;
}(AcMenuLabelItem));

var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * The dropdown menu, button + drop  down/up and optional splitbutton
 */
exports.AcDropMenu = (function () {
    function AcDropMenu(router) {
        this.router = router;
        /**
         * The button has split button behavior.
         */
        this.hasSplitBtn = false;
        /**
         * Disable / Enable the whole button.
         */
        this.disabled = false;
        /**
         * Event fired if no router is present and one want to execute custom action.
         */
        this.onSelect = new _angular_core.EventEmitter();
        this.status = { isOpen: false, autoClose: false };
        this.btnSize = exports.Sizes.Medium;
        this.btnType = exports.Actions.Secondary;
    }
    AcDropMenu.prototype.selectItem = function (item) {
        if (item instanceof AcMenuLinkItem && this.router) {
            // invoke a navigation
            this.router.navigate(item.link);
        }
        else {
            if (!this.onSelect) {
                throw new Error('If no router is present you must add the onSelect event.');
            }
            // if no link invoke the onSelect event and return the selected item
            this.onSelect.emit(item);
        }
    };
    return AcDropMenu;
}());
__decorate$11([
    _angular_core.Input(),
    __metadata$11("design:type", AcMenu)
], exports.AcDropMenu.prototype, "menu", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$11("design:type", String)
], exports.AcDropMenu.prototype, "text", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$11("design:type", Object)
], exports.AcDropMenu.prototype, "hasSplitBtn", void 0);
__decorate$11([
    _angular_core.Input(),
    InputConverter(EnumConverter, exports.Actions),
    __metadata$11("design:type", Number)
], exports.AcDropMenu.prototype, "btnType", void 0);
__decorate$11([
    _angular_core.Input(),
    InputConverter(EnumConverter, exports.Sizes),
    __metadata$11("design:type", Number)
], exports.AcDropMenu.prototype, "btnSize", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$11("design:type", Object)
], exports.AcDropMenu.prototype, "disabled", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$11("design:type", String)
], exports.AcDropMenu.prototype, "id", void 0);
__decorate$11([
    _angular_core.Output(),
    __metadata$11("design:type", _angular_core.EventEmitter)
], exports.AcDropMenu.prototype, "onSelect", void 0);
exports.AcDropMenu = __decorate$11([
    _angular_core.Component({
        selector: 'ac-dropmenu',
        template: "<div class=\"dropdown\" dropdown [(isOpen)]=\"status.isOpen\" [id]=\"id\">\n                <button type=\"button\" dropdownToggle class=\"btn\" \n                        id=\"dropdownMenuButton\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\"\n                       [ngClass]=\"btnType\" [ngClass]=\"btnSize\" *ngIf=\"hasSplitBtn\" \n                        >{{ text }}</button>\n                <button class=\"btn dropdown-toggle\" dropdownToggle \n                        aria-haspopup=\"true\" aria-expanded=\"false\"\n                       [ngClass]=\"btnType\" [ngClass]=\"btnSize\" *ngIf=\"!hasSplitBtn\"\n                        type=\"button\" \n                        >\n                    {{ text }}\n                </button>\n                <button class=\"btn dropdown-toggle\" dropdownToggle                         \n                        aria-haspopup=\"true\" aria-expanded=\"false\"\n                       [ngClass]=\"btnType\" [ngClass]=\"btnSize\" *ngIf=\"hasSplitBtn\"\n                        type=\"button\" >\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" #dropDownMenu>\n                    <button class=\"dropdown-item\" type=\"button\" (click)=\"selectItem(item)\" \n                            *ngFor=\"let item of menu.children\">{{item.text}}</button>\n                </div>\n                </div>"
    }),
    __metadata$11("design:paramtypes", [_angular_router.Router])
], exports.AcDropMenu);

var CloseBehavior;
(function (CloseBehavior) {
    CloseBehavior[CloseBehavior["Always"] = 0] = "Always";
    CloseBehavior[CloseBehavior["Disabled"] = 1] = "Disabled";
    CloseBehavior[CloseBehavior["OutsideClick"] = 2] = "OutsideClick";
    CloseBehavior[CloseBehavior["NonInput"] = 3] = "NonInput";
})(CloseBehavior || (CloseBehavior = {}));

var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Manage behavior of events triggered outside
 */
exports.DropdownService = (function () {
    function DropdownService() {
        this.closeDropdownBind = this.closeDropdown.bind(this);
        this.keybindFilterBind = this.keybindFilter.bind(this);
    }
    DropdownService.prototype.open = function (dropdownScope) {
        if (!this.openScopeElement) {
            window.document.addEventListener('click', this.closeDropdownBind);
            window.document.addEventListener('keydown', this.keybindFilterBind);
        }
        this.openScopeElement = dropdownScope;
    };
    DropdownService.prototype.close = function (dropdownScope) {
        if (this.openScopeElement !== dropdownScope) {
            return;
        }
        this.openScopeElement = null;
        window.document.removeEventListener('click', this.closeDropdownBind);
        window.document.removeEventListener('keydown', this.keybindFilterBind);
    };
    DropdownService.prototype.closeDropdown = function (event) {
        if (!this.openScopeElement) {
            return;
        }
        if (event && this.openScopeElement.autoClose === CloseBehavior.Disabled) {
            return;
        }
        if (event && this.openScopeElement.toggleButtonElement &&
            this.openScopeElement.toggleButtonElement.nativeElement === event.target) {
            return;
        }
        if (event && this.openScopeElement.autoClose === CloseBehavior.NonInput &&
            this.openScopeElement.dropDownMenuItem &&
            /input|textarea/i.test(event.target.tagName) &&
            this.openScopeElement.dropDownMenuItem.nativeElement.contains(event.target)) {
            return;
        }
        if (event && this.openScopeElement.autoClose === CloseBehavior.OutsideClick &&
            this.openScopeElement.dropDownMenuItem &&
            this.openScopeElement.dropDownMenuItem.nativeElement.contains(event.target)) {
            return;
        }
        this.openScopeElement.isOpen = false;
    };
    DropdownService.prototype.keybindFilter = function (event) {
        // Escape
        if (event.which === 27) {
            this.openScopeElement.focusToggleElement();
            this.closeDropdown(null);
            return;
        }
        // Arrow keys
        if (this.openScopeElement.keyboardNav && this.openScopeElement.isOpen &&
            (event.which === 38 || event.which === 40)) {
            event.preventDefault();
            event.stopPropagation();
            this.openScopeElement.focusDropdownEntry(event.which);
        }
    };
    return DropdownService;
}());
exports.DropdownService = __decorate$13([
    _angular_core.Injectable()
], exports.DropdownService);

var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.Dropdown = (function () {
    function Dropdown(el, dropDownService) {
        this.el = el;
        this.dropDownService = dropDownService;
        /**
         * Fired on toggle with current state
         */
        this.onToggle = new _angular_core.EventEmitter();
    }
    Object.defineProperty(Dropdown.prototype, "isOpen", {
        get: function () {
            console.log('Return current open state: ' + this._isOpen);
            return this._isOpen;
        },
        set: function (value) {
            console.log('Set current open state: ' + value);
            this._isOpen = !!value;
            if (this.isOpen) {
                this.focusToggleElement();
                this.dropDownService.open(this);
            }
            else {
                this.dropDownService.close(this);
                this.selectedOption = null;
            }
            this.onToggle.emit(this.isOpen);
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.ngOnInit = function () {
        this.autoClose = CloseBehavior.NonInput;
    };
    Dropdown.prototype.ngOnDestroy = function () {
        if (this.appendToBody && this.dropDownMenuItem) {
            this.dropDownMenuItem.nativeElement.remove();
        }
    };
    Dropdown.prototype.ngAfterViewInit = function () {
        if (this.appendToBody) {
            window.document.body.appendChild(this.dropDownMenuItem.nativeElement);
        }
    };
    Object.defineProperty(Dropdown.prototype, "dropDownMenu", {
        /**
         * Set the drop down externally.
         */
        set: function (dropdownMenu) {
            // init drop down menu
            this.dropDownMenuItem = dropdownMenu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dropdown.prototype, "dropDownToggle", {
        /**
         * The the actual toggle button externally.
         */
        set: function (dropdownToggle) {
            // init toggle element
            this.toggleButtonElement = dropdownToggle;
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.toggle = function (open) {
        this.isOpen = arguments.length ? !!open : !this.isOpen;
        console.log('Toggle on Host: ' + this.isOpen);
        return this.isOpen;
    };
    Dropdown.prototype.focusDropdownEntry = function (keyCode) {
        // If append to body is used.
        var hostEl = this.dropDownMenuItem ?
            this.dropDownMenuItem.nativeElement :
            this.el.nativeElement.getElementsByTagName('ul')[0];
        if (!hostEl) {
            return;
        }
        var elems = hostEl.getElementsByTagName('a');
        if (!elems || !elems.length) {
            return;
        }
        switch (keyCode) {
            case (40):
                if (typeof this.selectedOption !== 'number') {
                    this.selectedOption = 0;
                    break;
                }
                if (this.selectedOption === elems.length - 1) {
                    break;
                }
                this.selectedOption++;
                break;
            case (38):
                if (typeof this.selectedOption !== 'number') {
                    return;
                }
                if (this.selectedOption === 0) {
                    // todo: return?
                    break;
                }
                this.selectedOption--;
                break;
        }
        elems[this.selectedOption].focus();
    };
    Dropdown.prototype.focusToggleElement = function () {
        if (this.toggleButtonElement) {
            this.toggleButtonElement.nativeElement.focus();
        }
    };
    return Dropdown;
}());
__decorate$12([
    _angular_core.Input(),
    __metadata$12("design:type", Number)
], exports.Dropdown.prototype, "autoClose", void 0);
__decorate$12([
    _angular_core.Input(),
    __metadata$12("design:type", Boolean)
], exports.Dropdown.prototype, "keyboardNav", void 0);
__decorate$12([
    _angular_core.Input(),
    __metadata$12("design:type", Boolean)
], exports.Dropdown.prototype, "appendToBody", void 0);
__decorate$12([
    _angular_core.Output(),
    __metadata$12("design:type", _angular_core.EventEmitter)
], exports.Dropdown.prototype, "onToggle", void 0);
__decorate$12([
    _angular_core.ContentChild('dropdownMenu'),
    __metadata$12("design:type", _angular_core.ElementRef)
], exports.Dropdown.prototype, "dropDownMenuItem", void 0);
__decorate$12([
    _angular_core.HostBinding('class.show'),
    _angular_core.Input(),
    __metadata$12("design:type", Boolean),
    __metadata$12("design:paramtypes", [Object])
], exports.Dropdown.prototype, "isOpen", null);
exports.Dropdown = __decorate$12([
    _angular_core.Directive({ selector: '[dropdown]' }),
    __metadata$12("design:paramtypes", [_angular_core.ElementRef,
        exports.DropdownService])
], exports.Dropdown);

var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.DropdownToggle = (function () {
    function DropdownToggle(dropdown, el) {
        this.dropdown = dropdown;
        this.el = el;
        this.disabled = false;
        this.addClass = true;
    }
    DropdownToggle.prototype.ngOnInit = function () {
        this.dropdown.dropDownToggle = this.el;
    };
    Object.defineProperty(DropdownToggle.prototype, "isOpen", {
        get: function () {
            return this.dropdown.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownToggle.prototype.toggleDropdown = function (event) {
        event.stopPropagation();
        if (!this.disabled) {
            this.dropdown.toggle();
        }
        return false;
    };
    return DropdownToggle;
}());
__decorate$14([
    _angular_core.HostBinding('class.disabled'),
    _angular_core.Input(),
    __metadata$13("design:type", Object)
], exports.DropdownToggle.prototype, "disabled", void 0);
__decorate$14([
    _angular_core.HostBinding('class.dropdown-toggle'),
    _angular_core.HostBinding('attr.aria-haspopup'),
    __metadata$13("design:type", Object)
], exports.DropdownToggle.prototype, "addClass", void 0);
__decorate$14([
    _angular_core.HostBinding('attr.aria-expanded'),
    __metadata$13("design:type", Object),
    __metadata$13("design:paramtypes", [])
], exports.DropdownToggle.prototype, "isOpen", null);
__decorate$14([
    _angular_core.HostListener('click', ['$event']),
    __metadata$13("design:type", Function),
    __metadata$13("design:paramtypes", [MouseEvent]),
    __metadata$13("design:returntype", void 0)
], exports.DropdownToggle.prototype, "toggleDropdown", null);
exports.DropdownToggle = __decorate$14([
    _angular_core.Directive({ selector: '[dropdownToggle]' }),
    __param(0, _angular_core.Host()),
    __metadata$13("design:paramtypes", [exports.Dropdown, _angular_core.ElementRef])
], exports.DropdownToggle);

var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$14 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.AcAnalogClock = (function () {
    function AcAnalogClock(rd, document) {
        this.rd = rd;
        this.document = document;
        this.secondColor = '#C1EFED';
        this.minuteColor = '#fdfdfd';
        this.hourColor = '#fffbf9';
        this.minuteClock = new _angular_core.EventEmitter();
        this.hourClock = new _angular_core.EventEmitter();
        this.bgColor = '#92345';
        this.diameter = 100;
    }
    AcAnalogClock.prototype.ngOnChanges = function (changes) {
        if (changes['diameter']) {
            this.makeMarks();
        }
    };
    AcAnalogClock.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.makeMarks();
        // create animation string
        var shifter = function (val) { return [val, _this.diameter, _this.diameter].join(' '); };
        // // from real time
        var date = new Date();
        var secAngle = 360 * date.getSeconds() / 60;
        var minuteAngle = 360 * date.getMinutes() / 60;
        var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
        // // assign animation flow
        this.setRotate(this.secondhandTransform, shifter(secAngle));
        this.setRotate(this.minutehandTransform, shifter(minuteAngle));
        this.setRotate(this.hourhandTransform, shifter(hoursAngle));
        setInterval(function () {
            date = new Date();
            secAngle = 360 * date.getSeconds() / 60;
            minuteAngle = 360 * date.getMinutes() / 60;
            hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
            _this.setRotate(_this.secondhandTransform, shifter(secAngle));
            _this.setRotate(_this.minutehandTransform, shifter(minuteAngle));
            _this.setRotate(_this.hourhandTransform, shifter(hoursAngle));
        }, 1000);
    };
    AcAnalogClock.prototype.setRotate = function (element, value) {
        element.nativeElement.setAttribute('transform', "rotate(" + value + ")");
    };
    AcAnalogClock.prototype.makeMarks = function () {
        var marks = this.svg.nativeElement.querySelectorAll('line[mark]');
        if (marks && marks.length > 0) {
            for (var i_1 = 0; i_1 < marks.length; i_1++) {
                marks[i_1].remove();
            }
        }
        // make hour marks
        for (var i = 1; i <= 12; i++) {
            var el = this.document.createElementNS('http://www.w3.org/2000/svg', 'line');
            el.setAttribute('x1', this.diameter.toString());
            el.setAttribute('y1', (this.diameter * 0.3).toString());
            el.setAttribute('x2', this.diameter.toString());
            el.setAttribute('y2', (this.diameter * 0.4).toString());
            el.setAttribute('transform', 'rotate(' + (i * 360 / 12) + (" " + this.diameter + " " + this.diameter + ")"));
            el.setAttribute('style', 'stroke: #ffffff;');
            el.setAttribute('mark', '');
            this.svg.nativeElement.appendChild(el);
        }
    };
    return AcAnalogClock;
}());
__decorate$15([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], exports.AcAnalogClock.prototype, "bgColor", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$14("design:type", Object)
], exports.AcAnalogClock.prototype, "secondColor", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$14("design:type", Object)
], exports.AcAnalogClock.prototype, "minuteColor", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$14("design:type", Object)
], exports.AcAnalogClock.prototype, "hourColor", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$14("design:type", Number)
], exports.AcAnalogClock.prototype, "diameter", void 0);
__decorate$15([
    _angular_core.Input(),
    __metadata$14("design:type", Boolean)
], exports.AcAnalogClock.prototype, "showSeconds", void 0);
__decorate$15([
    _angular_core.Output(),
    __metadata$14("design:type", _angular_core.EventEmitter)
], exports.AcAnalogClock.prototype, "minuteClock", void 0);
__decorate$15([
    _angular_core.Output(),
    __metadata$14("design:type", _angular_core.EventEmitter)
], exports.AcAnalogClock.prototype, "hourClock", void 0);
__decorate$15([
    _angular_core.ViewChild('hourhandTransform'),
    __metadata$14("design:type", _angular_core.ElementRef)
], exports.AcAnalogClock.prototype, "hourhandTransform", void 0);
__decorate$15([
    _angular_core.ViewChild('minutehandTransform'),
    __metadata$14("design:type", _angular_core.ElementRef)
], exports.AcAnalogClock.prototype, "minutehandTransform", void 0);
__decorate$15([
    _angular_core.ViewChild('secondhandTransform'),
    __metadata$14("design:type", _angular_core.ElementRef)
], exports.AcAnalogClock.prototype, "secondhandTransform", void 0);
__decorate$15([
    _angular_core.ViewChild('svg'),
    __metadata$14("design:type", _angular_core.ElementRef)
], exports.AcAnalogClock.prototype, "svg", void 0);
exports.AcAnalogClock = __decorate$15([
    _angular_core.Component({
        selector: 'ac-analogclock',
        styles: ["svg {\n              display: block;\n            }"],
        template: "\n<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" \n     [attr.width]=\"diameter * 2\" \n     [attr.height]=\"diameter * 2\" #svg>\n    <filter id=\"innerShadow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\"/>\n        <feOffset in=\"blur\" dx=\"2.5\" dy=\"2.5\"/>\n    </filter>\n    <g>\n        <circle id=\"shadow\" style=\"fill:rgba(0,0,0,0.1)\" \n                [attr.cx]=\"diameter - 3\" \n                [attr.cy]=\"diameter\" \n                [attr.r]=\"diameter - 3\" \n                filter=\"url(#innerShadow)\"></circle>\n        <circle id=\"circle\" style=\"stroke: #FFF; stroke-width: 12px;\" \n                [style.stroke-width]=\"diameter * 0.12\"\n                [attr.cx]=\"diameter\" \n                [attr.cy]=\"diameter\"\n                [attr.fill]=\"bgColor\" \n                [attr.r]=\"diameter - (diameter * 0.2)\"></circle>\n    </g>\n    <g>\n        <line [attr.x1]=\"diameter\" [attr.y1]=\"diameter\" \n              [attr.x2]=\"diameter\" [attr.y2]=\"diameter * 0.55\" transform=\"rotate(90 100 100)\" \n              style=\"stroke-width: 4px; stroke: #fffbf9;\" #hourhandTransform\n              [style.stroke]=\"hourColor\"\n              >\n        </line>\n        <line [attr.x1]=\"diameter\" [attr.y1]=\"diameter\" \n              [attr.x2]=\"diameter\" [attr.y2]=\"diameter * 0.40\" transform=\"rotate(180 100 100)\" \n              style=\"stroke-width: 3px; stroke: #fdfdfd;\" #minutehandTransform\n              [style.stroke]=\"minuteColor\"\n              >\n        </line>\n        <line [attr.x1]=\"diameter\" [attr.y1]=\"diameter\" \n              [attr.x2]=\"diameter\" [attr.y2]=\"diameter * 0.30\" transform=\"rotate(270 100 100)\" \n              style=\"stroke-width: 2px; stroke: #C1EFED;\" #secondhandTransform \n              [style.stroke]=\"secondColor\"\n              >\n        </line>\n    </g>\n    <circle id=\"center\" style=\"fill:#128A86; stroke: #C1EFED; stroke-width: 2px;\" \n            [attr.cx]=\"diameter\" [attr.cy]=\"diameter\" r=\"3\"></circle>\n</svg>     \n"
    }),
    __param$1(1, _angular_core.Inject(_angular_platformBrowser.DOCUMENT)),
    __metadata$14("design:paramtypes", [_angular_core.Renderer, HTMLDocument])
], exports.AcAnalogClock);

var HudClockEngine = (function () {
    function HudClockEngine(canvasElement, window, config) {
        var _this = this;
        this.config = config;
        /**
         * render frame callback, invocation avoids closure per frame
         */
        this.tick = function () {
            _this.current = new Date();
            _this.solveMeta();
            _this.engine.fillStyle = '#000';
            _this.engine.clearRect(0, 0, _this.meta.width, _this.meta.height);
            _this.engine.fillRect(0, 0, _this.meta.width, _this.meta.height);
            //draw part
            _this.drawFps();
            _this.drawStar();
            _this.drawBackgroundTime();
            _this.drawPattern();
            _this.drawForegroundTime();
            _this.drawDigital();
            _this.frame(_this.tick);
        };
        /**
         * draw time part
         *
         * @param {number} radius
         * @param {number} time
         * @param {number} maxTime
         */
        this.drawTimePart = function (radius, time, maxTime, configPart) {
            var angleWidth = Math.PI * 2 / maxTime;
            var angleMid = time * angleWidth - 0.5 * Math.PI;
            var length = 8;
            if (this.anti) {
                angleMid = 0 - angleMid;
                length = 8;
            }
            var startAngle = angleMid - Math.PI / length;
            var endAngle = angleMid + Math.PI / length;
            this.engine.strokeStyle = configPart.foreground;
            this.engine.lineWidth = configPart.width;
            this.engine.beginPath();
            this.engine.arc(this.meta.middle.x, this.meta.middle.y, radius - configPart.width, startAngle, endAngle);
            this.engine.stroke();
            this.engine.closePath();
            if (!this.anti) {
                this.engine.strokeStyle = '#fff';
                this.engine.lineWidth = 20;
                this.engine.beginPath();
                this.engine.arc(this.meta.middle.x, this.meta.middle.y, radius, angleMid - 0.01, angleMid + 0.01);
                this.engine.stroke();
                this.engine.closePath();
            }
        };
        this.canvas = canvasElement.nativeElement;
        this.engine = this.canvas.getContext('2d');
        // get the window the canvas lives in
        this.frame = window.nativeWindow.requestAnimationFrame || window.nativeWindow.webkitRequestAnimationFrame || function (cb) { return setTimeout(cb, 30); };
        this.star = new Array();
        this.size = 0.9;
        this.radius = this.size / 2;
        var current = null;
        this.fps = {
            val: 0,
            refresh: 50,
            tick: 0,
            start: new Date()
        };
        this.meta = {
            width: 0,
            height: 0,
            size: 0,
            radius: 0,
            middle: {
                x: 0,
                y: 0
            }
        };
    }
    /**
     * init
     */
    HudClockEngine.prototype.run = function () {
        this.generateStar();
        this.canvas.setAttribute('width', this.config.width.toString() + "px");
        this.canvas.setAttribute('height', this.config.height.toString() + "px");
        this.frame(this.tick);
    };
    /**
     * draw digital watch
     */
    HudClockEngine.prototype.drawDigital = function () {
        if (this.config.drawDigital) {
            var time = [
                this.n(this.current.getHours()),
                this.current.getSeconds() % 2 ? ':' : ' ',
                this.n(this.current.getMinutes())
            ].join('');
            var size = 30;
            var padding = 10;
            this.engine.font = size + 'px Arial';
            var m = this.engine.measureText(time);
            //engine.fillStyle = 'rgba(0,0,0,0.5)';
            //engine.fillRect(
            //    meta.middle.x - m.width / 2 - padding,
            //    meta.middle.y - size / 2 - padding,
            //    m.width + padding * 2,
            //    size + padding * 2
            //);
            this.engine.fillStyle = '#fff';
            this.engine.fillText(time, this.meta.middle.x - m.width / 2, this.meta.middle.y + size / 2);
        }
    };
    /**
     * @param ne
     * @returns {*}
     */
    HudClockEngine.prototype.n = function (ne) {
        if (ne < 10) {
            return '0' + ne;
        }
        return ne.toString();
    };
    
    /**
     * draw lines for evers hour and minute
     */
    HudClockEngine.prototype.drawPattern = function () {
        //#1
        this.engine.strokeStyle = 'rgba(255,255,255,0.2)';
        this.engine.lineWidth = 2;
        this.engine.beginPath();
        this.engine.arc(this.meta.middle.x, this.meta.middle.y, this.meta.radius * 0.8 - this.meta.radius / 12, 0, Math.PI * 2);
        this.engine.stroke();
        this.engine.closePath();
        //#1.5
        this.engine.strokeStyle = 'rgba(255,255,255,0.2)';
        this.engine.beginPath();
        this.engine.arc(this.meta.middle.x, this.meta.middle.y, this.meta.radius * 0.8 + this.meta.radius / 12, 0, Math.PI * 2);
        this.engine.stroke();
        this.engine.closePath();
        //#2
        this.engine.strokeStyle = 'rgba(0,0,0,0.5)';
        this.engine.lineWidth = this.meta.radius / 6;
        this.engine.beginPath();
        this.engine.arc(this.meta.middle.x, this.meta.middle.y, this.meta.radius * 0.8, 0, Math.PI * 2);
        this.engine.stroke();
        this.engine.closePath();
        var angleWidth = Math.PI * 2 / 60;
        var seconds = this.current.getSeconds() + this.current.getMilliseconds() / 1000;
        for (var i = 0; i < 60; i++) {
            var angleMid = i * angleWidth - 0.5 * Math.PI;
            var startAngle = angleMid - Math.PI / 500;
            var endAngle = angleMid + Math.PI / 500;
            //var opa = (60 - seconds + i - 1) % 60;
            //
            //engine.strokeStyle = 'rgba(' + [255, 255, 255, opa / 60].join(',') + ')';
            if (i === seconds) {
                this.engine.strokeStyle = '#0a0';
            }
            else {
                var opa = 1 - Math.min(Math.abs(i - 60 - seconds), Math.abs(i - seconds), Math.abs(i + 60 - seconds)) / 15;
                this.engine.strokeStyle = 'rgba(' + [255, 255, 255, opa].join(',') + ')';
            }
            this.engine.lineWidth = this.meta.radius / 20;
            this.engine.beginPath();
            this.engine.arc(this.meta.middle.x, this.meta.middle.y, this.meta.radius * 0.8, startAngle, endAngle);
            this.engine.stroke();
            this.engine.closePath();
        }
        angleWidth = Math.PI * 2 / 12;
        for (var i = 0; i < 12; i++) {
            var angleMid = i * angleWidth - 0.5 * Math.PI;
            var startAngle = angleMid - Math.PI / 200;
            var endAngle = angleMid + Math.PI / 200;
            this.engine.strokeStyle = 'rgba(255,255,255,0.6)';
            this.engine.lineWidth = this.meta.radius / 7;
            this.engine.beginPath();
            this.engine.arc(this.meta.middle.x, this.meta.middle.y, this.meta.radius * 0.75, startAngle, endAngle);
            this.engine.stroke();
            this.engine.closePath();
        }
    };
    /**
     * draw background clock
     */
    HudClockEngine.prototype.drawBackgroundTime = function () {
        this.drawBackgroundTimePart(this.meta.radius / 3 + 20, this.current.getHours() + this.current.getMinutes() / 60, 12, this.config.hour);
        this.drawBackgroundTimePart(this.meta.radius * 0.65 + 20, this.current.getMinutes() + this.current.getSeconds() / 60, 60, this.config.minute);
        this.drawBackgroundTimePart(this.meta.radius + 20, this.current.getSeconds() + this.current.getMilliseconds() / 1000, 60, this.config.second);
    };
    
    /**
     * draw foreground clock
     */
    HudClockEngine.prototype.drawForegroundTime = function () {
        this.drawTimePart(this.meta.radius / 3, this.current.getHours() + this.current.getMinutes() / 60, 12, this.config.hour);
        this.drawTimePart(this.meta.radius * 0.65, this.current.getMinutes() + this.current.getSeconds() / 60, 60, this.config.minute);
        this.drawTimePart(this.meta.radius, this.current.getSeconds() + this.current.getMilliseconds() / 1000, 60, this.config.second);
        this.drawTimePart(this.meta.radius / 15, this.current.getMilliseconds(), 1000, this.config.milli);
        this.drawTimePart(this.meta.radius / 15, this.current.getMilliseconds() + 250, 1000, this.config.milli);
        this.drawTimePart(this.meta.radius / 15, this.current.getMilliseconds() + 500, 1000, this.config.milli);
        this.drawTimePart(this.meta.radius / 15, this.current.getMilliseconds() + 750, 1000, this.config.milli);
    };
    
    /**
     * draw bg time part
     *
     * @param {number} radius
     * @param {number} time
     * @param {number} maxTime
     * @param {{}} config
     */
    HudClockEngine.prototype.drawBackgroundTimePart = function (radius, time, maxTime, configPart) {
        this.engine.globalAlpha = 0.5;
        var angleWidth = Math.PI * 2 / maxTime;
        var angleMid = time * angleWidth - 0.5 * Math.PI;
        var startAngle = angleMid - Math.PI / 1.5;
        var endAngle = angleMid + Math.PI / 1.5;
        this.engine.fillStyle = configPart.background;
        //### 1
        var grd = this.engine.createRadialGradient(this.meta.middle.x, this.meta.middle.y, radius / 2, this.meta.middle.x, this.meta.middle.y, radius);
        grd.addColorStop(0, 'rgba(0,0,0,0)');
        grd.addColorStop(1, configPart.background);
        this.engine.fillStyle = grd;
        this.engine.beginPath();
        this.engine.moveTo(this.meta.middle.x, this.meta.middle.y);
        this.engine.arc(this.meta.middle.x, this.meta.middle.y, radius, startAngle, endAngle);
        this.engine.fill();
        this.engine.closePath();
        //### 2
        grd = this.engine.createRadialGradient(this.meta.middle.x, this.meta.middle.y, radius / 2, this.meta.middle.x, this.meta.middle.y, radius);
        grd.addColorStop(0, 'rgba(0,0,0,0)');
        grd.addColorStop(1, 'rgba(0,200,0,0.5)');
        this.engine.fillStyle = grd;
        this.engine.beginPath();
        this.engine.moveTo(this.meta.middle.x, this.meta.middle.y);
        this.engine.arc(this.meta.middle.x, this.meta.middle.y, radius, startAngle + Math.PI / 2, endAngle - Math.PI / 2);
        this.engine.fill();
        this.engine.closePath();
        this.engine.globalAlpha = 1;
    };
    /**
     * solve and render fps
     */
    HudClockEngine.prototype.drawFps = function () {
        if (this.config.showBottomTime) {
            this.fps.tick--;
            // measure frames per second for debugging
            if (this.fps.tick <= 0) {
                var diffTime = (new Date() - this.fps.start) / 1000;
                this.fps.val = (this.fps.refresh / diffTime * 10) / 10;
                this.fps.start = new Date();
                this.fps.tick = this.fps.refresh;
            }
            this.engine.font = '10px Arial';
            this.engine.fillStyle = '#fff';
            var bottomText = [
                this.n(this.current.getHours()),
                this.current.getSeconds() % 2 ? ':' : ' ',
                this.n(this.current.getMinutes()),
                this.current.getSeconds() % 2 ? ':' : ' ',
                this.n(this.current.getSeconds())
            ].join('');
            var metric = this.engine.measureText(bottomText);
            this.engine.fillText(bottomText, (this.meta.width / 2) - (metric.width / 2), this.meta.height - 5);
        }
    };
    /**
     * generate Star line setup
     */
    HudClockEngine.prototype.generateStar = function () {
        for (var i = 0; i < this.config.starCount; i++) {
            this.star.push({
                width: Math.random(),
                deg: Math.random() * 360,
                color: Math.random(),
                colorDir: Math.random() < 0.5 ? this.config.star.fadeSpeed : -this.config.star.fadeSpeed
            });
        }
    };
    Object.defineProperty(HudClockEngine.prototype, "width", {
        /**
         * height of canvas
         * @returns {string}
         */
        get: function () {
            return parseInt(this.canvas.getAttribute('width'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HudClockEngine.prototype, "height", {
        /**
         * height of canvas
         * @returns {string}
         */
        get: function () {
            return parseInt(this.canvas.getAttribute('height'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HudClockEngine.prototype, "middle", {
        /**
         * get mid coords from the clock
         * @returns {{x: number, y: number}}
         */
        get: function () {
            return { x: this.width / 2, y: this.height / 2 };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * cache size properties
     */
    HudClockEngine.prototype.solveMeta = function () {
        this.meta.width = this.width;
        this.meta.height = this.height;
        this.meta.radius = Math.min(this.meta.width, this.meta.height) * this.radius;
        this.meta.size = Math.min(this.meta.width, this.meta.height);
        this.meta.middle = this.middle;
    };
    /**
     * draw clock star lines
     */
    HudClockEngine.prototype.drawStar = function () {
        this.engine.strokeStyle = this.config.star.color;
        for (var i = 0; i < this.star.length; i++) {
            var starLine = this.star[i];
            var relX = Math.sin(starLine.deg / 360 * Math.PI * 2);
            var relY = Math.cos(starLine.deg / 360 * Math.PI * 2);
            this.engine.beginPath();
            this.engine.moveTo(this.meta.middle.x, this.meta.middle.y);
            this.engine.lineTo(this.meta.middle.x + relX * starLine.width * this.meta.radius, this.meta.middle.y + relY * starLine.width * this.meta.radius);
            this.engine.lineWidth = (1 - starLine.width) * 5;
            if (this.config.star.fade) {
                this.engine.globalAlpha = this.config.star.minOpacity + (1 - this.config.star.minOpacity) * starLine.color;
                starLine.color += starLine.colorDir;
                if (starLine.color >= 1 || starLine.color <= 0) {
                    starLine.color = starLine.color | 0;
                    starLine.colorDir = -starLine.colorDir;
                }
            }
            this.engine.stroke();
            this.engine.closePath();
        }
        this.engine.globalAlpha = 1;
    };
    return HudClockEngine;
}());

var __decorate$17 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function _window() {
    // return the global native browser window object
    return window;
}
exports.WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
exports.WindowRef = __decorate$17([
    _angular_core.Injectable()
], exports.WindowRef);

var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Fancy HUD analog clock, animated.
 */
exports.HudClock = (function () {
    function HudClock(rd, window) {
        this.rd = rd;
        this.window = window;
        this.minuteClock = new _angular_core.EventEmitter();
        this.hourClock = new _angular_core.EventEmitter();
        // assume pixel
        this.width = 200;
        this.height = 200;
    }
    HudClock.prototype.ngAfterViewInit = function () {
        var _this = this;
        var initialConfig = {
            width: this.width,
            height: this.height,
            starCount: 500,
            showBottomTime: true,
            drawDigital: true,
            star: {
                minOpacity: 0.1,
                fade: true,
                fadeSpeed: 0.02,
                color: '#0a0'
            },
            hour: {
                foreground: '#aaa',
                background: '#000',
                width: 3,
            },
            minute: {
                foreground: '#aaa',
                background: '#000',
                width: 3,
            },
            second: {
                foreground: '#aaa',
                background: '#000',
                width: 3,
            },
            milli: {
                foreground: 'rgba(0,0,0,0.1)',
                background: '#000',
                width: 3,
            }
        };
        if (!this.config) {
            this.config = new _angular_core.EventEmitter();
            this.config.emit(initialConfig);
            this.config.subscribe(function (newConfig) {
                _this.clock.config = newConfig;
                _this.clock.run();
            });
        }
        this.clock = new HudClockEngine(this.canvas, this.window, initialConfig);
        this.clock.run();
    };
    return HudClock;
}());
__decorate$16([
    _angular_core.Input(),
    __metadata$15("design:type", Number)
], exports.HudClock.prototype, "width", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$15("design:type", Number)
], exports.HudClock.prototype, "height", void 0);
__decorate$16([
    _angular_core.Input(),
    __metadata$15("design:type", _angular_core.EventEmitter)
], exports.HudClock.prototype, "config", void 0);
__decorate$16([
    _angular_core.Output(),
    __metadata$15("design:type", _angular_core.EventEmitter)
], exports.HudClock.prototype, "minuteClock", void 0);
__decorate$16([
    _angular_core.Output(),
    __metadata$15("design:type", _angular_core.EventEmitter)
], exports.HudClock.prototype, "hourClock", void 0);
__decorate$16([
    _angular_core.ViewChild('clockCanvas'),
    __metadata$15("design:type", _angular_core.ElementRef)
], exports.HudClock.prototype, "canvas", void 0);
exports.HudClock = __decorate$16([
    _angular_core.Component({
        selector: 'hud-clock',
        styles: ["canvas#hud-clock {margin:0 auto;display:block;width:200px;height:200px}"],
        template: "<canvas id=\"hud-clock\" #clockCanvas></canvas>"
    }),
    __param$2(1, _angular_core.Inject(exports.WindowRef)),
    __metadata$15("design:paramtypes", [_angular_core.Renderer, exports.WindowRef])
], exports.HudClock);

var HudClockOptions = (function () {
    function HudClockOptions() {
    }
    return HudClockOptions;
}());

var AcInfoBoxOptions$1 = (function () {
    function AcInfoBoxOptions() {
        this.hasProgress = false;
        this.hasFooter = false;
        this.color = exports.Meaning.Danger;
    }
    return AcInfoBoxOptions;
}());

Object.same = function (source, target) {
    if (source === target)
        return true;
    if (!(source instanceof Object) || !(target instanceof Object)) {
        return false;
    }
    // if they are not strictly equal, they both need to be Objects
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        if (source[prop] === undefined || source[prop] === null || source[prop] === '') {
            continue;
        }
        if (typeof source[prop] === 'object' && Object.same(source[prop], target[prop])) {
            continue;
        }
        if (typeof source[prop] === 'string' && target[prop].startsWith(source[prop])) {
            continue;
        }
        if (source[prop] === target[prop]) {
            continue;
        }
        return false;
    }
    return true;
};
Object.equals = function (x, y) {
    if (x === y) {
        return true;
    }
    // if both x and y are null or undefined and exactly the same
    if (!(x instanceof Object) || !(y instanceof Object)) {
        return false;
    }
    // if they are not strictly equal, they both need to be Objects
    if (x.constructor !== y.constructor) {
        return false;
    }
    // they must have the exact same prototype chain, the closest we can do is
    // test there constructor.
    for (var p in x) {
        if (!x.hasOwnProperty(p)) {
            continue;
        }
        // other properties were tested using x.constructor === y.constructor
        if (!y.hasOwnProperty(p)) {
            return false;
        }
        // allows to compare x[ p ] and y[ p ] when set to undefined
        if (x[p] === y[p]) {
            continue;
        }
        // if they have the same strict value or identity then they are equal
        if (typeof (x[p]) !== "object") {
            return false;
        }
        // Numbers, Strings, Functions, Booleans must be strictly equal
        if (!Object.equals(x[p], y[p])) {
            return false;
        }
    }
    for (p in y) {
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
};

/**
 * Describe a header field with name and tooltip.
 */
var AcDataGridHeader = (function () {
    /**
     * The ctor
     * @param text: Text to display
     * @param desc: Tooltip
     * @param prop: the properties internal name
     */
    function AcDataGridHeader(text, desc, prop) {
        this.text = text;
        this.desc = desc;
        this.prop = prop;
    }
    return AcDataGridHeader;
}());

(function (Direction) {
    Direction[Direction["Ascending"] = 0] = "Ascending";
    Direction[Direction["Descending"] = 1] = "Descending";
})(exports.Direction || (exports.Direction = {}));
/**
 * The controlling class for Grid applications.
 *
 * This class takes an array of elements and handles:
 * - visible headers, managed by @Hidden() decorator
 * - create header titles, managed by @Display() decorator
 * - sorting
 * - filtering
 * - count total rows
 * - paging
 */
var AcDataGridModel = (function () {
    function AcDataGridModel(items, typeInstance, pageSize) {
        if (pageSize === void 0) { pageSize = 10; }
        this.searchValue = {};
        this.currentPageIndex = 1;
        this._items = items;
        this.pageSize = pageSize;
        if (typeInstance) {
            // make header from decorators, omit if null
            this.createHeadersForType(typeInstance);
        }
    }
    Object.defineProperty(AcDataGridModel.prototype, "totalRows", {
        get: function () {
            return this._items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcDataGridModel.prototype, "totalFilteredRows", {
        get: function () {
            return this.itemsFiltered.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcDataGridModel.prototype, "currentRowStart", {
        get: function () {
            return this.totalRows > this.pageSize
                ? (this.startRow + 1)
                : this.totalRows === 0 ? 0 : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcDataGridModel.prototype, "currentRowEnd", {
        get: function () {
            return (this.startRow + this.pageSize) < this.totalRows
                ? (this.startRow + this.pageSize)
                : this.totalRows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcDataGridModel.prototype, "startRow", {
        get: function () {
            if (this.currentPageIndex === 0) {
                return 0;
            }
            return (this.currentPageIndex - 1) * this.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcDataGridModel.prototype, "maxPageIndex", {
        get: function () {
            var index = Math.ceil(this.totalFilteredRows / this.pageSize);
            return index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcDataGridModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    AcDataGridModel.prototype.getItemSorted = function (sortColumn, sortDirection) {
        if (sortDirection === exports.Direction.Ascending) {
            return this.items.sort(function (a, b) { return a[sortColumn] > b[sortColumn] ? 1 : -1; });
        }
        else {
            return this.items.sort(function (a, b) { return a[sortColumn] < b[sortColumn] ? 1 : -1; });
        }
    };
    Object.defineProperty(AcDataGridModel.prototype, "itemsFiltered", {
        get: function () {
            var _this = this;
            return this.items.filter(function (item) { return Object.same(_this.searchValue, item); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcDataGridModel.prototype, "itemsOnCurrentPage", {
        get: function () {
            return this.itemsFiltered.slice(this.startRow, this.startRow + this.pageSize);
        },
        enumerable: true,
        configurable: true
    });
    // The view can get col by col filtered for valid headers
    AcDataGridModel.prototype.columnsOfItem = function (item) {
        // we return all if no headers
        var columns = new Array();
        if (!this.headers) {
            for (var prop in item) {
                columns.push(item[prop]);
            }
        }
        else {
            this.headers.forEach(function (e, idx) { return columns.push(item[e.prop]); });
        }
        return columns;
    };
    AcDataGridModel.prototype.sortColumn = function (colName, dir) {
        this.items.sort(function (a, b) { return dir === 'desc' ? (a[colName] > b[colName] ? 1 : -1) : (a[colName] > b[colName] ? -1 : 1); });
    };
    AcDataGridModel.prototype.createHeadersForType = function (type) {
        // assume simple object structure, iterating an array of viewmodels
        // has at least one row, so we can read the headers
        // first we read the properties
        this.headers = new Array();
        for (var p in type) {
            // either propname or decorator name
            var propName = type["__displayName__" + p] || p;
            var propDesc = type["__displayDesc__" + p] || p;
            // check if hidden, show if no hidden decorator
            var isHidden = type["__isHidden__" + p] || false;
            if (!isHidden) {
                this.headers.push(new AcDataGridHeader(propName, propDesc, p));
            }
        }
    };
    return AcDataGridModel;
}());

/** The state of node */

(function (AcTreeNodeState) {
    AcTreeNodeState[AcTreeNodeState["undefined"] = 0] = "undefined";
    AcTreeNodeState[AcTreeNodeState["checked"] = 1] = "checked";
    AcTreeNodeState[AcTreeNodeState["disabled"] = 2] = "disabled";
    AcTreeNodeState[AcTreeNodeState["expanded"] = 4] = "expanded";
    AcTreeNodeState[AcTreeNodeState["selected"] = 8] = "selected";
})(exports.AcTreeNodeState || (exports.AcTreeNodeState = {}));
/** The view options of node */
var AcTreeNodeOptions$1 = (function () {
    function AcTreeNodeOptions(options) {
        if (options) {
        }
    }
    return AcTreeNodeOptions;
}());

var AcTreeNode$1 = (function () {
    function AcTreeNode(options, nodes) {
        this.options = options || new AcTreeNodeOptions$1();
        if (nodes && nodes instanceof Array) {
            this.children = nodes;
        }
        else {
            if (nodes) {
                this.children = [nodes];
            }
        }
        this.stateChange = new _angular_core.EventEmitter();
        this.state = exports.AcTreeNodeState.undefined;
    }
    Object.defineProperty(AcTreeNode.prototype, "path", {
        get: function () {
            // walk up tree and return path with names
            var p = new Array();
            p.push(this);
            var n = this;
            while (this.parent) {
                n = n.parent;
                p.push(n);
            }
            return p;
        },
        enumerable: true,
        configurable: true
    });
    AcTreeNode.prototype.hasDirectAncestor = function (node) {
        return this.parent !== undefined;
    };
    Object.defineProperty(AcTreeNode.prototype, "hasChildren", {
        get: function () {
            return this.children !== undefined && this.children.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    AcTreeNode.prototype.add = function (nodes) {
        if (nodes && nodes instanceof Array) {
            (_a = this.children).push.apply(_a, nodes);
        }
        else {
            this.children.push(nodes);
        }
        var _a;
    };
    AcTreeNode.prototype.remove = function (node) {
        var idx = this.children.indexOf(node);
        if (idx > -1) {
            this.children.splice(idx, 1);
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(AcTreeNode.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
            this.stateChange.emit(this._state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcTreeNode.prototype, "stateIsExpandend", {
        get: function () {
            return (this.state & exports.AcTreeNodeState.expanded) === exports.AcTreeNodeState.expanded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcTreeNode.prototype, "stateIsDisabled", {
        get: function () {
            return (this.state & exports.AcTreeNodeState.disabled) === exports.AcTreeNodeState.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcTreeNode.prototype, "stateIsSelected", {
        get: function () {
            return (this.state & exports.AcTreeNodeState.selected) === exports.AcTreeNodeState.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcTreeNode.prototype, "stateIsChecked", {
        get: function () {
            return (this.state & exports.AcTreeNodeState.checked) === exports.AcTreeNodeState.checked;
        },
        enumerable: true,
        configurable: true
    });
    return AcTreeNode;
}());

var __extends$5 = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AcTextTreeNode$1 = (function (_super) {
    __extends$5(AcTextTreeNode, _super);
    function AcTextTreeNode(text, options, nodes) {
        var _this = _super.call(this, options, nodes) || this;
        _this.text = text;
        _this.name = text; // default, must be set explicitly
        return _this;
    }
    return AcTextTreeNode;
}(AcTreeNode$1));

var __extends$6 = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AcComponentTreeNode$1 = (function (_super) {
    __extends$6(AcComponentTreeNode, _super);
    function AcComponentTreeNode(component, options, nodes) {
        var _this = _super.call(this, options, nodes) || this;
        _this.component = component;
        return _this;
    }
    return AcComponentTreeNode;
}(AcTreeNode$1));

var __decorate$18 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$16 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function validateRange(f, t) {
    return function (c) {
        if ((Number(f) || Number(t)) && Number(c.value)) {
            var fr = Number(f);
            var to = Number(t);
            var v = Number(c.value);
            return (!fr || v >= fr) && (!to || v <= to) ? null : {
                'range': {
                    valid: false
                }
            };
        }
        if ((Date.parse(f.toString()) || Date.parse(t.toString())) && Date.parse(c.value)) {
            var fr = Date.parse(f.toString());
            var to = Date.parse(t.toString());
            var v = Date.parse(c.value);
            return (!fr || v >= fr) && (!to || v <= to) ? null : {
                'range': {
                    valid: false
                }
            };
        }
    };
}
function validateCompare(p) {
    var changeEventWasAdded = false;
    return function (c) {
        var form = c.root;
        if (form && form.controls && !changeEventWasAdded) {
            form.controls[p].valueChanges.subscribe(function () {
                // trigger validation for particular element
                c.updateValueAndValidity();
            });
            changeEventWasAdded = true;
        }
        if (c.value) {
            // compare the current value with the referenced control's value
            return (!c.value || c.value == c.root['controls'][p].value) ? null : {
                'compare': {
                    valid: false
                }
            };
        }
    };
}
/**
 * The form validation service creates a FormGroup object from a viewmodel. If the viewmodel
 * has been decorated with validation decorators the validators are created accordingly.
 */
exports.FormValidatorService = (function () {
    function FormValidatorService(fb) {
        this.fb = fb;
    }
    FormValidatorService.prototype.build = function (target) {
        var valGroup = {};
        var errGroup = {};
        var form;
        var targetInstance;
        if (target) {
            // the cast is just to suppress TS errors and shows it's intentionally
            try {
                targetInstance = new target();
            }
            catch (ex) {
                console.error('Invalid viewmodel for FormValidatorService');
            }
        }
        if (targetInstance) {
            for (var propName in targetInstance) {
                var validators = new Array();
                var errmsgs = new Object();
                var isRequired = "__isRequired__" + propName in target.prototype;
                if (isRequired) {
                    errmsgs['required'] = target.prototype["__errRequired__" + propName];
                    validators.push(_angular_forms.Validators.required);
                }
                var hasMaxLength = "__hasMaxLength__" + propName in target.prototype;
                if (hasMaxLength) {
                    errmsgs['maxlength'] = target.prototype["__errMaxLength__" + propName];
                    var maxLength = parseInt(target.prototype["__hasMaxLength__" + propName], 10);
                    validators.push(_angular_forms.Validators.maxLength(maxLength));
                }
                var hasMinLength = "__hasMinLength__" + propName in target.prototype;
                if (hasMinLength) {
                    errmsgs['minlength'] = target.prototype["__errMinLength__" + propName];
                    var minLength = parseInt(target.prototype["__hasMinLength__" + propName], 10);
                    validators.push(_angular_forms.Validators.minLength(minLength));
                }
                var hasPattern = "__hasPattern__" + propName in target.prototype;
                if (hasPattern) {
                    errmsgs['pattern'] = target.prototype["__errPattern__" + propName];
                    var pattern = new RegExp(target.prototype["__hasPattern__" + propName]);
                    validators.push(_angular_forms.Validators.pattern(pattern));
                }
                var hasRangeFrom = "__hasRangeFrom__" + propName in target.prototype;
                var hasRangeTo = "__hasRangeTo__" + propName in target.prototype;
                if (hasRangeFrom || hasRangeTo) {
                    errmsgs['range'] = target.prototype["__errRange__" + propName];
                    var f = Number(target.prototype["__hasRangeFrom__" + propName]);
                    var t = Number(target.prototype["__hasRangeTo__" + propName]);
                    if (!f && !t) {
                        // If NaN assume Date
                        f = Date.parse(f.toString());
                        t = Date.parse(t.toString());
                    }
                    validators.push(validateRange(f, t));
                }
                var hasCompare = "__hasCompareProperty__" + propName in target.prototype;
                if (hasCompare) {
                    errmsgs['compare'] = target.prototype["__errCompareProperty__" + propName];
                    var compare = target.prototype["__withCompare__" + propName];
                    validators.push(validateCompare(compare));
                }
                if (validators.length === 0) {
                    // even if there is no validator we need to add the property to the group
                    valGroup[propName] = [target[propName]];
                }
                if (validators.length === 1) {
                    valGroup[propName] = [target[propName] || '', validators[0]];
                }
                if (validators.length >= 1) {
                    valGroup[propName] = [target[propName] || '', _angular_forms.Validators.compose(validators)];
                }
                errGroup[propName] = errmsgs;
            }
            // create form group
            form = this.fb.group(valGroup);
            // forward the model to the editors for easy access to other decorators
            // the cast is just to suppress TS errors and shows it's intentionally
            form['__editorModel__'] = targetInstance;
            // register controls and add messages
            for (var propName in errGroup) {
                var ctrl = form.controls[propName];
                if (!ctrl)
                    continue; // control might not be in the form
                form.controls[propName]['messages'] = errGroup[propName];
            }
        }
        // return FormGroup for immediate usage
        return form;
    };
    return FormValidatorService;
}());
exports.FormValidatorService = __decorate$18([
    _angular_core.Injectable(),
    __param$3(0, _angular_core.Inject(_angular_forms.FormBuilder)),
    __metadata$16("design:paramtypes", [_angular_forms.FormBuilder])
], exports.FormValidatorService);

exports.Required = Required;
exports.MaxLength = MaxLength;
exports.MinLength = MinLength;
exports.StringLength = StringLength;
exports.Pattern = Pattern;
exports.Email = Email;
exports.Range = Range;
exports.Compare = Compare;
exports.Display = Display;
exports.DisplayGroup = DisplayGroup;
exports.Placeholder = Placeholder;
exports.TemplateHint = TemplateHint;
exports.Hidden = Hidden;
exports.Readonly = Readonly;
exports.AcTab = AcTab;
exports.AcTabData = AcTabData;
exports.AcMenu = AcMenu;
exports.AcMenuItem = AcMenuItem;
exports.AcMenuHeaderItem = AcMenuHeaderItem;
exports.AcMenuLabelItem = AcMenuLabelItem;
exports.AcMenuLinkItem = AcMenuLinkItem;
exports.HudClockEngine = HudClockEngine;
exports.HudClockOptions = HudClockOptions;
exports.AcInfoBoxOptions = AcInfoBoxOptions$1;
exports.AcDataGridModel = AcDataGridModel;
exports.AcDataGridHeader = AcDataGridHeader;
exports.AcTreeNodeOptions = AcTreeNodeOptions$1;
exports.AcTreeNode = AcTreeNode$1;
exports.AcTextTreeNode = AcTextTreeNode$1;
exports.AcComponentTreeNode = AcComponentTreeNode$1;
exports.EnumConverter = EnumConverter;
exports.StringConverter = StringConverter;
exports.BooleanConverter = BooleanConverter;
exports.NumberConverter = NumberConverter;
exports.InputConverter = InputConverter;

Object.defineProperty(exports, '__esModule', { value: true });

})));
