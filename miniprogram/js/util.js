import PromiseLib from 'lib/polyfill'

let Util = {
  /*
    @func Toast
    @desc Toast提示
    @params {obj | string} options 选项参数/提示内容
    @params {string} options.msg 提示内容
    @params {string} [options.icon] 提示图标
    @params {number} [options.duration] 提示时间, 默认2000ms
  */
  Toast: function (options) {
    let msg = typeof options === 'string' ? options : options.msg
        
    wx.showToast({
      title: msg,
      icon: options.icon || 'none',
      duration: options.duration || 2000
    })
  }, 
  /*
    @func scrollOpenAni
    @desc 卷轴滚动动画
    @params {string} domId 需要展开的元素id
  */
  scrollOpenAni(domId) {
    let scrollOpenAni = wx.createAnimation({
     duration: 6000, 
     timingFunction: 'ease-out'
    })

    let query = wx.createSelectorQuery(),
        scrollHeight = 0
    query.select(domId).boundingClientRect()
    return new Promise((resolve) => {
      query.exec((rect) => {
          scrollHeight = rect[0].height
          scrollOpenAni.height(scrollHeight).step()
          resolve(scrollOpenAni)
      })
    })
  }
}

export default Util