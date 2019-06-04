import Vue from 'vue';
import Element from 'element-ui';
import plugin from '@/plugin';

import '@/theme/index.css';

Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(plugin);

export default async function( ctx ) {
    ctx.events.on( 'layout:logout', () => {
        window.location.href = '/logout';
    } );
}
