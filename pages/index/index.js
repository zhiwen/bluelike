// index.js
var utils = require('../../utils/utils.js');
var DSProvince = require('../../data/province.js');
var DSCityGroup = require('../../data/city_group.js');
var DSGroupInfo = require('../../data/group_info.js');
var DSAppNotice = require('../../data/app_notice.js');

Page({
  data: {
    pcode: '',
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 500,
    setInter: '',
    appNoticeInterval: 10000,//10 secs
    appNotice: '',
    provinceList: [],
    groupList: []
  },

  onLoad: function () {
    console.log("onLoad start");
    var that = this;
    var pagedPList = this.getPagedProvinceList();
    var filterGroupList = this.getGroupList(pagedPList[0][0].code);
    var appNotice = this.generateAppNotice();
    this.setData({
      provinceList: pagedPList,
      groupList: filterGroupList,
      appNotice: appNotice
    });

    that.data.setInter = setInterval(() => {
      var appNotice = this.generateAppNotice();
      this.setData({
        appNotice: appNotice,
      });
    }, that.data.appNoticeInterval)
  },

  onHide: function () {
    var that = this;
    clearInterval(that.data.setInter);
    console.log("onHide triggered");
  },
  onUnload: function () {
    var that = this;
    clearInterval(that.data.setInter);
    console.log("onUnload triggered");
  },

  generateAppNotice: function () {
    let appNotice = utils.getRandomData(DSAppNotice.appNotices);
    var member = utils.getRandomData(DSGroupInfo.groupInfo.members);
    var province = utils.getRandomData(DSProvince.provinceList);
    appNotice = appNotice.replace("${name}", member).replace("${province}", province.name);
    return appNotice;
  },

  getPagedProvinceList: function () {
    var provinceList = DSProvince.provinceList;
    provinceList.forEach(itm => {
      if(utils.isBlankString(itm.imgUrl)) {
        itm.imgUrl = utils.getRandomData(DSProvince.provinceAvatars);
      }
    })

    var sortedPList = provinceList.sort(utils.arraySortingDesc);
    var pagedPList = utils.arrayListPagination(sortedPList, 10);
    
    return pagedPList;
  },

  getGroupList: function (provinceCode) {
    var filterGroupList = DSCityGroup.cityGroupList.filter(item => item.province == provinceCode);
    filterGroupList.forEach(itm => {
      // var newItm = { ...itm };
      
      // 随机生成小红点
      if(utils.isBlankString(itm.reddot)) {
        var rndIdx = utils.generateRandomIdx(filterGroupList.length);
        itm.reddot = ((rndIdx % 2) == 0 || filterGroupList.length == 1);
      }

      //全国搭子群名不自动生成
      if(itm.province != 10) {
        var groupName = DSGroupInfo.groupInfo.groupNames[0];
        if(itm.name.indexOf(groupName) <0) {
          itm.name = itm.name + groupName;
        }
      }

      if(utils.isBlankString(itm.imgUrl)) {
        itm.imgUrl = utils.getRandomData(DSCityGroup.cityGroupAvatars);
      }

      if(utils.isBlankString(itm.message)) {
        var msg = utils.getRandomData(DSGroupInfo.groupInfo.messages);
        var member = utils.getRandomData(DSGroupInfo.groupInfo.members);
        itm.message = msg.replace("${name}", member);
      }
    })
    return filterGroupList;
  },

  itemTaped(e) {
    var provinceCode = e.currentTarget.dataset.pcode;
    var filterGroupList = this.getGroupList(provinceCode);
    this.setData({
      groupList: filterGroupList
    })
  }
});