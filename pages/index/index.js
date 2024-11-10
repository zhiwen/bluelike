// index.js
Page({
  data: {
    pcode:'Beijing',
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 500,
    exitState:{},
    setInter: '',
    welcomeInterval:10000,//10 secs
    welcomeMemberIdx: 0,
    memberList :[
      "Zhiwen",
      "Peihua",
      "Mtee"
    ],

    provinceList: [
      [
        {
          code: 'Beijing',
          name: '北京市',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Tianjin',
          name: '天津市',
          imgUrl: 'https://q9.itc.cn/q_70/images03/20240421/5249507d224a4623802d9073db5cfa33.jpeg'
        },
        {
          code: 'Shanghai',
          name: '上海市',
          imgUrl: 'https://q6.itc.cn/q_70/images03/20240421/2e29da98cb114e60ac7fdf7a316b0973.jpeg'
        },
        {
          code: 'Chongqing',
          name: '重庆市',
          imgUrl: 'https://img.alicdn.com/imgextra/i2/2218319499637/O1CN010nchdF2L3nrYVy2HT_!!2218319499637.jpg'
        },
        {
          code: 'Hebei',
          name: '河北省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Shanxi',
          name: '山西省',
          imgUrl: 'https://img.alicdn.com/imgextra/i4/240262345/O1CN01aGQC0x1TC3mRfAz3R_!!240262345.jpg'
        },
        {
          code: 'Liaoning',
          name: '辽宁省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Jilin',
          name: '吉林省',
          imgUrl: 'https://img.alicdn.com/bao/uploaded/i4/240262345/O1CN01KT2Ztm1TC3mUJd2dv_!!240262345.jpg_760x760q50.jpg_.webp'
        },
        {
          code: 'Heilongjiang',
          name: '黑龙江省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Jiangsu',
          name: '江苏省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        }
      ],
      [
        {
          code: 'Zhejiang',
          name: '浙江省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Anhui',
          name: '安徽省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Fujian',
          name: '福建省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Jiangxi',
          name: '江西省',
          imgUrl: 'https://img.alicdn.com/imgextra/i4/2218319499637/O1CN01aBCOhl2L3nrXNR232_!!2218319499637.jpg'
        },
        {
          code: 'Shandong',
          name: '山东省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Henan',
          name: '河南省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Hubei',
          name: '湖北省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Hunan',
          name: '湖南省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Guangdong',
          name: '广东省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        }
      ],
      [
        {
          code: 'Hainan',
          name: '海南省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Sichuan',
          name: '四川省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Guizhou',
          name: '贵州省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Yunnan',
          name: '云南省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Shaanxi',
          name: '陕西省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Gansu',
          name: '甘肃省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Qinghai',
          name: '青海省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Taiwan',
          name: '台湾省',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'InnerMongolia',
          name: '内蒙古',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        }
      ],
      [
        {
          code: 'Guangxi',
          name: '广西',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        }, 
        {
          code: 'Xizang',
          name: '西藏',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        },
        {
          code: 'Ningxia',
          name: '宁夏',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        }, {
          code: 'Xinjiang',
          name: '新疆',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg'
        }
      ]
    ],
    groupList : {
      "Liaoning":[
        {
          group:'g2',
          reddot:false,
          imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/240262345/O1CN01Z6OpH41TC3leT3udH_!!240262345.png_760x760q50.jpg_.webp',
          name: '北京吃饭搭子群',
          message: 'This is desc of group2'
        },
        {
          group:'g3',
          reddot:true,
          imgUrl: 'https://img.alicdn.com/bao/uploaded/i3/240262345/O1CN01oVztEU1TC3m5taQxn_!!240262345.png_760x760q50.jpg_.webp',
          name: 'group3',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg',
          name: 'group3',
          message: 'This is desc of group3'
        }
      ],
      "Beijing":[
        {
          group:'g2',
          reddot: true,
          imgUrl: 'https://img.alicdn.com/bao/uploaded/i2/240262345/O1CN01cdTjUF1TC3lf5tAlV_!!240262345.jpg_760x760q50.jpg_.webp',
          name: '北京吃饭搭子群',
          message: '男宝子们，今天是周末，有没有人一起去朝阳街约饭的？？？'
        },
        {
          group:'g2',
          imgUrl: 'https://p7.itc.cn/q_70/images03/20230407/f9655ad0e7ed4f879ab8ec4d41ee02c1.jpeg',
          name: '北京爬山搭子群',
          message: '男宝子们，今天是周末，有没有人一起去朝阳街约饭的？？？'
        },
        {
          group:'g3',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg',
          name: '北京打球搭子群',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://img.alicdn.com/imgextra/i4/2168919291/O1CN011lzkiO2IVKU8CKS8V_!!2168919291.jpg',
          name: '北京唱K交友',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg',
          name: '北京徒步交友',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://img.alicdn.com/imgextra/i4/2218319499637/O1CN01aBCOhl2L3nrXNR232_!!2218319499637.jpg',
          name: '北京一起逛清华',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg',
          name: '走吧一起爬长城',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://p7.itc.cn/q_70/images03/20230407/f9655ad0e7ed4f879ab8ec4d41ee02c1.jpeg',
          name: '机场拼车',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://sns-webpic-qc.xhscdn.com/202411100400/3af7efa0193d5a55389153d087649757/1000g0082olhipsuk40605nklm6hg9c7sb2irt1g!nd_dft_wlteh_webp_3',
          name: '我在天安门',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://p7.itc.cn/q_70/images03/20230407/f9655ad0e7ed4f879ab8ec4d41ee02c1.jpeg',
          name: '机场拼车',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://sns-webpic-qc.xhscdn.com/202411100400/3af7efa0193d5a55389153d087649757/1000g0082olhipsuk40605nklm6hg9c7sb2irt1g!nd_dft_wlteh_webp_3',
          name: '我在天安门',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://p7.itc.cn/q_70/images03/20230407/f9655ad0e7ed4f879ab8ec4d41ee02c1.jpeg',
          name: '机场拼车',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://sns-webpic-qc.xhscdn.com/202411100400/3af7efa0193d5a55389153d087649757/1000g0082olhipsuk40605nklm6hg9c7sb2irt1g!nd_dft_wlteh_webp_3',
          name: '我在天安门',
          message: 'This is desc of group3'
        }
      ],
      "Zhejiang":[
        {
          group:'g2',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg',
          name: 'group2',
          message: 'This is desc of group2'
        },
        {
          group:'g3',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg',
          name: 'group3',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: 'https://www.shopwind.net/static/images/w.jpg',
          name: 'group3',
          message: 'This is desc of group3'
        }
      ]
    },
  },

  onLoad: function() {
    console.log("onLoad start");
    var that = this;
    that.data.setInter = setInterval(()=>{
      var memberIdx = Math.floor(Math.random() * this.data.memberList.length);
      console.log("memberIdx: "+memberIdx)
      this.setData({
        welcomeMemberIdx: memberIdx
      });
    }, that.data.welcomeInterval)
  },

  onHide: function() {
    var that = this;
    clearInterval(that.data.setInter);
    console.log("onHide triggered");
  },
  onUnload: function() {
    var that = this;
    clearInterval(that.data.setInter);
    console.log("onUnload triggered");
  },

  itemTaped(e){
    this.setData({
      pcode:e.currentTarget.dataset.pcode
    })
  }

});