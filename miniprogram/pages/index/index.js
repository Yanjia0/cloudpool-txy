//index.js
const db=wx.cloud.database()
const caramelCollection = db.collection('caramel')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    caramelCollection.get().then(res=>{
      this.setData({
        products:res.data
      })
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
    caramelCollection.get().then(res => {
      this.setData({
        products: res.data
      },res=>{
        console.log("数据更新完成")
        wx.stopPullDownRefresh()
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    caramelCollection.skip(page).get().then(res => {
      let new_data=res.data
      let old_data=this.data.products
      this.setData({
        products: old_data.concat(new_data)
      }, res => {
        console.log("数据更新完成")
        "wx.stopPullDownRefresh()"
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})