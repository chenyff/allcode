Page({

  /**
   * 页面的初始数据
   */
  data: {
     index:1,
     pageIndex:0,
     knowledge:[
       {
         title:'悯农',
         content:'锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。',
         remarks:'形容农民不容易'
       },
       {
        title:'春晓',
        content:'春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
        remarks:'写得好'
      },
      {
       title:'静夜思',
       content:'床前明月光，疑似地上霜。举头望明月，低头思故乡',
       remarks:'李白想家了'
     }
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  //点击上一个或者下一个
  changeCon:function(event){
    let nextIndex = this.data.index+event.currentTarget.dataset.number*1;
    if(this.data.knowledge[nextIndex]){
      this.setData({
        index:nextIndex
      })
    }
  }
})