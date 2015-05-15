var url=document.location.href;
var re=/(?:#)(.*)/;
var aim=re.exec(url);
if( aim ){
switch(aim[1])
{
case "danmuplayer":
	window.location.href='http://www.liyawei.cn/danmuplayer/';
	break;
case "danmu":
	window.location.href='http://www.liyawei.cn/danmu/';
	break;
case "danmu":
	window.location.href='http://www/liyawei.cn/xss_payload_tester/index.html';
	break;
default:
	break;
} 
}	

