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
            var str=/^(\d{1,2}|[a-zA-Z]{1,2})\d+$/;
            if (str.test(search_text.children('textarea').val())){
                    alert("接口在index.js第46行")
            }else{
                search_alert.html("输入错误");
                search_alert.css("bottom",0);
                setTimeout(function(){
                    search_alert.css("bottom","-100%");
                },3000)
            }
        }
    })
})