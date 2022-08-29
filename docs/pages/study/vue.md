# vue2

## vuex的安装与引入
```javascript
npm install vuex --save
yarn add vuex
```
- src文件夹下新建store文件夹
- 在store文件夹下新建 index.js用来做状态管理
```javascript
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.store({
  // 相当于组件中的data,用来存放全局的数据
   state:{},
  //相当于组件中的computed,但是getters是全局的
   getters:{},
  //  相当于组件中的methods,但是不能使用异步方法
   mutations:{},
   actions:{},
   modules:{}
})
```
- 在main.js引入
```javascript
import store from "@store"
const el = new vue({
  store,
})
```
## 1、state
- 在store中定义数据，在组件中直接使用：
目录：store/index.js
```javascript
export default new Vuex.store({
   state:{
     num:0
   },
   getters:{},
   actions:{},
   mutations:{},
   modules:{}
})
```
目录：Home.vue
```javascript
<template>
  <div class='home'>
    <h2>Home页面的数字：{{ $store.state.num }}</h2>
  </div>
</template>
<script>
  export default {

  }
</script>
```
或者写为：
```javascript
<template>
  <div class='home'>
    <h2>Home页面的数字：{{ num }}</h2>
  </div>
</template>
<script>
  export default {
    computed:{
      num(){
        return this.$store.state.num
      }
    }

  }
</script>
```
## 2、getters
目录：store/index.js
```javascript
export default new Vuex.store({
   state:{
     num:0
   },
   getters:{
     getNum(state){
       return state.num
     }
   },
   actions:{},
   mutations:{},
   modules:{}
})
```
目录：Home.vue
```javascript
<template>
  <div class='home'>
    <h2>Home页面的数字：{{ $store.getters.getNum }}</h2>
  </div>
</template>
<script>
  export default {

  }
</script>
```
## 3、mutations
- 更改vuex中的store中的状态的唯一方法是提交mutation
目录：store/index.js
```javascript
export default new Vuex.store({
   state:{
     num:0
   },
   getters:{
     getNum(state){
       return state.num
     }
   },
   mutations:{
    //  payload是一个形参，如果在组件commit时，有这个参数传进来，就存在，没有就是undefined
     add(state,payload){
       state.num+=payload?payload:1
     }
   },
   actions:{},
   modules:{}
})
```
目录:btn.vue
```javascript
<template>
  <div>
    <button  @click="$store.commit('add',2)"></button>
    <button  @click="addFun"></button>
  </div>
</template>
<script>
  export default {
    methods:{
      // 或者
      addFun(){
        this.$store.commit('add',2)
      }
    }
  }
</script>
```
## 4、actions
- 是Store中专门处理异步的，最后提交还是mutation
目录：store/index.js
```javascript
export default new Vuex.store({
   state:{
     num:0
   },
   getters:{
     getNum(state){
       return state.num
     }
   },
   mutations:{
    //  payload是一个形参，如果在组件commit时，有这个参数传进来，就存在，没有就是undefined
     add(state,payload){
       state.num+=payload?payload:1
     },
     decrease(state){
      state.num--
     }
   },
   actions:{
    decreaseAsync(context){
      context.commit('decrease')
    }
   },
   modules:{}
})
```
目录：btn.vue
```javascript
<template>
  <div>
    <button  @click="$store.dispatch('decrease')"></button>
    <button  @click="reduce"></button>
    </div>
  </template>
  <script>
    export default {
      methods:{
        // 或者
        addFun(){
          this.$store.commit('add',2)
        }
        reduce(){
          this.$store.dispatch('decreaseAsync')
        }
      }
    }
  </script>
```

- 别的书写方式
目录：home.vue
```javascript
<template>
  <div class='home'>
    <h2>Home页面的数字：{{ $store.getters.getNum }}</h2>
  </div>
</template>
<script>
  import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
  export default {
    data(){},
    computed(){
      ...mapState(['num',...])
      ...mapGetters(['getNum'])
    },
    methods:{
      ...mapMutations(['add']),
      ...mapActions(['decreaseAsync'])
    }
  }
</script>
```


