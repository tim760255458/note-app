import Vue from 'vue'
import VueIziToast from 'vue-izitoast'
import 'izitoast/dist/css/iziToast.min.css'

// 使用案例：
// this.$toast.success('this is title', 'this is a content message', {
//   position: 'topRight', // 位置可选值 bottomLeft bottomRight topLeft topRight topCenter center
//   close: false, // 是否显示关闭按钮
//   timeout: 2000, // 时间 为0时不会自动隐藏
//   balloon: true // 是否为聊天气泡形式
// })

Vue.use(VueIziToast)
