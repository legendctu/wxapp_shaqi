// pages/infoPage/10.js
import regeneratorRuntime from '../../js/lib/runtime'
import Util from '../../js/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollOpenAni: '',
    audioReady: false,
    srcReady: false,
    audioBtnSrc: '../../images/play.png',
    audioStatus: 0
  },

  onAudioBtnControl() {
    if (this.data.audioStatus == 0) {
      this.setData({
        audioStatus: 1,
        audioBtnSrc: '../../images/pause.png'
      });
      this.audioCtx && this.audioCtx.play()
    } else {
      this.setData({
        audioStatus: 0,
        audioBtnSrc: '../../images/play.png'
      });
      this.audioCtx && this.audioCtx.pause()
    }
  },
  /*
    @func onStartScrollOpen
    @desc 点击开始滚动动画
  */
  onStartScrollOpen() {
    this.setData({
      scrollOpenAni: this.scrollOpenAni.export()
    });
    if (this.data.audioStatus == 0) {
      this.setData({
        audioStatus: 1,
        audioBtnSrc: '../../images/pause.png',
        audioReady: true
      });
      this.audioCtx && this.audioCtx.play();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.getTempFileURL({
      fileList: ['cloud://s-d314c0.732d-s-d314c0/images/10_1.jpg', 'cloud://s-d314c0.732d-s-d314c0/images/10_2.jpg', 'cloud://s-d314c0.732d-s-d314c0/images/10_3.jpg', 'cloud://s-d314c0.732d-s-d314c0/audio/10.mp3'],
      success: res => {
        this.setData({
          img1: res['fileList'][0]['tempFileURL'],
          img2: res['fileList'][1]['tempFileURL'],
          img3: res['fileList'][2]['tempFileURL'],
          srcReady: true
        });
        this.audioCtx = wx.createInnerAudioContext();
        this.audioCtx.src = res['fileList'][3]['tempFileURL'];
      },
      fail: console.error
    });
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
    this.audioCtx && this.audioCtx.stop();
    this.setData({
      audioStatus: 0,
      audioBtnSrc: '../../images/play.png'
    });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.audioCtx && this.audioCtx.stop();
    this.setData({
      audioStatus: 0,
      audioBtnSrc: '../../images/play.png'
    });
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