// pages/home/home.js
Page({
  NavigateToAdd:function(event){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  NavigateToIndex: function (event) {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  NavigateToComplex: function (event) {
    wx.navigateTo({
      url: '../complex/complex',
    })
  }
})