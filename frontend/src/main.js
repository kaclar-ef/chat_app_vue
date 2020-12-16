// Vueの導入と、エントリのインポート
import Vue from 'vue';
import App from './App';

// App.vueをエントリとしてレンダリング
new Vue({
  el: '#app',
  render: h => h(App)
})