<template>
  <div class="my">
    <div class="myinfo">
      <img :src="avator" />
      <div>
        <p v-if="userInfo.nickName">{{userInfo.nickName}}</p>
        <p v-else>点击登录</p>
        <p>微信用户</p>
      </div>
    </div>
    <div class="iconlist">
      <div v-for="(item, index) in listData" :key="index"
        @click="goTo(item.url)"
      >
        <span class="iconfont" :class="item.icon"></span>
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { get, login, toLogin } from '../../utils/index';

export default {
  data() {
    return {
      listData: [
        {
          title: "我的订单",
          icon: "icon-unie64a",
          url: ""
        },
        {
          title: "优惠券",
          icon: "icon-youhuiquan",
          url: ""
        },
        {
          title: "我的足迹",
          icon: "icon-zuji",
          url: ""
        },
        {
          title: "我的收藏",
          icon: "icon-shoucang",
          url: "/pages/collectlist/main"
        },
        {
          title: "地址管理",
          icon: "icon-dizhiguanli",
          url: "/pages/address/main"
        },
        {
          title: "联系客服",
          icon: "icon-lianxikefu",
          url: ""
        },
        {
          title: "帮助中心",
          icon: "icon-bangzhuzhongxin",
          url: ""
        },
        {
          title: "意见反馈",
          icon: "icon-yijianfankui",
          url: "/pages/feedback/main"
        }
      ],
      avator: '',
      allcheck: false,
      userInfo: {},
      Listids: []
    };
  },
  onShow() {
    if (login()) {
      this.userInfo = login()
      this.avator = this.userInfo.avatarUrl
    }else {
      toLogin()
    }
  },
  methods: {
    goTo(url) {
      wx.navigateTo({
        url
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style.less";
</style>