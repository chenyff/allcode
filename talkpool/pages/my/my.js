Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'陈宇飞',
    userInfo:{},
    isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断用户是否授权了
    this.handleUserInfoFn()
  },
  handleUserInfoFn(){
    wx.getSetting({
      success: (data) => {
        console.log(data)
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
        console.log(data);
        this.setData({
          userInfo: data.userInfo
        })
      }
    })
  },
  handleGetUserInfo(data){
      if(data.detail.rawData){
        //用户点击了允许
        this.handleUserInfoFn()
      }
  },
  //点击开启小程序之旅
  clickJump(){
    wx.redirectTo({
      url: '/pages/index/index',
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