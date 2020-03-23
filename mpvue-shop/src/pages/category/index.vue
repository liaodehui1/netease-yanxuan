<template>
  <div class="category">
    <div class="search" @click="toSearch()">
      <div class="ser">
        <span class="icon"></span>
        <span>商品搜索，功239款好物</span>
      </div>
    </div>
    <div class="content">
      <scroll-view class="left" scroll-y="true">
        <div v-for="(item, index) in categoryList" :key="index" 
          :class="[index === nowIndex ? 'active' : '', 'iconText']"
          @click="selectItem(item.id, index)"
        >
          {{item.name}}
        </div>
      </scroll-view>
      <view class="right">
        <div class="banner">
          <img :src="detailData.banner_url" alt="">
        </div>
        <div class="title">
          <span>-</span>
          <span>{{detailData.name}}分类</span>
          <span>-</span>
        </div>
        <div class="bottom">
          <div class="item" v-for="(item,index) in subList" :key="index"
            @click="toCategoryList(item.id)"  
          >
            <img :src="item.wap_banner_url" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
      </view>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/index";
export default {
  data() {
    return {
      categoryList: [],
      nowIndex: 0,
      id: '',
      subList: []
    }
  },
  mounted() {
    this.getListData()
  },
  computed: {
    detailData() {
      return this.categoryList.length ? this.categoryList[this.nowIndex] : {}
    }
  },
  methods: {
    toSearch() {
      wx.navigateTo({
        url: '/pages/search/main'
      });
    },
    async getListData() {
      const data = await get('/category/indexaction', {
        id: this.id
      })
      console.log(data)
      this.categoryList = data.categoryList
      this.subList = data.subList
    },
    async selectItem(id, index)  {
      this.nowIndex = index
      this.id = id
      this.getListData()
    },
    toCategoryList(id) {
      wx.navigateTo({
        url: '/pages/categorylist/main?id=' + id
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>