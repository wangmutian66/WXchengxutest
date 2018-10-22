const app = getApp()

Page({
  data: {
    test:"你猜猜",
    items: [
              {
                    "url": "http://127.0.0.1/1.flv",
                    "title": "这是标题一"
              },
              {
                    "url": "http://127.0.0.1/2.flv",
                    "title": "这是标题二"
              }
        ]
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    //console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    var that = this;
    wx.request({
      url: 'http://mds.com/Home/Goods/activity.html',
      success:function(data){
        console.log(data.data.result);
        that.setData({
          test:"猜不到吧",
          items: data.data.result
        });
      }
    })
    
  },
})
