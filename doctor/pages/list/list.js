// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [
      ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //在这里调用改变页面标题的方法
    this.changeTitle(options.title);
    //在这里调用请求接口的方法
    this.getDataFn(options.pageid);
    
  },
  //改变页面标题的
  changeTitle:function(title){
    wx.setNavigationBarTitle({
      title
    })
  },
  //获取数据的
  getDataFn:function(pageid){
    var _this = this;
    wx.request({
      method:'post',
      url: 'https://www.fengcaimi.cn/api/getList', 
      data: {
        who: pageid
      },
      success(res) {
        console.log(res)
        if(res.data.status == 'success'){
          _this.setData({
            itemList: res.data.data
          })
        }
        
      }
    })
  },
  //从这里跳到详情页面
  jumpInfo:function(event){
    wx.navigateTo({
      url: '/pages/itemInfo/itemInfo?data=' + JSON.stringify(event.target.dataset.info),
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