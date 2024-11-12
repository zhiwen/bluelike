// index.js
var DSProvince = require('../../data/province.js');
var DSCityGroup = require('../../data/city_group.js');
var DSGroupInfo = require('../../data/group_info.js');
var DSAppNotice = require('../../data/app_notice.js');

Page({
  data: {
    pcode: 'Beijing',
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 500,
    exitState: {},
    setInter: '',
    appNoticeInterval: 10000,//10 secs
    appNotice: '',
    memberList: DSGroupInfo.groupInfo.members,
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
    var rndIdx = Math.floor(Math.random() * DSAppNotice.appNotices.length);
    let appNotice = DSAppNotice.appNotices[rndIdx];

    var rndMemberIdx = Math.floor(Math.random() * DSGroupInfo.groupInfo.members.length);
    var member = DSGroupInfo.groupInfo.members[rndMemberIdx];

    var rndProvinceIdx = Math.floor(Math.random() * DSProvince.provinceList.length);
    var province = DSProvince.provinceList[rndProvinceIdx];

    appNotice = appNotice.replace("${name}", member).replace("${province}", province.name);
    return appNotice;
  },

  getPagedProvinceList: function () {
    var provinceList = DSProvince.provinceList;
    var sortedPList = provinceList.sort(this.provinceListSorting);
    var pagedPList = this.provinceListPaginateBySize(sortedPList, 10);
    return pagedPList;
  },

  getGroupList: function (provinceCode) {
    var filterGroupList = DSCityGroup.cityGroupList.filter(item => item.province == provinceCode);
    var groupList = [];
    filterGroupList.forEach(itm => {
      var newItm = { ...itm };
      var rndIdx = Math.floor(Math.random() * filterGroupList.length);
      newItm.reddot = ((rndIdx % 2) == 1);

      //全国搭子群名不自动生成
      if(itm.province != 10) {
        newItm.name = newItm.name + DSGroupInfo.groupInfo.groupNames[0];
      }
      
      var rndMsgIdx = Math.floor(Math.random() * DSGroupInfo.groupInfo.messages.length);
      var msg = DSGroupInfo.groupInfo.messages[rndMsgIdx];

      var rndMemberIdx = Math.floor(Math.random() * DSGroupInfo.groupInfo.members.length);
      var member = DSGroupInfo.groupInfo.members[rndMemberIdx];
      newItm.message = msg.replace("${name}", member);
      groupList.push(newItm);
    })
    return groupList;
  },

  provinceListSorting: function (itm1, itm2) {
    var order1 = (itm1.order == undefined ? 0 : itm1.order);
    var order2 = (itm2.order == undefined ? 0 : itm2.order);
    if (order1 < order2) {
      return 1;
    } else if (order1 > order2) {
      return -1;
    } else {
      return 0;
    }
  },

  provinceListPaginateBySize: function (plist, pageSize) {
    var arr = [];
    let subArr = [];
    arr.push(subArr);
    plist.forEach(itm => {
      subArr.push(itm);
      if (subArr.length >= pageSize) {
        subArr = [];
        arr.push(subArr);
      }
    });
    return arr;
  },

  itemTaped(e) {
    var provinceCode = e.currentTarget.dataset.pcode;
    var filterGroupList = this.getGroupList(provinceCode);
    this.setData({
      groupList: filterGroupList
    })
  }
});