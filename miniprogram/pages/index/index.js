//index.js
const app = getApp()

Page({
  data: {
    
  },

  onLoad: function() {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

})
