Page({
	data:{
		movies:[]
	},
	onLoad() {
		this.getMy()
	},
	getMy() {
		var that = this
		wx.request({
			url:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items",
			method:"GET",
			data:{
				start:0,  // 开始页数
				// count:10  //  条数
			},
			header: {
				'content-type': 'application/json'
			},
			success(res) {
				// console.log(res)
				var subjests = res.data
				that.setData({
					movies: subjests.subject_collection_items
				})
			}
		})
	},
	toDetail(e) {
		let id = e.currentTarget.id
		wx.navigateTo({
			url: `../detail/detail?id=${id}`,
		})
	}
})
