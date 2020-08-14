//우클 드래그 방지
window.document.oncontextmenu = new Function("return false");
window.document.onselectstart = new Function("return false");
window.document.ondragstart = new Function("return false");
var selectIndex=0;

document.body.onkeydown = function (e) {
    try {
        // 이벤트를 정규화한뒤 기본 동작을 막는다.
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }

        //상:87(w),38
        //하:83(s),40
        //좌:65(a),37
        //우:68(d),39
        //선택:13(enter)
        //확인:9(tab)
        document.body.style.backgroundImage="url('../model/f1.png')";
        

    }
    catch (catchID) {
        alert("펑");
    }
}