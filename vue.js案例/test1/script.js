window.onload=function(){
	var demo=new Vue({
		el:'#btngroup',
		data:{
			select:'按钮1',
			test:1
		},
		methods:{
			makeActive:function(item){
				this.select=item;
			}
		}
	});
	demo.test=2
	//console.log(demo);
}