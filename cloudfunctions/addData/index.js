// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = wx.cloud.database()
const caramelCollection = db.collection('caramel')
// 云函数入口函数
exports.main = async (event, context) => {
  return await caramelCollection.add({
    data: {
      title: "Can somebody go out for hot pot with me?",
      tags: ["hot", "pot"],
      price: 218.00,
      color: "red",
    }
  })
}
}