
// querySelector -> id가 dynamic인 요소 찾음
let target = document.querySelector("#dynamic");

function randomString(){
    //배열 변수 선언 및 초기화
    //let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript", "Learn to JAVA"];
    //배열에서 랜덤으로 값 하나 꺼내 저장
    //let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    //문자열을 ""기준으로 짤라서 변수에 저장
    let selectString = "안녕하세요 배성빈 입니다.";
    let selectStringArr = selectString.split("");
    //쪼개진 문자배열 리턴
    return selectStringArr
}

function resetTyping(){
    //내용을 비운다
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력
function dynamic(randomArr){
    // if문 내부에서 매개변수로 들어온 문자열 맨 앞 값을 하나씩 제거한다
    if(randomArr.length > 0){
        //dynamic에 문자 추가
        target.textContent += randomArr.shift();    //shift() -> 배열의 맨 앞에 값 제거
        //setTimeout(function(){~}, delay) -> 지연시간 뒤에 호출 될 콜백 함수, 지연시간(1000은 1초)
        setTimeout(function(){
            //재귀함수
            dynamic(randomArr);
        }, 80); 
    } else{
        //매개변수 문자열의 길이가 0이되면 3초 뒤에 호출
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active")
}
setInterval(blink, 500);