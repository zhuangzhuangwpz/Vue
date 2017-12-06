window.onload=function(){
	var data={
				searchString:"",
				msgs:[
				{
					title:'the best technology is the most basic',
					author:'谢灿勇'
				},
				{
					title:'hijacking the javascript function',
					author:'谢灿勇'
				},
				{
					title:'use karma to test multiple broswer',
					author:"司徒正美"
				}
			]};
	//定义一个自定的过滤器叫做searchFor,传递一个过滤参数searchString
	//第一个参数指的是要过滤的数据源data
	Vue.filter("searchFor",function(value,searchString){
		//判断传入的内容是否为空
		if(!searchString){
			//将要过滤的对象全部返回，也就是是相当于什么都没有操作一样
			//程序也在这个地方终止不会继续向下走
			return value;
		}
		//将输入的内容统一为小写或者大写
		seearchString=searchString.trim().toLowerCase();
		var result=[];
		//item指代当前数据
		result=value.filter(function(item){
			//查询的内容不存在
			if(item.title.toLowerCase().indexOf(searchString) !== -1){
                return item;
            }
		});
		return result;
	});
	var demo=new Vue({
		el:'#main',
		data:data,

	})
}