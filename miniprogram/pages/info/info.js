// miniprogram/pages/info/info.js
const db=wx.cloud.database()
const caramelCollection=db.collection('caramel')
const _=db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    caramelCollection.doc(options.id).field({
      title:true,
      price:true,
      price:true,
      tags:true
    }).get({
      success:res=>{
        this.setData({
          product:res.data,
          id:options.id
        })
      }
    })
  },

  addtag:function(event){
    caramelCollection.doc(this.data.id).update({
      data:{
        tags:_.push('cloud','pool')
      }
    }).then(res=>{console.log(res)})
  },

  deltag: function (event) {
    caramelCollection.doc(this.data.id).update({
      data: {
        tags: _.shift()
      }
    }).then(res => { console.log(res) })
  },

update:function(event){
  caramelCollection.doc(this.data.id).update({
    data: {
      title: "更新后的title"
    }
  })
},

batchUpdate:function(event){
  wx.cloud.callFunction({
    name:'batchUpdate',
    success:res=>{
      console.log(res)
    }
  })
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})