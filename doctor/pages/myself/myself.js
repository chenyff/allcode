// var app = getApp();
Page({
  data: {
    userInfo:{},
    isShow:false
  },
  onLoad: function (cb) {
    //判断用户是否授权了
    this.handleUserInfoFn()
  },
  handleUserInfoFn() {
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          //用户已经授权
          this.setData({
            isShow: false
          })
        } else {
          //没有授权
          this.setData({
            isShow: true
          })
        }
      }
    })
    wx.getUserInfo({
      success: data => {
        this.setData({
          userInfo: data.userInfo
        })
      }
    })
  },
  onShow: function () {
    
  },

  onPullDownRefresh: function () {
    this.onLoad(function () {
      wx.stopPullDownRefresh()
    })
  }
})