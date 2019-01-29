// pages/infoPage/7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.getTempFileURL({
      fileList: ['cloud://s-d314c0.732d-s-d314c0/images/7_1.jpg', 'cloud://s-d314c0.732d-s-d314c0/images/7_2.jpg', 'cloud://s-d314c0.732d-s-d314c0/images/7_3.jpg', 'cloud://s-d314c0.732d-s-d314c0/images/7_4.jpg', 'cloud://s-d314c0.732d-s-d314c0/images/7_5.jpg'],
      success: res => {
        this.setData({
          img1: res['fileList'][0]['tempFileURL'],
          img2: res['fileList'][1]['tempFileURL'],
          img3: res['fileList'][2]['tempFileURL'],
          img4: res['fileList'][3]['tempFileURL'],
          img5: res['fileList'][4]['tempFileURL']
        })
      },
      fail: console.error
    });
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