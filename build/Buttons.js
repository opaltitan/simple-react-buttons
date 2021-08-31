var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
export var ButtonsComponent = function (_a) {
    var params = _a.params;
    return (_jsx("div", __assign({ className: params.parentClass }, { children: params.buttons.map(function (button) {
            return _jsx("button", __assign({ onClick: function () { return button.clickCallback.apply(button, button.params); } }, { children: button.displayText }), button.id);
        }) }), void 0));
};
