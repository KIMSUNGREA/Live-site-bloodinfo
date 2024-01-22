$(document).ready(function(){

    $(".select div").click(function(){
        $(".select div").removeClass("select");
        $(this).addClass("select")
    })
    
    $(".select .normal").click(function(){
        $(".dis_none.left").addClass("show");
        $(".dis_none.right").removeClass("show")
        $(".barcode_box").removeClass("emergency")
        $(".chart_list").removeClass("emergency")
        $(".barcode_box").addClass("normal")
        $(".chart_list").addClass("normal")
    })
    $(".select .emergency").click(function(){
        $(".dis_none.right").addClass("show");
        $(".dis_none.left").removeClass("show")
        $(".barcode_box").removeClass("normal")
        $(".chart_list").removeClass("normal")
        $(".barcode_box").addClass("emergency")
        $(".chart_list").addClass("emergency")
    })
    
    // 팝업
    $(".blood_chs_box ul li").click(function(){
        $(".blood_chs_box ul li").removeClass("line")
        $(this).addClass("line")
    })
    
    $(".signal").click(function(){
        $(".layer_dimm, .warning_box").fadeIn()
    })
    $(".check").click(function(){
        $(".layer_dimm, .warning_box").fadeOut()
    })
    
    // 채혈내역통계
    
    $(".statc_menu li").click(function(){
        var num = $(this).index()+1;
        $(".statc_menu li").removeClass("on")
        $(this).addClass("on")
        $(".main_wrap.pt_chang > div").removeClass("on")
        $(".chart"+num).addClass("on")
    })
    

    // 혈액인계정보 수정버튼 클릭 시
    $(".change").click(function(){
        $(".layer_dimm").fadeIn()
        $(".warning_box").fadeIn()
    })

    $(".cancel").click(function(){
        $(".layer_dimm").fadeOut()
        $(".warning_box").fadeOut()
    })

    $(".blood_donor a").click(function(){
        $(".layer_dimm").fadeIn()
        $(".warning_box").fadeIn()
    })






    $('#Date').datepicker({
        nextText: '다음 달',
        prevText: '이전 달',
        showOtherMonths: true,
        showMonthAfterYear: true,
        yearSuffix: '년',
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dateFormat: 'yy.mm.dd',
        onClose: function (selectedDate) {
            //시작일(startDate) datepicker가 닫힐때
            //종료일(endDate)의 선택할수있는 최소 날짜(minDate)를 선택한 시작일로 지정
            $('#Date').datepicker('option', 'minDate', selectedDate);
        },
        showOn: 'both',
        buttonImage: '../../images/sbmenu07/datepicker.png',
        buttonImageOnly: true
    });




































    // datePicker

    
    $(".select div").click(function(){
        var n = $(this).index()+1;
        $("div").removeClass("on");
        $(".list"+n).addClass("on");
    })
})