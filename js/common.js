arr = eval(localStorage.user); //获取localStoragevar
if(arr&&arr[0].loginName) {
	$(".welcome").text("北京乐聚互娱欢迎：");
	//	$(".welcome").attr("href"," ");
	$(".username1").text(arr[0].loginName);
	$(".username1").css("color", "#CF0F32");
	$(".username1").attr("href", " ");
}

//注册代码部分

//身份证检验  开始
//定义地区数组
var CityArray = {
	11: "北京",
	12: "天津",
	13: "河北",
	14: "山西",
	15: "内蒙古",
	21: "辽宁",
	22: "吉林",
	23: "黑龙江",
	31: "上海",
	32: "江苏",
	33: "浙江",
	34: "安徽",
	35: "福建",
	36: "江西",
	37: "山东",
	41: "河南",
	42: "湖北",
	43: "湖南",
	44: "广东",
	45: "广西",
	46: "海南",
	50: "重庆",
	51: "四川",
	52: "贵州",
	53: "云南",
	54: "西藏",
	61: "陕西",
	62: "甘肃",
	63: "青海",
	64: "宁夏",
	65: "新疆",
	71: "台湾",
	81: "香港",
	82: "澳门",
	91: "国外"
}
//验证身份证及返回地区、出生年月、性别
function CheckIdCard(sId) {
	if(sId.length == 15) {
		sId = sId.replace(/([\d]{6})(\d{9})/, "$119$2x");
	}
	var iSum = 0
	var info = ""
	if(!/^\d{17}(\d|x)$/i.test(sId)) return "非法的身份证号";
	sId = sId.replace(/x$/i, "a");
	if(CityArray[parseInt(sId.substr(0, 2))] == null) return "Error:非法地区,请正确填写";
	sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
	var d = new Date(sBirthday.replace(/-/g, "/"))
	if(sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "Error:非法生日,请正确填写";
	for(var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11)
	if(iSum % 11 != 1) return "Error:非法证号,请正确填写";
	return 1;
//	return CityArray[parseInt(sId.substr(0, 2))] + "," + sBirthday + "," + (sId.substr(16, 1) % 2 ? "男" : "女")
}
//调用验证方法
function ZhuCe1() {
	var id = $("#txtId").val();
	if(id != "") {
		alert(CheckIdCard(id));
	}
}

//身份证 校验结束

function ZhuCe() {
	if(NoKong()) {
		var arr = [];
		if(localStorage.user) {
			arr = eval(localStorage.user);
			for(e in arr) {
				if($('#loginName').val() == arr[e].loginName) {
					alert('该账号已被注册');
					clear();
					return;
				}
			}
		}
		var user = {
			'loginName': $("#loginName").val(),
			'loginPsd': $("#loginPsd").val()
		};
		arr.push(user);
		localStorage.user = JSON.stringify(arr);
		alert('注册成功，请登录');
		clear();
		$('.dl').show();
	}
}

function clear() {
	$('#loginName').val('');
	$("#loginPsd").val('');
	$("#phone").val('');
	$("#Tname").val('');
	$("#repassword").val('');
	$("#txtId").val('');
}

function NoKong() {
	var id = $("#txtId").val();
	var regName =/^[\u4e00-\u9fa5]{2,4}$/;
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if($('#loginName').val() == "") {
		alert('用户名不能为空');
		return false;
	} else if($('#loginPsd').val() == "") {
		alert('密码不能为空');
		return false;
	} else if($('#phone').val() == "") {
		alert('手机号码不能为空');
		return false;
	} else if($('#Tname').val() == "") {
		alert('姓名不能为空');
		return false;
	} else if(!myreg.test($("#phone").val())){
		alert("请输入真实手机号");
		return false;
	} else if(!regName.test($("#Tname").val())){
		alert("请输入真实姓名");
		return false;
	} else if(CheckIdCard(id)!="1"){
		alert(CheckIdCard(id));
	} else if(CheckIdCard(id)=="1"){
		return true;
	}
}

//登录部分



function clear1() {
	$('#loginName1').val('');
	$("#loginPsd1").val('');
}

