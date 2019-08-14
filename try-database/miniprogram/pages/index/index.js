//index.js
const app = getApp()
const db = wx.cloud.database();
const productCollection = db.collection('product');

Page({
  data: {
    product:[],
    page:0
  },
onLoad () {
  // lifecycle
  productCollection.get().then(res => {
    // console.log(res.data);
    this.setData({
      product:res.data
    })
  })
},
onPullDownRefresh() {
  productCollection.get().then(res => {
    this.setData({
      page:0,
      product:res.data
    },res => {
      wx.stopPullDownRefresh()
    })
  })
},
onReachBottom:function() {
  wx.showLoading();
  let page = this.data.page + 20;
  // let old_data = this.data.product;
  productCollection.skip(page).get().then(res => {
    wx.hideLoading();
    let new_data = res.data;
    let old_data = this.data.product
    this.setData({
      product:old_data.concat(new_data),//合并数组
      page:page
    })
  })
  this.setData({
    page:page
  })
}
})
