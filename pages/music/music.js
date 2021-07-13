
//index.js
//获取应用实例
const app = getApp()
var isLoop = true;
var isControls = true;
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/zzzzzmp3/2014iSep/15F/15xwsk/20.mp3',
    controls: true
  },
  onLoad: function () {


  },
  //开始播放
  audioPlay: function () {
    this.audioCtx.play()
  },
  //暂停播放
  audioPause: function () {
    this.audioCtx.pause()
  },
  //设置进度到57秒
  audio57: function () {
    this.audioCtx.seek(57)
  },
  //重新开始播放
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  //设置是否轮播播放
  audioLoop: function () {
    if (isLoop == true) {
      isLoop = false;
      this.setData({
        loop: true,
        controls: true
      })
    } else {
      isLoop = true;
      this.setData({
        loop: false,
        controls: false
      })
    }
  },
  //设置是否显示默认控件
  audioControls:function(){
    if (isControls == true){
      isControls = false;
      this.setData({
        controls:false
      })
    }else{
      isControls = true;
      this.setData({
        controls: true
      })
    }
  }

})
