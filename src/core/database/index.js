import logger from '../logger';
let DB = {};
export default function(db){
    const DB = db;
    return {
        key(){return DB.key},
        root(){return DB.ref()},
        select(e){
            console.log(DB)
            return DB.ref(e);
        },
        getAll(ref){
            return ref.once('value');
        },
        push(ref,item){
            return ref.push(item)
        }
    }
};