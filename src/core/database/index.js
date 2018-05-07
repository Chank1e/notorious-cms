import logger from '../logger';
let DB = {};
export default function(db){
    const DB = db;
    let current_ref = undefined;
    return {
        key(){return DB.ref(current_ref).key},
        select(e){
            if(!e)
                return ;
            current_ref = e;
            return this;
        },
        async getAll(){
            const res = await DB.ref(current_ref).once('value');
            let arr = [];
            for(let key in res.val())
                arr.push({id:key,...res.val()[key]})
            return arr;
        },
        push(item){
            return DB.ref(current_ref).push(item)
        }
    }
};