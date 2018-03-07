//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: []
  },
  //事件处理函数
  carDetail: function(event) { 
    let aa;
    getApp().globalData.curCarinfo = event.currentTarget.dataset.hi; 
    wx.navigateTo({
      url: '../carDetail/carDetail'
    })
  },
  addCar: function () {
    wx.navigateTo({
      url: '../addCar/addCar'
    })
  },
  myTrips: function () {
    wx.navigateTo({
      url: '../myTrips/myTrips'
    })
  },
  onLoad: function () {
    var that = this; 
    wx.request({
      url: 'http://182.92.119.157:5002/veh/getVehList',
      data: {
        "entity": {
          "uid": "ddeb2fd4-ca28-4a89-ae58-b33ae584689d"
        }
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      header: {
        'Content-Type':'application/json',
         Accept: 'application/json;charset=utf-8'     
      }, // 设置请求的 header  
      success: function (res) {
        console.log(res.data.rows); 
        that.setData({
          result: res.data.rows
        })  
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    });  
   
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
