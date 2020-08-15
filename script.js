//우클 드래그 방지
window.document.oncontextmenu = new Function("return false");
window.document.onselectstart = new Function("return false");
window.document.ondragstart = new Function("return false");

//배경이미지
document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/RepofKorDHK/GTA5FingerPrint/master/model/f1.png')";

//해당인덱스
var tStatus = -1;
//-1:지문초기화안됨
//0:지문정해짐
//1:정답공개됨

var tIndex = 0;
var sIndex = [
    0, 0,
    0, 0,
    0, 0,
    0, 0
];
var tImg = 0;


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
        document.title=e.keyCode;
        switch (e.keyCode) {
            case 87:
            case 38:
                tIndex = (tIndex - 2 + 8) % 8;
                break;
            case 83:
            case 40:
                tIndex = (tIndex + 2 + 8) % 8;
                break;
            case 65:
            case 37:
                tIndex = (tIndex - 1 + 8) % 8;
                break;
            case 68:
            case 39:
                tIndex = (tIndex + 1 + 8) % 8;
                break;
            case 13:
                sIndex[tIndex] = sIndex[tIndex] ? 0 : 1;
                break;
            case 9:
                while (true) {
                    var tmp = Math.floor(Math.random() * 4);
                    if (tImg != tmp) {
                        tImg = tmp;
                        tIndex = 0;
                        sIndex = [0,];
                        break;
                    }
                }
                break;
            case 33:
                tImg = (tImg - 1 + 4) % 4;
                tIndex = 0;
                sIndex = [0,];
                break;
            case 34:
                tImg = (tImg + 1 + 4) % 4;
                tIndex = 0;
                sIndex = [0,];
                break;
            case 27:
                window.confirm("이 창을 닫을까용?")?window.close():0;
                break;
        }

        //색칠하기
        for (i = 0; i < 8; i++) {
            //기본틀영역 색칠
            document.getElementById("a" + i).style.borderColor = "gray";
            //선택인덱스 색칠
            if (sIndex[i]) {
                document.getElementById("a" + i).style.backgroundColor = "gray";
            }
            else {
                document.getElementById("a" + i).style.backgroundColor = "transparent";
            }
        }
        //포커싱인덱스 색칠
        document.getElementById("a" + tIndex).style.borderColor = "yellow";

        //배경바꾸기
        document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/RepofKorDHK/GTA5FingerPrint/master/model/f" + (tImg + 1) + ".png')";
    }
    catch (catchID) {
        alert("알수없는 오류로 터졌습니다. 개발자는 열일하세요");
    }
}
window.document.body.onload = function () {
    window.document.body.onkeydown;
}
