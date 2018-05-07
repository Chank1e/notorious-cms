import * as firebase from 'firebase';
import logger from './logger';

export async function initApp(cfg,mode){
    if(!cfg){
        logger.error('No config provided to init method');
        return ;
    }

    let is_dev = false;
    if(mode === 'development')
        is_dev = true

    const FB_APP = await firebase.initializeApp(cfg);

    const DB = await FB_APP.database();

    // if(is_dev)
    //     firebase.database.enableLogging(_=>logger.log(`->[Firebase] ${_}`))
    
    return { FB_APP, DB };
}