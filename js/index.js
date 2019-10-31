//时间
(function(){
    var date = document.querySelector("tr:nth-child(2) td:nth-child(2)")
    setInterval(chang,10000)
    function chang(){
        var newDate = new Date()
        var YY = newDate.getFullYear()
        var yue = newDate.getMonth()+1
        var DD = newDate.getDate()
        date.innerHTML = YY+"年"+yue+"月"+DD+"日"
    }
    chang()
})();
//数据的
(function(){
    var obj = {
        company:["朝外派出所","建外派出所","三里屯派出所","呼家楼派出所","安贞派出所","和平街派出所","新源里派出所","香河园派出所","小关派出所","太阳宫派出所","麦子店派出所","团结湖派出所","六里屯派出所","亚运村派出所","大屯派出所","双井派出所","劲松派出所","潘家园派出所","南磨房派出所","王四营派出所","垡头派出所","十八里店派出所","小红门派出所","小武基派出所","八里庄派出所","高碑店派出所","管庄派出所","豆各庄派出所","黑庄户派出所","常营派出所","三间房派出所","花家地派出所","东湖派出所","南湖派出所","孙河派出所","南皋派出所","崔各庄派出所","奥园派出所","来广营派出所","奥运村派出所","机场派出所","东风派出所","将台派出所","酒仙桥派出所","平房派出所","平房派出所","东坝派出所","金盏派出所"],
        name:["石警官","王春燕","刘晨","郑悦","朱新民","杨金研","尹超","王薇","刘梅梅","沈佳艺","包姐","任在昌","王小红","王松","王警官","田向华","李悦","赵光哲","李洋","赵鑫","贾淑艳","唯伟","赵凯生","于永江","宋广宪","李家咏","孙雪","徐峥","赵丽","王所","钱民","倪桂芳","张梅","郭东芳","刘强","高辉","蔡雪琴","朱玲","陈宝军","高飞","张玉涛","贾素霞","王金艳","张凤蕊","侯杰","徐峰","钱坤"],
        ophone:[13701271307,13911832698,13910156186,18310700626,13501277901,13810318515,13910257336,13910885181,13801357871,13810149110,13701129191,13801104130,13501257787,13910276059,13801206963,15811142595,13911838196,15810374657,13811725722,13693273000,13801385114,18511900116,13901354401,13910283925,13311394168,15652523306,13911371572,13911673157,13911171015,13911005883,13426214060,13801085087,13511051576,18601288572,13901238892,13601303272,13911260318,13611055856,13601079786,13911832629,13701082952,13718153765,13911009250,13901307492,13311278055,13601261106,13370128678]
    }
    //获取第一个tr第一个td下面的div 收件人
    var recipient = document.querySelector("tr:nth-child(1) td:nth-child(1) div")
    //单位名称
    var entity = document.querySelector("tr:nth-child(2) td:nth-child(1) div")
    //收货单位
    var ReceivingUnit = document.querySelector('tr:nth-child(7) td:nth-child(1) .inp')
    //console.log(ReceivingUnit)
    //联系电话
    var ContactPhone = document.querySelector("tr:nth-child(8) td:nth-child(1) div")
    //信号量
    var num = 0
    ReceivingUnit.onblur = function(){
        var val = ReceivingUnit.value
        //console.log(val)
        if(obj.company.indexOf(val)!==-1){
            num = obj.company.indexOf(val)
            
        }else{
            console.log("目前该地区还没开放")
        }
        recipient.innerHTML = obj.name[num]
        ContactPhone.innerHTML = obj.ophone[num]
        if(this.value==""){
            recipient.innerHTML = ""
            ContactPhone.innerHTML = ""
        }
    }
})()