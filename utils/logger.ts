import log4js from 'log4js';

log4js.configure({
    appenders: {
        out: {
            type: 'stdout',
            layout:{
                type: 'pattern',
                pattern: '%[[%p]%] [%d] %f{1} : %l - %m%n'
            }
        }
    },
    categories:{
        default: {
            appenders: ['out'],
            level: 'info',
            enableCallStack: true
        }
    }
});

const logger = log4js.getLogger();

logger.level = 'debug';

export default logger;
