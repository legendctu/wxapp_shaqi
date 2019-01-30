// pages/infoPage/3.js
import regeneratorRuntime from '../../js/lib/runtime'
import Util from '../../js/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollOpenAni: '',
    audioInfo: []
  },

  /*
    @func onStartScrollOpen
    @desc 点击开始滚动动画
  */
  onStartScrollOpen() {
    this.setData({
      scrollOpenAni: this.scrollOpenAni.export()
    })
    console.log(this.audioCtx);
    this.audioCtx && this.audioCtx.play()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.getTempFileURL({
      fileList: ['cloud://s-d314c0.732d-s-d314c0/images/1_1.jpg','cloud://s-d314c0.732d-s-d314c0/audio/1.mp3'],
      success: res => {
        this.setData({
          audioInfo: res.fileList
        })
        this.audioCtx = wx.createAudioContext('audio')
      },
      fail: console.error
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  async onReady() {
    this.scrollOpenAni = await Util.scrollOpenAni('#bodyContainer')
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