"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var i18next_1 = __importDefault(require("i18next"));
var i18next_fs_backend_1 = __importDefault(require("i18next-fs-backend"));
var path_1 = require("path");
// const resources = {
//   en: {
//     translation: {
//       k1: 'value 1'
//     }
//   },
//   'zh-CN': {
//     translation: {
//       k1: 'value 1 zh-CN'
//     }
//   }
// }
i18next_1.default
    .use(i18next_fs_backend_1.default)
    .init({
    // debug: true,
    fallbackLng: 'en',
    backend: {
        loadPath: (0, path_1.join)(__dirname, '../locales/{{lng}}/{{ns}}.json')
    },
    preload: ['en', 'zh-CN'],
    // using a backend does not need to pass resources!
    // resources,
    initImmediate: false
});
console.log(i18next_1.default.t('k1'));
console.log(i18next_1.default.t('k1', { lng: 'zh-CN' }));
