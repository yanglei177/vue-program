<template>
  <div>
    <x-header :left-options="{backText: ''}" title="资讯"></x-header>
    <swipeout>   
      <swipeout-item ref="swipeoutItem" :sensitivity="15" v-for="(item,index) of list" :key="index">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">{{del}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">{{ignore}}</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-b">{{index+1}}.{{item}}</div>
      </swipeout-item>
    </swipeout>
    <tabbar :eq="eq"></tabbar>
  </div>
</template>

<script>
import { XHeader, XButton, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
import Tabbar from 'components/Tabbar'

export default {
  data () {
    return {
      del: '删除',
      ignore: '忽略',
      list: [
        '蓝鲸钱包计划未来在美国上市',
        '蓝鲸钱包A轮融资数千万美金',
        '蓝鲸钱包计划未来在美国上市',
        '蓝鲸钱包A轮融资数千万美金',
        '蓝鲸钱包计划未来在美国上市',
        '蓝鲸钱包A轮融资数千万美金',
        '蓝鲸钱包计划未来在美国上市',
        '蓝鲸钱包A轮融资数千万美金'
      ],
      eq: 2
    }
  },
  components: {
    XHeader,
    XButton,
    Tabbar,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  },
  methods: {
    onButtonClick (type) {
      alert('on button click ' + type)
    }
    // change (index) {
    //   this.eq = index
    // }
  },
  activated: function () {
    this.eq = 2
  },
  deactivated: function () {
    this.eq = null
  }
}
</script>

<style lang="stylus" scoped>
  .demo-content
    padding: 10px 10px;
</style>
