// // 숫자일때는 ans에바로 추가
// // 문자일때는 스택에 하나씩 넣기
// // 스택 문자를 연결한게 mean에서 찾을수 있으면 스택을 비우고 그 인덱스를 ans에 추가

// // if(Number(s[i])) 처음에 이렇게했는데 Number(0)은 false라서 temp에 더해진다

function solution(s) {
    var answer = "";
    
    let mean = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
   
    let temp = "";
    for(let i=0; i<s.length; i++){
        if(s[i] >= '0' && s[i] <= '9'){
            answer += s[i];
        }else{
            temp += (s[i]);
            let x = mean.findIndex(e=> e === temp);
            if(x !== -1){
                answer += x;
                temp = "";
            }
        }
        
    }
    console.log(temp);

    return Number(answer);
}

    

///// 다른풀이
// 그 숫자문자 기준으로 나누고 다시 숫자를 추가하는 방식
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        console.log(arr);
        answer = arr.join(i);
    }

    return Number(answer);
}


/// 다른풀이
// 정규표현식으로 계속 replace

s= s.replace(/one/gi, 1).replace ... 