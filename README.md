# movie
### 说明
```
调用电影天堂Api,用VUE开发的一个小项目，由于其它项目开始了，这个暂停了
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# movie

### header头说明
```
Header 字段
x-header-request-timestamp: 1553844737
x-header-request-key: e32b49af35fc703025987fed9591857b // 加密文式 md5(wq0LQbLUTH66x-header-request-timestamp=1553844987x-header-request-imei=)
x-header-request-imei:  //空
```

### x-header-request-key 说明
```
用md5加密字符串由三个字段组合:(wq0LQbLUTH66)(x-header-request-timestamp=当前时间戳)(x-header-request-imei=)
```

### 详情页
```
GET http://m.dydytt.net:8080/adminapi/api/movieDetail.json?categoryId=9&movieDetailId=23903 HTTP/1.1
x-header-request-timestamp: 1553844927
x-header-request-imei: 
x-header-request-key: 83d0039bba1bc529fd5db53e25dd9602
Host: m.dydytt.net:8080
Connection: Keep-Alive
Accept-Encoding: gzip
User-Agent: okhttp/3.8.0

HTTP/1.1 200 OK
Content-Language: zh-CN
Content-Type: application/json; charset=UTF-8
Pragma: no-cache
Cache-Control: no-cache, no-store, max-age=0
Expires: Thu, 01 Jan 1970 00:00:00 GMT
Transfer-Encoding: chunked
Server: Jetty(9.2.24.v20180105)


