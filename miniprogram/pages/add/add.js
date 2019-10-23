const db=wx.cloud.database()
const caramelCollection=db.collection('caramel')
Page({
data:{

},
addData:function(event){
  console.log(event)
  wx.cloud.callFunction({
    name:'addData'
  }).then(res => {
    console.log(res)
    })
  // console.log(event)
  // caramelCollection.add({
  //   data:{
  //     title:"Today is a Good Day",
  //     image:"https://pic8.iqiyipic.com/image/20140704/7f/37/v_107214134_m_601_220_124.jpg",
  //     tags:["tag1",'tag2'],
  //     price:218.00,
  //     color:"brown",
  //   }
  // }).then(res =>{
  //   console.log(res)
  // })
}
 
})