<script>
export default {
  created () {
    let userInfo = {
      "openId": "ocQa15F84KewfnLZrjtYjyRg1IMk",
      "nickName": "J.O",
      "gender": 0,
      "language": "zh_CN",
      "city": "Nanchang",
      "province": "Jiangxi",
      "country": "China",
      "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/78vDM2vOOAiaBUATzLjJ4icpQR8PwpqGib63ibC4joVEGzmdHicLlTtiaCSneSicU9KPxibw6qcq8SFGJCspicUFtPnoNpg/132"
    }
    let openId = userInfo.openId
    wx.setStorageSync('userInfo', userInfo);
    wx.setStorageSync('openId', openId);
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
@import './iconfont/iconfont.css';
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
page {
  background: #f4f4f4;
  height: 100%;
}
button {
  background: none;
  padding: 0;
  font-weight: normal;
  font-size: 32rpx;
  box-sizing: border-box;
}
button::after {
  border: 0;
}
view, text {
  font-size: 28rpx;
  color: #333;
}
.wxParse .p {
  margin: 0 !important;
}
.wxParse .img {
  display: block !important;
}
</style>
