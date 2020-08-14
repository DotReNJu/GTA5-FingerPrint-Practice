//우클 드래그 방지
window.document.oncontextmenu = new Function("return false");
window.document.onselectstart = new Function("return false");
window.document.ondragstart = new Function("return false");

//배경이미지
document.body.style.backgroundImage = "url('../model/f1.png')";

//해당인덱스
var tIndex = 0;
//키입력
window.document.body.onkeydown = function (e) {
    try {
        // 이벤트를 정규화한뒤 기본 동작을 막는다.
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
        //어떤키인지 구분
        switch (e.keyCode) {
            case 87:
            case 38:
                document.title = "상";
                tIndex = (tIndex - 2 + 8) % 8;
                break;
            case 83:
            case 40:
                document.title = "하";
                tIndex = (tIndex + 2 + 8) % 8;
                break;
            case 65:
            case 37:
                document.title = "좌";
                tIndex = (tIndex - 1 + 8) % 8;
                break;
            case 68:
            case 39:
                document.title = "우";
                tIndex = (tIndex + 1 + 8) % 8;
                break;
            case 13:
                document.title = "선택";
                break;
            case 9:
                document.title = "확인";
                break;
        }

        document.title += "" + tIndex;
    }
    catch (catchID) {
        alert("펑");
    }
}