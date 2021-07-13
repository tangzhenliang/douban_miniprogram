// index.js
// 获取应用实例
const app = getApp()

Page({
	data: {
		motto: 'Hello World',
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		canIUseGetUserProfile: false,
		canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse(
			'open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
		movies: []
	},
	// 事件处理函数
	bindViewTap() {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	onLoad() {
		if (wx.getUserProfile) {
			this.setData({
				canIUseGetUserProfile: true
			})
		}
		this.getDoubanTop()
	},
	onPullDownRefresh() {  // 下拉刷新
    this.getDoubanTop()
  },
	getDoubanTop() {
		var that = this
		wx.request({
			url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
			data: {
				start: 0,
				// count: 10,
			},
			method: 'GET',
			header: {
				'content-type': 'application/json'
			},
			success(res) {
				var subjests = res.data; 
				// console.log(subjests.subject_collection_items)
				wx.stopPullDownRefresh()  //请求完数据停止下拉刷新动效
				that.setData({
					movies: subjests.subject_collection_items
				})
			}
		});
	},
	toDetail(e) {
		let id = e.currentTarget.id
		wx.navigateTo({
			url: `../detail/detail?id=${id}`
		})
	},
	getUserProfile(e) {
		// 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
		wx.getUserProfile({
			desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
			success: (res) => {
				console.log(res)
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		})
	},
	getUserInfo(e) {
		// 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
		console.log(e)
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})
