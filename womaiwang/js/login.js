$(".yzm").html(yzm());
$("form div").on("click", ".yzm" ,function(){
	$(this).html(yzm());
}).on("click", ".kanbuqing", function(){
	$(".yzm").html(yzm());
})
$(".uname").blur(function(){
	if( $(".uname").val().length > 0 ){
		$(".s1").html("");
	}
})
$(".pwd").blur(function(){
	if( $(".pwd").val().length > 0 ){
		$(".s2").html("");
	}
})
var flagyzm = null;
$(".yanzhengma").blur(function(){
	if( $(".yanzhengma").val() != $(".yzm").html() ){
		$(".s3").show().html("验证码不正确");
		flagyzm = false;
	}else {
		$(".s3").html("");
		flagyzm = true;
	}
})
// $("form").submit(function(){
// 	if( $(".uname").val().length == 0 ){
// 		$(".s1").show().html("用户名不能为空");
// 		return false;
// 	}else if( $(".pwd").val().length == 0 ){
// 		$(".s2").show().html("密码不能为空");
// 		return false;
// 	}else if( $(".yanzhengma").val().length == 0 ){
// 		$(".s3").show().html("验证码不能为空");
// 		return false;
// 	}else if(flagyzm){
// 		return true;
// 	}else{
// 		return false;
// 	}
// })
$("button").click(function(){
	$.ajax({
		type : "get",
		url : `../php/login_register.php?status=login
		&uname=${$(".uname").val()}&upwd=${$(".pwd").val()}&id=${Math.random()}`,
		success : function(msg){
			if(msg == 1){
				location.href = "../index.html";
			}else if( msg == 0 ){
				$(".s1").show().html("用户名不存在");
			}else if( msg == 2 ){
				$(".s2").show().html("密码错误");
			}
		}
	})
})