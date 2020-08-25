// pages/peachCake/peachCake.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
     { 
       src:"https://s1.ax1x.com/2020/08/21/dts9hQ.png",
      text:"蛋糕系列"
    },
    { 
      src:"https://s1.ax1x.com/2020/08/21/dtsZ7T.png",
     text:"饮品系列"
   },
   { 
    src:"https://s1.ax1x.com/2020/08/21/dtXJqP.png",
   text:"水果沙拉"
 },
 { 
  src:"https://s1.ax1x.com/2020/08/21/dtsGB6.png",
 text:"鲜花蛋糕"
}
    ],
    store:[
      {
        src:"https://s1.ax1x.com/2020/08/21/dtvZtO.jpg",
        text:"舒适优雅的店面",
        txt:"适合三五朋友相约聚会享受时光"
      },
      {
        src:"https://s1.ax1x.com/2020/08/21/dtvA76.jpg",
        text:"旋转创意楼梯间",
        txt:"适合三五朋友相约聚会享受时光"
      },
      {
        src:"https://s1.ax1x.com/2020/08/21/dtvVAK.jpg",
        text:"2人座温馨一角",
        txt:"适合两朋友相约聚会享受时光"
      }
    ],
    toView: 'green'

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