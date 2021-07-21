// 1 :끝 글자랑 이어지는지 확인
// 2 :나왔던 단어인지 확인
// 1,2에 실패시 자기 순서랑 몇회차인지 리턴
// 탈락자가 없으면 [0,0]

function checkStart(word) {
  return word[0];
}

function checkEnd(word) {
  return word[word.length - 1];
}

function solution(n, words) {
  let stack = [];
  let sH = new Map();

  // 첫단어 스택에 넣고 끝문자 저장하기
  let lastEnd = checkEnd(words[0]);
  stack.push(words[0]);
  sH.set(words[0], 1);

  // 그다음 단어들 체크하며 스택에 넣기
  let m = words.length;
  for (let i = 1; i < m; i++) {
    if (checkStart(words[i]) === lastEnd) {
      stack.push(words[i]);
      lastEnd = checkEnd(words[i]);

      if (sH.has(words[i])) {
        let person = (i % n) + 1;
        let turn = Math.ceil(stack.length / n);
        return [person, turn];
      } else {
        sH.set(words[i], 1);
      }
    } else {
      // 실패 : 몇번째 번호 인지랑 턴을 구하기
      stack.push(words[i]);
      let person = (i % n) + 1;
      let turn = Math.ceil(stack.length / n);
      return [person, turn];
    }
  }

  // 그대로 다 스택에 들어갔으면, 탈락자없음
  if (stack.length === m) {
    return [0, 0];
  }
}

////////////////
// indexOf로 풀기
function checkStart(word) {
  return word[0];
}

function checkEnd(word) {
  return word[word.length - 1];
}

function solution(n, words) {
  let stack = [];

  // 첫단어 스택에 넣고 끝문자 저장하기
  let lastEnd = checkEnd(words[0]);
  stack.push(words[0]);

  // 그다음 단어들 체크하며 스택에 넣기
  let m = words.length;
  for (let i = 1; i < m; i++) {
    if (checkStart(words[i]) === lastEnd && stack.indexOf(words[i]) === -1) {
      stack.push(words[i]);
      lastEnd = checkEnd(words[i]);
    } else {
      // 몇번째 번호 인지랑 턴을 구하기
      stack.push(words[i]);
      let person = (i % n) + 1;
      let turn = Math.ceil(stack.length / n);
      return [person, turn];
    }
  }

  // 그대로 다 스택에 들어갔으면, 탈락자없음
  if (stack.length === m) {
    return [0, 0];
  }
}
