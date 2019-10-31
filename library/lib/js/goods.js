(function(){
	//获取路径上的参数，用来决定是否展示操作按钮
	~function () {
	    var strPro = String.prototype;
	    strPro.myQueryURLParameter = function () {
	        var reg = /([^?&=]+)=([^?&=]+)/g, obj = {};
	        this.replace(reg, function () {
	            obj[arguments[1]] = arguments[2];
	        });
	        return obj;
	    }
	}();
	var searchObj=location.href.myQueryURLParameter();
	window.searchUrlObj={};
    for(var k in searchObj){
        //因为后台暂时没有对路径上的参数进行加密，所以先不解密，直接用
        searchUrlObj[k] = searchObj[k];
	}
    /* if(searchUrlObj.user){
    	$("#operation").css('visibility','inherit');
    }else{
    	$("#operation").css('visibility','hidden');
    }
     */
	
	var $myModal = $("#myModal");  //这是新增书籍与修改书籍用的dom
	var $myModalBor = $("#myModalBor");  //这是我要借书板块用的dom
	var $myModalExport = $("#myModalexport"); //这是我要导出用的dom
	var $myModalexportSearch = $("#myModalexportSearch");//这是查询谁接了哪些书的dom
	var $gTable = $("#gTable");
	var $myModalLabel = $("#myModalLabel");
	var cacheDate = {};
    var parms = {
    	query:'',
    	size:12,
    	page:0,
    	classV:'',
    	statusV:''
    };
    var totalPage;
	var isBorrow = false;
    
    //分页
    $("#pagination").on("click","li",function(){
 		var $this = $(this),
 		    page = $this.attr("data-page");
 		
 		if($this.attr("id") == "prev"){
 			page = parseInt($("#pagination").find(".active").attr("data-page"))-1;
 		    
 		}else if($this.attr("id") == "next"){
 			page = parseInt($("#pagination").find(".active").attr("data-page"))+1;
 		}
 		if(page<0){
 			page = 0;
 		}else if(page>=totalPage){
 			page = totalPage-1;
 		}
 		parms.page = page;
 		getGoodsList();
    });
    //上一页

	//搜索商品
	$("#searchBtn").on("click",function(){
		var $searchIpt = $("#searchVal"),
		    searchV = $searchIpt.val();
		parms.page = 0;
		parms.query = searchV;
		getGoodsList();
	});


    //导出模块js代码 start
    //点击导出  
    $("#exportBtn").on("click",function(){
    	$myModalExport.modal('show');
    });
    laydate.render({
	  elem: '#beginTime' //指定元素
	  ,max: 0
	});
	//前后若干天可选，这里以7天为例
	laydate.render({
	   elem: '#endTime' //指定元素
	  ,max: 0
	});

	
	$(".exportNow").on("click",function(){
		var beginTime = $("#beginTime").val();
		var endTime = $("#endTime").val();
		window.open(location.origin+"/export_data?begin="+beginTime+"&end="+endTime);
	})
    //导出模块js代码 end



	//点击新增商品
	$("#newBtn").on("click",function(){
		$myModal.find("form").trigger('reset').find("#gid").val("");
		$myModalLabel.html("新增书籍");
		$myModal.modal('show');
		
	});
	//点击删除商品
	$("#delBtn").on("click",function(){
		var $checkeds = $gTable.find("tbody input[type=checkbox]:checked");
		var len = $checkeds.length;
		var ids = [];
		if(len == 0){
			layer.msg("没有选中任何书籍，请重新选择",{
				offset:'t',
				anim:6
			});
			return;
		}
		layer.confirm('确定删除此书么？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			layer.close(index);
		    $checkeds.each(function(){
				ids.push(this.id);
			});
			$.post('goods_del',{ids:ids.join(",")},function(response){
				if(response.status == 'success'){
					getGoodsList();
				}else{
					layer.msg("删除失败，请重试",{
						offset:'t',
						anim:6
					});
				}
			},"json");
		});

		
	})
    
    //修改商品
    $("#updateBtn").on("click",function(){
    	var $checkeds = $gTable.find("tbody input[type=checkbox]:checked");
		var len = $checkeds.length;
		var id,obj;
		
		if(len != 1){
			layer.msg("只能一次修改一本书，请重新选择",{
				offset:'t',
				anim:6
			});
			return;
		}
		id = $checkeds[0].id;
		obj = cacheDate[id];
		
		
		
		$("#gid").val(obj.id);
		$("#name").val(obj.name);
		$("#price").val(obj.price);
		$("#number").val(obj.detail);
		$("#classify").val(obj.classify);


		$myModalLabel.html("修改商品");
		$myModal.modal('show');
		
    });
    //我要借书
    $("#borBtn").on("click",function(){
    	var $checkeds = $gTable.find("tbody input[type=checkbox]:checked");
		var len = $checkeds.length;
		var id,obj;
		$(".thisAdd").show();
		if(len != 1){
			layer.msg("只能一次借一本书，不要贪心哦~",{
				offset:'t',
				anim:6
			});
			return;
		}
		isBorrow = true;
		id = $checkeds[0].id;
		obj = cacheDate[id];
		//在这里去查询当前点击的这本书有谁看过
		$.post('books_search',{id:obj.id},function(response){
			if(response.status == 'success'){
				var whosee = [];
				//遍历数组
				for(var i = 0;i<response.data.length;i++){
				    if(whosee.indexOf(response.data[i]) == -1){  //判断在s数组中是否存在，不存在则push到s数组中
				        whosee.push(response.data[i]);
				    }
				}
				$("#borrowtime").val(response.borrowtime.substr(0,10));
				$("#whosee").val(whosee.join('，'));
			}
		},"json");
		$("#gidBor").val(obj.id);
		$("#nameBor").val(obj.name);
		$("#nameBor").attr("data-number",obj.number);
		$("#priceBor").val(obj.price);
		$("#numberBor").val(obj.detail);
		$("#classifyBor").val(obj.classify);
        if(obj.status == "已借"){
        	$("#borBookBtn").removeClass('btn-primary').removeClass("borBookBtn");
        	$("#borBookBtn").html("已借出");
        	$(".whoBorro").hide();
        }else if(obj.status == "未借"){
        	$("#borBookBtn").addClass("borBookBtn").addClass('btn-primary');
        	$("#borBookBtn").html("我要借书");
        	$(".whoBorro").show();
        }
		$myModalBor.modal('show');
    });
    //归还书籍
    $("#returnBtn").on("click",function(){
		var $checkeds = $gTable.find("tbody input[type=checkbox]:checked");
		var len = $checkeds.length;
		var ids = [];
		if(len != 1){
			layer.msg("一次只能进行一本操作，请重新选择",{
				offset:'t',
				anim:6
			});
			return;
		}
		layer.confirm('确定归还此书么？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			layer.close(index);
			$.post('books_return',{ids:$checkeds.attr('id'),status:'02',returntime:CurentTime()},function(response){
				if(response.status == 'success'){
					getGoodsList();
				}else{
					layer.msg("归还失败，请查看是否出借",{
						offset:'t',
						anim:6
					});
				}
			},"json");
		});

		
	})
    //获取当前时间
    function CurentTime()
    { 
        var now = new Date();
       
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
       
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
       
        var clock = year + "-";
       
        if(month < 10)
            clock += "0";
       
        clock += month + "-";
       
        if(day < 10)
            clock += "0";
           
        clock += day + "-";
       
        if(hh < 10)
            clock += "0";
           
        clock += hh + ":";
        if (mm < 10) clock += '0'; 
        clock += mm; 
        return(clock); 
    } 
    //点击我要借书按钮
    $(".modal-footer").on("click",'.borBookBtn',function(){
    	var data = {
			id:$("#gidBor").val(),
			boruser:$("#borUser").val(),
			borrowtime:CurentTime(),
			returntime:0,
			status:'01',
			borbookname:$("#nameBor").val(),
			bornumber:parseInt($("#nameBor").attr("data-number"))+1
		};
		if(data.boruser == ""){
			layer.msg("姓名不能为空",{
				offset:'t',
				anim:6
			});
			return;
		};
		layer.load();
		$.post('books_update',data,function(response){
			if(response.status == 'success'){
				$myModalBor.modal('hide');
				$myModalBor.find("form").trigger('reset');
			    getGoodsList();
			}else{
				layer.msg("保存失败，请重试~",{
					offset:'t',
					anim:6
				});
			}
			layer.closeAll('loading');
		},'json')
    })

    //点击保存按钮
	$(".saveMess").on("click",function(){
		var data = {
			id:$("#gid").val(),
			name:$("#name").val(),
			price:$("#price").val(),
			number:$("#number").val(),
			classify:$("#classify").val()
		};
		if($.trim(data.name) == ""){
			layer.msg("书籍名称不能为空",{
				offset:'t',
				anim:6
			});
			return;
		}else if($.trim(data.price) == ""){
			layer.msg("书籍价格不能为空",{
				offset:'t',
				anim:6
			});
			return;
		}else if($.trim(data.number) == ""){
			layer.msg("书籍编号不能为空",{
				offset:'t',
				anim:6
			});
			return;
		}
		// 出现遮罩
		layer.load();
		if(data.id){   //修改
			url = "goods_update";
		}else{
			url = "goods_add";
		}
		$.post(url,data,function(response){
			if(response.status == 'success'){
				$myModal.modal('hide');
				$myModal.find("form").trigger('reset');
			    getGoodsList();
			}else{
				layer.msg("保存失败，请重试~",{
					offset:'t',
					anim:6
				});
			}
			layer.closeAll('loading');
		},'json')
		
	});

	
	
	//加载商品列表
	var getGoodsList = function(){
		
		layer.load();
	
		$.post("goods_list",parms,function(response){
			if(response.status == "success"){
				layer.closeAll('loading');
				renderTable(response.data);
				renderPaging(response.total);
				
			}
		},'json')
	};
	var renderTable = function(data){
		var trs = [];
		$.each(data,function(index,obj){
			trs.push('<tr>',
				'<td><input id="'+obj.id+'" type="checkbox" /></td>',
                '<td>'+obj.detail+'</td>',
                '<td>'+obj.name+'</td>',
                '<td>'+obj.classify+'</td>',
                '<td>'+obj.price+'</td>',
                '<td data-number="'+obj.number+'">'+obj.status+'</td>',
                '</tr>');
			cacheDate[obj.id] = obj;
			
		});
		$gTable.find("tbody").html(trs.join(""));
	};
	var renderPaging = function(total){
		totalPage = Math.ceil(total/parms.size);
		var pArr = ['<li id="prev"><a href="#" >&laquo;</a></li>'];

		for(var i = 0;i<totalPage;i++){
			if(parms.page == i){
				pArr.push('<li data-page="',i,'" class="active"><a href="javascript:;">'+(i+1)+'</a></li>');
			}else{
				pArr.push('<li data-page="',i,'"><a href="javascript:;">'+(i+1)+'</a></li>');
			}
			
		}
		pArr.push('<li id="next"><a href="#" >&raquo;</a></li>');
		$("#pagination").html(pArr.join(""));
		$(".allNumber").html("总共:"+total+"本");
	}
	getGoodsList();
	$(".classbtn li").on("click",function(){
		parms.page = 0;
		$(this).parents(".btn-group").find(".btntxt").html($(this).text());
		parms.classV = $(this).text();
		getGoodsList();
	});
	$(".statusbtn li").on("click",function(){
		parms.page = 0;
		$(this).parents(".btn-group").find(".btntxt").html($(this).text());
		parms.statusV = $(this).attr("status");
		getGoodsList();
	});
	getHotData();
	function getHotData(){
		$.post('hot_book',function(data){
			if(data.status == 'success' && data.data){
				var hotli = '';
				for(var i=0;i<data.data.length;i++){
					hotli+='<li><span class="bookname">'+(i+1)+'、'+data.data[i].name+'</span>';
		        	hotli+='<span class="bornumber">'+data.data[i].number+'</span></li>'
				}
				$(".hotbooklist").html(hotli);
			}
		},"json");
	}
	$("#borSearchBtn").on("click",function(){
		$myModalexportSearch.find("form").trigger('reset')
		$myModalexportSearch.modal('show');
		$("#borTable").find("tbody").html("");
	});
	$(".searchBookNow").on("click",function(){
		var searchValue = $.trim($("#searchPerson").val());
		
		if(searchValue == ""){
			layer.msg("借阅人不能为空",{
				offset:'t',
				anim:6
			});
			return;
		}
		$.post('books_person',{username:searchValue},function(response){
				if(response.status == 'success'){
					var borTr = '';
					for(var i=0;i<response.data.length;i++){
						borTr+='<tr><td>'+response.data[i].borrowtime.substr(0,10)+'</td><td>'+response.data[i].bookname+'</td></tr>'
					}
					$("#borTable").find("tbody").html(borTr);
				}else{
					layer.msg("查询失败",{
						offset:'t',
						anim:6
					});
				}
			},"json");
	})
})();