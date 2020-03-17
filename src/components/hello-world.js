import Vue from 'vue'
import template from './hello-world.html'
import style from './hello-world.less'

export default Vue.extend({
  template: template,
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
})
