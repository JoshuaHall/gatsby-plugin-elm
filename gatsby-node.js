"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreateWebpackConfig = void 0;
var onCreateWebpackConfig = function (_a, _b) {
    var actions = _a.actions, stage = _a.stage;
    var elmOptions = __rest(_b, []);
    var isDev = stage === "develop";
    var elmLoader = {
        loader: "elm-webpack-loader",
        options: __assign({ debug: isDev, forceWatch: isDev, optimize: !isDev }, elmOptions),
    };
    var elmRule = {
        test: /\.elm$/,
        exclude: [/[/\\\\]elm-stuff[/\\\\]/, /[/\\\\]node_modules[/\\\\]/],
        loader: elmLoader,
    };
    actions.setWebpackConfig({
        module: {
            rules: [elmRule],
        },
    });
};
exports.onCreateWebpackConfig = onCreateWebpackConfig;
