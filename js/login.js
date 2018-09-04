$(function() {

    var user_name = localStorage.getItem("user_name");
    if(!user_name){
        $("#have_login").hide()
    }else{
        $(".user_name").html(user_name);
        $("#not_login").hide()
    }
    $('.dr').click(function() {

        $('.dl').show();

    });
    $(".gb").click(function(){
        $('.dl').hide();

    })
    $(".btnd").on("click",function(){
        login()
    })
   $("#login_out").on("click",function(){
       login_out()
   })
   function login_out(){
    
           alert("退出成功")
            localStorage.removeItem('user_name');
            $(".user_name").html("");
            $("#not_login").show()
            $("#have_login").hide()
        
   }
    function login() {
        if(NoKong1()) {
            var obj  = {    
            } 
            var obj = {
                user_name:$("#loginName1").val(),
                user_password:$("#loginPsd1").val()
            }
            $.ajax({  
                type:"post",  //提交方式 
                dataType:"json", 
                contentType:"application/json",
                url : "http://www.waimikeji.com:8090/ymee/user/login",//路径  
                data:JSON.stringify(obj),  
                success : function(result) {//返回数据根据结果进行相应的处理  
                    alert("登陆成功")
                    $(".dl").hide()
                    localStorage.setItem("user_name",result.data.user_name);
                    $(".user_name").html(result.data.user_name);
                    $("#not_login").hide()
                    $("#have_login").show()
                },
                error:function(ref){
                    alert(ref.responseJSON.service_message)
                }
            });      
        }
    }
    function NoKong1() {
        if($('#loginName1').val() == "") {
            alert('用户名不能为空');
            return ;
        } else if($('#loginPsd1').val() == "") {
            alert('密码不能为空');
            return;
        }
        return true;
    }

})