{
	"id": 23903,
	"categoryId": 9,
	"name": "2019年喜剧《飞驰人生》HD国语中英双字",
	"publishTime": "2019-03-28",
	"homePicUrl": "https://extraimage.net/images/2019/03/28/2c4424bc0a834324c245eed897d7a583.jpg",
	"content": "◎译　　名　Pegasus\r\n◎片　　名　飞驰人生\r\n◎年　　代　2019\r\n◎产　　地　中国\r\n◎类　　别　喜剧\r\n◎语　　言　普通话\r\n◎字　　幕　中英双字幕\r\n◎上映日期　2019-02-05(中国)\r\n◎IMDb评分　6.4/10 from 563 users\r\n◎豆瓣评分　7.0/10 from 405016 users\r\n◎文件格式　x264 + aac\r\n◎视频尺寸　1280 x 720\r\n◎文件大小　1CD\r\n◎片　　长　98分钟\r\n◎导　　演　郑芬芬 Fenfen Cheng\r\n◎主　　演　沈腾 Teng Shen\r\n　　　　　　黄景瑜 Johnny Huang\r\n　　　　　　尹正 Zheng Yin\r\n　　　　　　张本煜 Benyu Zhang\r\n　　　　　　尹昉 Fang Yin\r\n\r\n◎简　　介\r\n\r\n　　曾经在赛车界叱咤风云、如今却只能经营炒饭大排档的赛车手张驰（沈腾饰）决定重返车坛挑战年轻一代的天才。然而没钱没车没队友，甚至驾照都得重新考，这场笑料百出不断被打脸的复出之路，还有更多哭笑不得的窘境在等待着这位过气车神……",
	"pics": "https://lookimg.com/images/2019/03/28/lqm9o.jpg",
	"downloadUrl": "magnet:?xt=urn:btih:b0953a803688994e58947e75969f40c253533cc2&dn=%e9%98%b3%e5%85%89%e7%94%b5%e5%bd%b1www.ygdy8.com.%e9%a3%9e%e9%a9%b0%e4%ba%ba%e7%94%9f.HD.720p.%e5%9b%bd%e8%af%ad%e4%b8%ad%e5%ad%97.mkv&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fthetracker.org%3a80%2fannounce&tr=http%3a%2f%2fretracker.telecom.by%2fannounce;ftp://ygdy8:ygdy8@yg45.dydytt.net:6159/阳光电影www.ygdy8.com.飞驰人生.HD.720p.国语中字.mkv;"
}
```

### 搜索
```
GET http://m.dydytt.net:8080/adminapi/api/movieList.json?categoryId=0&page=1&searchContent=wwwwwww
{
	"total": 30,
	"rows": [{
		"id": 20456,
		"categoryId": 9,
		"name": "2017年成龙动作喜剧《功夫瑜伽》BD国语中字",
		"publishTime": "2017-05-01"
	}, {
		"id": 20391,
		"categoryId": 9,
		"name": "2016年成龙动作喜剧《铁道飞虎》BD国语中字",
		"publishTime": "2017-04-13"
	}, {
		"id": 20297,
		"categoryId": 9,
		"name": "2017年成龙动作喜剧《功夫瑜伽》HD国语中字",
		"publishTime": "2017-03-26"
	}, {
		"id": 20184,
		"categoryId": 9,
		"name": "2016年成龙动作喜剧《铁道飞虎》HD国语中字",
		"publishTime": "2017-02-25"
	}, {
		"id": 19528,
		"categoryId": 9,
		"name": "2016年成龙动作喜剧《绝地逃亡》HD国语中字",
		"publishTime": "2016-09-23"
	}, {
		"id": 18041,
		"categoryId": 10,
		"name": "成龙动作喜剧《笑拳怪招》BD国粤双语中字",
		"publishTime": "2015-09-21"
	}, {
		"id": 17668,
		"categoryId": 10,
		"name": "2015年成龙动作《天将雄狮/天降雄狮》BD中文字幕",
		"publishTime": "2015-06-09"
	}, {
		"id": 17526,
		"categoryId": 10,
		"name": "成龙2015年动作《天将雄狮/天降雄狮》HD国语中字",
		"publishTime": "2015-05-31"
	}, {
		"id": 17594,
		"categoryId": 10,
		"name": "周星驰吴君如喜剧《望夫成龙》BD国粤双语中字",
		"publishTime": "2015-05-24"
	}, {
		"id": 16006,
		"categoryId": 9,
		"name": "成龙2013年动作《警察故事2013》BD国粤双语中字",
		"publishTime": "2014-04-17"
	}, {
		"id": 15679,
		"categoryId": 9,
		"name": "2013年成龙动作《警察故事2013》HD国语中字",
		"publishTime": "2014-01-27"
	}, {
		"id": 15132,
		"categoryId": 10,
		"name": "成龙经典《城市猎人》720p.BD国粤双语中字",
		"publishTime": "2013-09-19"
	}, {
		"id": 14397,
		"categoryId": 9,
		"name": "成龙2012年动作《十二生肖》720p.BD国粤双语中字",
		"publishTime": "2013-03-08"
	}, {
		"id": 14310,
		"categoryId": 9,
		"name": "成龙2012年动作《十二生肖》720p.HD国语中字",
		"publishTime": "2013-02-16"
	}, {
		"id": 14307,
		"categoryId": 10,
		"name": "成龙/洪金宝动作喜剧《飞龙猛将》720p.国粤双语中字",
		"publishTime": "2013-02-15"
	}, {
		"id": 14267,
		"categoryId": 10,
		"name": "成龙动作喜剧《师弟出马》720p.国粤双语中字",
		"publishTime": "2013-02-08"
	}, {
		"id": 14261,
		"categoryId": 10,
		"name": "成龙动作喜剧《龙少爷》720p.BD国粤双语中字",
		"publishTime": "2013-02-07"
	}, {
		"id": 9093,
		"categoryId": 10,
		"name": "成龙/张曼玉/关之琳《A计划续集》1024x576 国粤双语中字",
		"publishTime": "2011-08-30"
	}, {
		"id": 9045,
		"categoryId": 10,
		"name": "成龙/洪金宝/元彪《A计划》1024x576 国粤双语中字",
		"publishTime": "2011-08-26"
	}, {
		"id": 8348,
		"categoryId": 10,
		"name": "成龙/洪金宝/元彪《快餐车》1024x560 国粤双语中字",
		"publishTime": "2011-06-25"
	}, {
		"id": 7209,
		"categoryId": 10,
		"name": "成龙/郑则士《重案组》1024x576 国粤双语中字",
		"publishTime": "2011-03-19"
	}, {
		"id": 6168,
		"categoryId": 10,
		"name": "成龙/舒淇《玻璃樽》1024x576 国粤双语中字",
		"publishTime": "2010-12-20"
	}, {
		"id": 5405,
		"categoryId": 10,
		"name": "成龙/郑裕玲《飞鹰计划》1024x576 国粤双语中字",
		"publishTime": "2010-10-20"
	}, {
		"id": 4134,
		"categoryId": 9,
		"name": "2010最新成龙动作《功夫梦/功夫小子》DVD中字",
		"publishTime": "2010-07-18"
	}, {
		"id": 3132,
		"categoryId": 9,
		"name": "成龙2010最新大片《邻家特工》DVD中英双字",
		"publishTime": "2010-05-06"
	}, {
		"id": 2490,
		"categoryId": 9,
		"name": "2010成龙王力宏最新《大兵小将》DVD中字",
		"publishTime": "2010-03-15"
	}, {
		"id": 1998,
		"categoryId": 9,
		"name": "成龙2010最新大片《邻家特工》DVD中字",
		"publishTime": "2010-02-07"
	}, {
		"id": 1993,
		"categoryId": 7,
		"name": "快乐大本营20100206期(《大兵小将》剧组、成龙等)",
		"publishTime": "2010-02-07"
	}, {
		"id": 1865,
		"categoryId": 7,
		"name": "鲁豫有约20100126期 成龙 变化与秘密（下）",
		"publishTime": "2010-01-29"
	}, {
		"id": 1836,
		"categoryId": 7,
		"name": "鲁豫有约20100125期 成龙 变化与秘密（上）",
		"publishTime": "2010-01-27"
	}]
}
```

### 列表
```
返回格式同搜索页一样，地址也一样，url searchContent参数不要带内容

