chrome.contextMenus.create({
	title: '复制当前页面地址',
	onclick: function(info, tab) {
		// 获取当前页面url
		let pageUrl = info.pageUrl;
		// url编码
		// let encodeUrl = encodeURIComponent(pageUrl);
		// 拼接小程序url
		// let wechatUrl = '/lib/webview/dist/pages/index/index?url=' + encodeUrl;
		// 拷贝到剪切板
		let obj = document.querySelector('#clipboard');
		obj.value = pageUrl;
		obj.select();
		document.execCommand('copy', false, null);
		// chrome.notifications.create(null, {
		// 	type: 'basic',
		// 	iconUrl: 'icon.png',
		// 	title: '操作成功',
		// 	message: '生成的小程序路径已拷贝，可以直接复制使用',
		// });
	},
});
