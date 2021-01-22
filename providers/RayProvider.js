'use strict'

const { ServiceProvider } = use('@adonisjs/fold')

class RayProvider extends ServiceProvider {
    /**
     * Register namespaces to the IoC container
     *
     * @method register
     *
     * @return {void}
     */
    register () {
        this.app.singleton('@faisal50x/ray', (app) => {
            const Config = app.use('Adonis/Src/Config').get('ray', {
                host: '127.0.0.1', port: 23517
            });
            const { default:Ray } = require('../build/index');
            return (...args) => new Ray(Config.host, Config.port).send(...args);
        });
    }

    /**
     * Attach context getter when all providers have
     * been registered
     *
     * @method boot
     *
     * @return {void}
     */
    boot () {

    }

}

module.exports = RayProvider;