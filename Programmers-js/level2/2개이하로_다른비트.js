// [tc 10,11 시간초과]
// 자릿수가안맞으면 내꺼앞에 0채우기,
// 하나씩 증가하며 자릿수 비교
// 다른지점 2개 이하면 바로 answer에 저장.

function findSimilar(num) {
  let startBit = num.toString(2);

  while (true) {
    num += 1;
    let nextBit = num.toString(2);

    if (startBit.length !== nextBit.length) {
      startBit = startBit.padStart(nextBit.length, "0");
    }

    let count = 0;
    for (let i = 0; i < nextBit.length; i++) {
      if (startBit[i] !== nextBit[i]) {
        count++;
      }
      if (count > 2) break;
    }

    if (count <= 2) {
      return parseInt(nextBit, 2);
    }
  }
}

function solution(numbers) {
  var answer = [];

  numbers.forEach((number) => {
    answer.push(findSimilar(number));
  });
  return answer;
}

// 다른풀이

// 1. 맨 뒤 비트가 0일 때
// 이 경우 단순히 맨 뒤 비트를 1로 바꿔주면 해당 수보다 큰 수 중 가장 작은 값이 된다.
// ex: 1110(14) -> 1111(15)

// 2. 맨 뒤 비트가 0이 아닐 때
// 이 경우, 뒤에서 부터 첫번째로 등장하는 "01"을 찾는다.
// 그리고 이 부분을 "10"으로 바꿔주면 2비트만 바꾸어 만들 수 있는 가장 작은 값이 된다.
// ex: 11011(27) -> 11101(29)

function solution(numbers) {
  var answer = [];

  numbers.forEach((number) => {
    let str = "0" + number.toString(2);
    if (str[str.length - 1] === "0") {
      answer.push(number + 1);
    } else {
      let strArr = str.split("");
      for (let i = strArr.length - 1; i >= 0; i--) {
        if (strArr[i] === "0") {
          strArr.splice(i, 2, "10");
          break;
        }
      }
      answer.push(parseInt(strArr.join(""), 2));
    }
  });

  return answer;
}
