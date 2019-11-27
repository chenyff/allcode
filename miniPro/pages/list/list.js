// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      listarr:[
        {
          date:'may 19 2019',
          title:'桔子分期',
          avatar:'/assets/img/i-ysq.png',
          detail_content:'新华社哈尔滨11月13日电（记者程子龙）12日至13日上午，黑龙江省大范围降下大雪，由于道路结冰以及冰雪堆积，全省境内至少10条高速公路全线封闭，省会城市哈尔滨雪天交通事故频发出现交通拥堵。目前，黑龙江省部分地区暴雪预警信号由蓝色升级为黄色',
          love_count:66,
          attention_count:88
        },
        {
          date: 'july 19 2019',
          title: '桔多多',
          avatar: '/assets/img/pointer.png',
          detail_content: '2日13时左右，黑龙江省部分地区开始降雪，至18时50分，部分地区降雪量已达6毫米以上。由于道路结冰及冰雪堆积，从12日晚开始，黑龙江省部分高速公路开始关闭。至13日上午，已有京哈高速、哈尔滨绕城高速、哈同高速、哈牡高速、哈大高速、大广高速、牡绥高速、牡复高速、建虎高速和建黑高速等10条高速公路全线封闭。另有鹤大高速、哈伊高速、大齐高速、绥北高速等部分站点封闭，禁止7座以上客车及危化品车辆通行。',
          love_count: 56,
          attention_count: 28
        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  toDetail(event){
    let index = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index,
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