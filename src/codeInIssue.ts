import i18n from "i18next";
import Backend from 'i18next-fs-backend';
const func1=()=>
{
const resources = {
en: {
translation: {"a":"b"},

},
zh_CN: {
translation: {"c":"d"},
},
};

i18n.use(Backend).init({ lng:'en',resources,initImmediate:false});
};
func1();