GET http://m.dydytt.net:8080/adminapi/api/movieList.json?categoryId=1&page=1&searchContent=
```

### 最新电影
```
//最新电影 返回格式同列表 分类id为9
http://m.dydytt.net:8080/adminapi/api/movieList.json?categoryId=9&page=1&searchContent=
```

### 获取分类
```
GET http://m.dydytt.net:8080/adminapi/api/movieCategory.json

//返回格式
{
	"categoryDtoList": [{
		"id": 9,
		"name": "最新电影"
	}, {
		"id": 10,
		"name": "综合电影"
	}, {
		"id": 1,
		"name": "华语电影"
	}, {
		"id": 2,
		"name": "欧美电影"
	}, {
		"id": 3,
		"name": "日韩电影"
	}, {
		"id": 4,
		"name": "华语电视"
	}, {
		"id": 5,
		"name": "欧美电视"
	}, {
		"id": 6,
		"name": "日韩电视"
	}, {
		"id": 7,
		"name": "综艺"
	}, {
		"id": 8,
		"name": "动漫"
	}],
	"adDtoList": [{
		"id": 6,
		"name": "cq.l1",
		"adOpen": 0,
		"categoryId": 1,
		"picUrl": "https://csydtg.980cje.com/b/11/3148/3910/640X100.jpg"
	}, {
		"id": 7,
		"name": "bz.l2",
		"adOpen": 2,
		"categoryId": 1,
		"picUrl": "http://p.dytt8.net/p/t6.jpg"
	}, {
		"id": 8,
		"name": "tl.l3",
		"adOpen": 0,
		"categoryId": 1,
		"picUrl": "https://csydtg.980cje.com/b/11/3148/3912/640X100.gif"
	}, {
		"id": 9,
		"name": "bz.q1",
		"adOpen": 0,
		"categoryId": 4,
		"picUrl": "http://p.dytt8.net/p/q1.jpg"
	}, {
		"id": 10,
		"name": "tl.q2",
		"adOpen": 0,
		"categoryId": 4,
		"picUrl": "http://p.dytt8.net/p/q11.jpg"
	}, {
		"id": 16,
		"name": "cq.q3",
		"adOpen": 2,
		"categoryId": 4,
		"picUrl": "https://csydtg.980cje.com/b/11/3148/3923/640X960.jpg"
	}, {
		"id": 14,
		"name": "zs.n2",
		"adOpen": 0,
		"categoryId": 3,
		"picUrl": "http://p.dytt8.net/p/t9.jpg"
	}, {
		"id": 11,
		"name": "bz.n1",
		"adOpen": 0,
		"categoryId": 3,
		"picUrl": "http://p.dytt8.net/p/t6.jpg"
	}]
}


