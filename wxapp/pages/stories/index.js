const app = getApp()

Page({
 data:{
   
 },
 testDrive(){
   console.log("test drive");
 },
 readMore(event){
   wx.navigateTo({
     url: `/pages/vehicles/show?id=${event.target.dataset.id}`
   })
 }

});