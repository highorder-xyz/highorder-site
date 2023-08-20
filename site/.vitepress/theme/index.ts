
import Layout from './Layout.vue'
import 'primeicons/primeicons.css';
import './theme.css'
import './style.css'
import PrimeVue from "primevue/config";
import Page from './components/Page.vue'
import Header from './components/Header.vue'
import Row from './components/Row.vue'
import Column from './components/Column.vue'
import Image from 'primevue/image';
import Logo from './components/Logo.vue'
import Element from './components/Element.vue'
import h_button from './components/h-button.vue';

export default {
    Layout,
    enhanceApp({ app, router, siteData }) {
        app.use(PrimeVue, { ripple: true });
        app.component('Page', Page)
        app.component('Element', Element)
        app.component('Header', Header)
        app.component('Row', Row)
        app.component('Column', Column)
        app.component('Image', Image)
        app.component('Logo', Logo)
        app.component('h-button', h_button)
    }
}
