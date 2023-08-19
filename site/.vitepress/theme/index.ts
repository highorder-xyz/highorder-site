
import Layout from './Layout.vue'
import './style.css'
import Page from './components/Page.vue'
import Element from './components/Element.vue'
import Header from './components/Header.vue'
import Row from './components/Row.vue'
import Column from './components/Column.vue'

export default {
    Layout,
    enhanceApp({ app, router, siteData }) {
        app.component('Page', Page)
        app.component('Element', Element)
        app.component('Header', Header)
        app.component('Row', Row)
        app.component('Column', Column)
    }
}
