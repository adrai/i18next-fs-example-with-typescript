import i18n from 'i18next'
import Backend from 'i18next-fs-backend'
import { join } from 'path'

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

i18n
  .use(Backend)
  .init({
    // debug: true,
    fallbackLng: 'en',
    backend: {
      loadPath: join(__dirname, '../locales/{{lng}}/{{ns}}.json')
    },
    preload: ['en', 'zh-CN'],
    // using a backend does not need to pass resources!
    // resources,
    initImmediate:false
  })

console.log(i18n.t('k1'))
console.log(i18n.t('k1', { lng: 'zh-CN' }))