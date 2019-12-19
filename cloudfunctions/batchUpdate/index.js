// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const caramelCollection = db.collection('caramel')

// 云函数入口函数
exports.main = async (event, context) => {
  return await caramelCollection.update ({
    data:{
      price:1
    }  
  })
}