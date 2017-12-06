window.onload=function(){
	var demo=new Vue({
		el:'#main',
		data:{
			inp:"请输入",
			status:false
		},
		methods:{
			hide:function(){
				this.status=false;
			},
			toggle:function(){
				this.status=!this.status;
			}
		}
	});
}