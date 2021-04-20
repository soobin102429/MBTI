function start(){
    $(".start").hide();
    $(".question").show();
}

var num=1;

var q={
    1:{"title":"문제 1번","type":"EI","A":"E","B":"I"},
    2:{"title":"문제 2번","type":"EI","A":"E","B":"I"},
    3:{"title":"문제 3번","type":"EI","A":"E","B":"I"},
    4:{"title":"문제 4번","type":"SN","A":"S","B":"N"},
    5:{"title":"문제 5번","type":"SN","A":"S","B":"N"},
    6:{"title":"문제 6번","type":"SN","A":"S","B":"N"},
    7:{"title":"문제 7번","type":"TF","A":"S","B":"N"},
    8:{"title":"문제 8번","type":"TF","A":"S","B":"N"},
    9:{"title":"문제 9번","type":"TF","A":"S","B":"N"},
    10:{"title":"문제 10번","type":"JP","A":"S","B":"N"},
    11:{"title":"문제 11번","type":"JP","A":"S","B":"N"},
    12:{"title":"문제 12번","type":"JP","A":"S","B":"N"}
}

$("#A").click(function(){
    var type=$("#type").val();
    var preValue= $("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    console.log(parseInt(preValue)+1);
    next();
});

$("#B").click(function(){

    next();
});

function next(){
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
}