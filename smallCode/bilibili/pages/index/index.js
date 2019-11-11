Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav:0,
    navList:[
      { text: '首页' },
      { text: '动画' },
      { text: '番剧' },
      { text: '国创' },
      { text: '音乐' },
      { text: '舞蹈' },
      { text: '科技' },
      { text: '数码' },
      { text: '游戏' },
      { text: '娱乐' },
      { text: '鬼畜' },
      { text: '电影' },
      { text: '电视剧' },
      { text: '纪录片' },
      { text: '影视' },
      { text: '时尚' },
      { text: '生活' },
      { text: '广告' },
      { text: '直播' },
      { text: '相薄' }
    ]
  },
  activeNav(e){
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },
  // 获取首页导航数据
  getNavList(){
    let that = this;
    wx:wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(data){
        console.log(data);
        /* if(data.data.code === 0){
          that.setData({
            navList : data.data.data.navList
          })
        } */
      }
    })
  },
  //  https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList()
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