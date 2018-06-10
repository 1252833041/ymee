$(function() {
	
    $('.dr').click(function() {

        $('.dl').show();

    });
    $(".gb").click(function(){
        $('.dl').hide();

    })
    $(".btnd").on("click",function(){
        login()
    })
   
    function login() {
        if(NoKong1()) {
            var obj  = {
                user_password:$('#loginPsd1').val(),
                user_name:$('#loginName1').val()
            } 
            $.ajax({  
                type : "get",  //提交方式  
                url : "http://47.98.167.56:8080/ymee/user/login",//路径  
                data : obj,  
                success : function(result) {//返回数据根据结果进行相应的处理  
                    debugger
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