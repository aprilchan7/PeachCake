// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   cakeUrl:[
      "https://s1.ax1x.com/2020/08/21/dtskXq.jpg",
      "https://s1.ax1x.com/2020/08/21/dtsptg.jpg",
      "https://s1.ax1x.com/2020/08/21/dtsEn0.png",
      "https://s1.ax1x.com/2020/08/21/dtsVBV.png"
   ],
   saladList:[
     "https://s1.ax1x.com/2020/08/21/dtOTUS.png",
     "https://s1.ax1x.com/2020/08/21/dtO74g.png",
     "https://s1.ax1x.com/2020/08/21/dtO5Hf.jpg"
   ]
  },
  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
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