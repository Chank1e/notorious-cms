class Logger {
    constructor(){
        this.info = _=>console.info(`[${new Date().toLocaleString()}] [Notorious info]${_}`)
        this.warn = _=>console.warn(`[${new Date().toLocaleString()}] [Notorious warn]${_}`)
        this.error = _=>console.error(`[${new Date().toLocaleString()}] [Notorious error] ${_}`)
        this.log = _=>console.log(`[${new Date().toLocaleString()}] [Notorious log]${_}`)
        this.table = _=>console.table(_)
    }
}
export default new Logger();