var $flagEmail = null;
var $flagUname = null;
var $flagPwd = null;
var $regEmail = /\w+@\w+\.\w+/;
var $regTel = /^(13|15|18)\d{9}$/;
var $regUname = /^\w{4,20}$/;
var $regPwd = /^.{8,16}$/;
$(".email").blur(function(){
	if( $regEmail.test($(this).val()) || $regTel.test($(this).val()) ){
		$(".s1").hide().html("");
		$(".s1").next().hide();
		$flagEmail = true;
	}else{
		$(".s1").show().html("请您输入正确的邮箱或手机");
		$(".s1").next().show();
		$flagEmail =false;
	}
})
$(".uname").blur(function(){
	if(!isNaN($(this).val().charAt(0))){
		$(".s2").show().html("用户不能以数字开头");
		$(".s2").next().show();
		$flagUname = false;
	}else if( $(this).val().length < 4 ){
		$(".s2").show().html("用户名太短,请在4-20字符之间");
		$(".s2").next().show();
		$flagUname = false;
	}else if( $regUname.test($(this).val() )){
		$(".s2").hide().html("");
		$(".s2").next().hide();
		$flagUname = true;
	}else {
		$(".s2").show().html("用户名是以小写英文字母、数字、中文、下划线组成");
		$(".s2").next().show();
		$flagUname = false;
	}
})
$(".pwd").blur(function(){
	if( $regPwd.test($(this).val())){
		$(".s3").hide().html("");
		$(".s3").next().hide();
		$flagPwd = true;
	}else{
		$(".s3").show().html("密码长度必须为8-16个字符");
		$(".s3").next().show();
		$flagPwd =false;
	}
})
$(".qrwd").blur(function(){
	if( $(this).val() == $(".pwd").val()){
		$(".s4").hide().html("");
		$(".s4").next().hide();
		$flagQrwd = true;
	}else{
		$(".s4").show().html("两次输入的密码不一致，请重新输入");
		$(".s4").next().show();
		$flagQrwd =false;
	}
})
// $("form").submit(function(event) {
// 	/* Act on the event */
// 	if( $flagEmail && $flagUname && $flagPwd && $flagQrwd ){
// 		return true;
// 	}else if($(".email").val().length == 0){
// 		$(".s1").show().html("邮箱或手机不能为空");
// 		$(".s1").next().show();
// 		return false;
// 	}else if($(".uname").val().length == 0){
// 		$(".s2").show().html("用户名不能为空");
// 		$(".s2").next().show();
// 		return false;
// 	}else if($(".pwd").val().length == 0){
// 		$(".s3").show().html("密码不能为空");
// 		$(".s3").next().show();
// 		return false;
// 	}else if($(".qrwd").val().length == 0){
// 		$(".s4").show().html("密码不能为空");
// 		$(".s4").next().show();
// 		return false;
// 	}
// });
$("button").click(function(){
		$.ajax({
		type : "get",
		url : `../php/login_register.php?status=register
		&emailTel=${$(".email").val()}&uname=${$(".uname").val()}&upwd=${$(".pwd").val()}`,
		success : function(msg){
			if(msg==2){
				$(".s2").show().html("用户名存在");
			}else if(msg == 3){
				$(".s1").show().html("邮箱或手机存在");
			}else if(msg = 1){
				location.href="../html/login.html"
			}
		}
	})
})
	


