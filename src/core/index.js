import logger from './logger';
import {
  initApp
} from './init';
import DB_API from './database';

let PRIVATE_APP = {}


const NOTORIOUS_APP = {
  async init(cfg, mode = 'production') {
    await initApp(cfg.firebase, mode)
      .then(_ => {
        for (let key in DB_API(_.DB))
          this[key] = DB_API(_.DB)[key];
      });

    const self = this;
    return {
      NotoriousVue: {
        install(Vue) {
          Vue.prototype.Notorious = Vue.prototype.$nt = self;
        }
      },
      Notorious:self
    };
  }
}
export default NOTORIOUS_APP;
