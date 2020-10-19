const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
  },
  onGetUserInfo: function (e) {
    if (!this.logged && e.detail.userInfo) {
      console.log(app.globalData.userInfo);
      app.globalData.userInfo = e.detail.userInfo;
      console.log(app.globalData.userInfo);
      if(app.globalData.userInfo){
        wx.navigateTo({
          // url: '/pages/my/my',
          url: '/pages/index/index',
        })
      }else{
        wx.navigateTo({
          url: '/pages/auth/auth',
        })
      }
    }
  }
});
