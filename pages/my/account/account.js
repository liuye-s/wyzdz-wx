const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    sexIndex: null,
    regionIndex:null,
    sex: ['男', '女', '神'],
    region: ['北京市','天津市','上海市','重庆市','河北省','山西省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省','青海省','台湾省','内蒙古自治区','广西壮族自治区','西藏自治区','宁夏回族自治区','新疆维吾尔自治区','香港特别行政区','澳门特别行政区'],
    nickName:'',
    avatarUrl: '',
    textareaValue: '',
    isChange:false,
  },
  attached() {
    let that = this;
    console.log('个人信息');
    console.log(app.globalData.userInfo);
    if(app.globalData.userInfo){
      that.setData({
        nickName:app.globalData.userInfo.nickName,
        avatarUrl:app.globalData.userInfo.avatarUrl,
      })
    }
  },
  InputChange(e){
    this.setData({
      nickName: e.detail.value,
      isChange:true
    })
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      sexIndex: e.detail.value,
      isChange:true
    })
  },
  RegionChange: function(e) {
    this.setData({
      regionIndex: e.detail.value,
      isChange:true
    })
  },
  textareaInput(e) {
    this.setData({
      textareaBValue: e.detail.value,
      isChange:true
    })
  },
  saveUserInfo:function(){
    console.log('保存用户信息');
  },
  onLoad:function(){
    this.attached();
 }
})