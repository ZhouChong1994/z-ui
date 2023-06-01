import Button from '@pack/web-components/button';
import SearchBox from '@pack/web-components/SearchBox';
import CountUp from '@pack/web-components/count-up'


import common from "@/controller/common";

export default class WebSession {
    static getComponent() {
        let modules = {}
        try {
            const componentsList = require.context('@pack/web-components', true, /\.vue$/);
            componentsList.keys().forEach(key => {
                const component = componentsList(key).default
                modules[component.name] = component
            })
        } catch (e) {

        }
        return Object.assign(common, {
            ...modules
        })

    }
}