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

//身份证 校验结束

function ZhuCe() {
	if(NoKong()) {	
		var obj = {
			user_name:$('#loginName').val(),
			user_password:$("#loginPsd").val(),
			user_phone:$("#phone").val(),
			user_id_card:$("#txtId").val(),
			user_full_name:$('#Tname').val()
		}	
		$.ajax({  
			type:"post",  //提交方式 
			dataType:"json", 
			contentType:"application/json",
			url : "http://47.98.167.56:8080/ymee/user/register",//路径  
			data:JSON.stringify(obj),  
			success : function(result) {//返回数据根据结果进行相应的处理  
				alert("注册成功")
				localStorage.setItem("user_name",$('#loginName').val());
				location.href="./index.html"

			},
			error:function(ref){
				console.log(ref)
				alert(ref.responseJSON.service_message)
			}
		});   
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
	var regidcard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if($('#loginName').val() == "") {
		alert('用户名不能为空');
		return false;
	} else if($('#loginPsd').val() == "") {
		alert('密码不能为空');
		return false;
	}else if($("#repassword").val() != $('#loginPsd').val()){
		alert('两次密码不统一');
		return false;
	}
	 else if($('#phone').val() == "") {
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
	} else if(!regidcard.test($("#txtId").val())){
		alert("请输入真实身份证号");
		return false;
	}else {
		return true;
	}
}

//登录部分



function clear1() {
	$('#loginName1').val('');
	$("#loginPsd1").val('');
}

