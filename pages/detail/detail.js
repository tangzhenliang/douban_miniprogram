// pages/detail/detail.js
Page({
	data:{
		id:"",
		detail:{}
	},
	onLoad(option) {
		this.setData({
			id:option.id
		})
		this.getDetail(option.id)
	},
	getDetail(id) {
		var that = this
		wx.showLoading({
			title:"加载中...",
			mask: true,
			icon: "loading"
		})
		wx.request({
			url: `https://m.douban.com/rexxar/api/v2/movie/${id}`,
			method: 'GET',
			header: {
				'content-type': 'application/json'
			},
			success(res) {
				// console.log(res.data)
				that.setData({
					detail: res.data
				})
			},
			complete() {
				wx.hideLoading()
			}
		})
	},
	goNextPage() {
		wx.navigateBack()
	}
})
