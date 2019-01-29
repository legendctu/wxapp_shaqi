// pages/infoPage/3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollOpenAni: ''
  },

  /*
    @func onStartScrollOpen
    @desc 点击开始滚动动画
  */
  onStartScrollOpen() {
    this.setData({
      scrollOpenAni: this.scrollOpenAni.export()
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
    this.scrollOpenAni = wx.createAnimation({
     duration: 6000, 
     timingFunction: 'ease-out'
    })

    let query = wx.createSelectorQuery(),
        scrollHeight = 0
    query.select('#bodyContainer').boundingClientRect()
    query.exec((rect) => {
        console.log(rect[0].height)
        scrollHeight = rect[0].height
        this.scrollOpenAni.height(scrollHeight).step()
        // this.setData({
        //  scrollOpenAni: animation.export()
        // })
    })
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