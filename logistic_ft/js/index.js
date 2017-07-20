$(function(){
    // 轮播图效果
    var i = 0 ;
    var timer;
    var banner_tu=$(".banner_tu");
    var banner_btn=$('.banner_btn')
    banner_tu.eq(0).show().siblings('.banner_tu').hide();
    showTime();
    banner_btn.hover(function(){
        i = $(this).index();
        Show();
        clearInterval(timer);
    },function(){
        showTime();
    });
    function showTime(){
        timer = setInterval(function(){
            Show();
            i++;
            if(i==3){
                i=0;
            }
        },2000);
    }
    function Show(){
        banner_tu.eq(i).fadeIn(300).siblings('.banner_tu').fadeOut(300);
        banner_btn.eq(i).addClass('active').siblings('.banner_btn').removeClass('active');
    }


    // 订单点击效果
    var search_btn=$('.search_btn');
    var search_text=$('.search_text');
    var search_alert=$('.search_alert');
    search_btn.click(function(){
        if(search_text.children('textarea').val()==''){
            search_alert.html("不能为空");
            search_alert.css("bottom",0);
            setTimeout(function(){
                search_alert.css("bottom","-100%");
            },3000)
        }else{
            if (isNaN(search_text.children('textarea').val())){
                search_alert.html("必须为数字");
                search_alert.css("bottom",0);
                setTimeout(function(){
                    search_alert.css("bottom","-100%");
                },3000)
            }else{
                if(search_text.children('textarea').val().length==12){
                    search_alert.html("跳转查询页面接口");
                    search_alert.css("bottom",0);
                }else{
                    search_alert.html("请输入12位订单号号、运单号");
                    search_alert.css("bottom",0);
                    setTimeout(function(){
                        search_alert.css("bottom","-100%");
                    },3000)
                }
            }
        }
    })
    search_text.children('textarea').keyup(function(e){
        var event=e||window.event;
         if(event.keyCode == 13){
            if(search_text.children('textarea').val()==''){
                search_alert.html("不能为空");
                search_alert.css("bottom",0);
                setTimeout(function(){
                    search_alert.css("bottom","-100%");
                },3000)
            }else{
                if (isNaN(search_text.children('textarea').val())){
                    search_alert.html("必须为数字");
                    search_alert.css("bottom",0);
                    setTimeout(function(){
                        search_alert.css("bottom","-100%");
                    },3000)
                }else{
                    if(search_text.children('textarea').val().length==12){
                        search_alert.html("跳转查询页面接口");
                        search_alert.css("bottom",0);
                    }else{
                        search_alert.html("请输入12位订单号号、运单号");
                        search_alert.css("bottom",0);
                        setTimeout(function(){
                            search_alert.css("bottom","-100%");
                        },3000)
                    }
                }
            }
           search_text.children('textarea').blur();
         } 
    })



})