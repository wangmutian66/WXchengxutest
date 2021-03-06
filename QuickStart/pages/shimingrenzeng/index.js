// pages/shimingrenzeng/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:null,
    // 复选框的value，此处预定义，然后循环渲染到页面
    itemsValue: [
      {
        checked: true,
        value: "0.04",
        color: "#ff6600",
        title: "充值￥200"
      },
      {
        checked: false,
        value: "0.03",
        color: "#ff6600",
        title: "充值￥100"
      },
      {
        checked: false,
        value: "0.02",
        color: "#ff6600",
        title: "充值￥50"
      },
      {
        checked: false,
        value: "0.01",
        color: "#ff6600",
        title: "充值￥10"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wxlistarray(this);
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

function wxlistarray(that) {
  wx.request({
    url: 'http://www.guaizhangmen.com/author.php/Nexts/listarray', //仅为示例，并非真实的接口地址
    data: {},
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      console.log(res["data"]["dataList"]["chapterList"]);
      that.setData({ result:res["data"]["dataList"]["chapterList"] })
    }
  })
}