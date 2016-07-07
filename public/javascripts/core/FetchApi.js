'use strict';
var Toasts=require('./Toasts');
function FetchApi(options,callback){
	var opts=options||{};
	this.urlApi=opts.urlApi;
	this.postData=opts.postData||{};
	this.records={};
	this.callback=callback;
	this.type=opts.type||'post';
	_init.call(this);
}
var toasts=new Toasts();
function _init(){
	var me=this;
	Zepto.ajax({
		url:me.urlApi,
		type:me.type,
		dataType:'json',
		data:me.postData,
		success:function(res){
			me.records=res;
			if(me.callback)
				me.callback();
		},
		error:function(ex){
			toasts.alert(me.urlApi+' failed '+ex);
		}
	})
}
module.exports=FetchApi;
