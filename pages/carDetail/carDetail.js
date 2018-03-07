Page({
  data: {
    carinfo:{}
  },
  onLoad: function () {
    var info = getApp().globalData.curCarinfo;
    this.setData({
      carinfo: info
    })  
  }

})