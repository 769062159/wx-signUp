//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title:'2019年校园行',
    time:'报名时间：2019.4.20-2019.4.29',
    image:'../../images/1.jpg',
  },
  itemTap:function(e){
    let _this = this;
    wx.navigateTo({
      url: '../information/information?title=' + _this.data.title + '&time=' + _this.data.time
    })
  },
})
