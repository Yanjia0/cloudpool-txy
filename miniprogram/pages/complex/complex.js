// pages/complex/complex.js
const db = wx.cloud.database()
const caramelCollection = db.collection('caramel')
const _=db.command
Page({

  data: {
      count:'count'
  },
  simple:function(event){
    caramelCollection.get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  brown:function(event){
    caramelCollection.where({
      color:"brown"
    }).get().then(res=>{
      this.setData({
        products:res.data
      })
    })
  },
  little:function(event){
    caramelCollection.where({
      price: _.lt(50)
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  orderBy:function(event){
    caramelCollection.orderBy('price','asc').get().then(
      res=>{
        this.setData({
          products:res.data
        })
      })
  },
  count:function(event){
    caramelCollection.where({
      _openid: "o_VJ85Z_d2frUSRIEPBaLlGWAVdw"
    }).count().then(res=>{
      console.log(res)
      this.setData({
        count:res.total
      })
    })
  }
  
})