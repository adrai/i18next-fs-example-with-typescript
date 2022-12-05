"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var i18next_1 = __importDefault(require("i18next"));
var i18next_fs_backend_1 = __importDefault(require("i18next-fs-backend"));
var func1 = function () {
    var resources = {
        en: {
            translation: { "a": "b" },
        },
        zh_CN: {
            translation: { "c": "d" },
        },
    };
    i18next_1.default.use(i18next_fs_backend_1.default).init({ lng: 'en', resources: resources, initImmediate: false });
};
func1();
