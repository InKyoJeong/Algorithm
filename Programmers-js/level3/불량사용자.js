function compareBan(user, ban) {
  if (user.length !== ban.length) {
    return false;
  }
  for (let i = 0; i < user.length; i++) {
    if (!(user[i] === ban[i] || ban[i] === "*")) {
      return false;
    }
  }
  return true;
}

function solution(user_id, banned_id) {
  let check = Array.from({ length: user_id.length }, () => 0);
  let temp = Array.from({ length: banned_id.length }, () => 0);

  let answer = [];

  function DFS(L) {
    if (L === banned_id.length) {
      answer.push(temp.slice());
      return;
    } else {
      for (let i = 0; i < user_id.length; i++) {
        if (check[i] === 0) {
          if (compareBan(user_id[i], banned_id[L])) {
            temp[L] = user_id[i];
            check[i] = 1;
            DFS(L + 1);
            check[i] = 0;
          }
        }
      }
    }
  }
  DFS(0);

  answer = answer.map((v) => v.sort().join(""));
  return [...new Set(answer)].length;
}

// DFS로 가능한 조합 찾고
// 마지막에 정렬해서 합치고 중복제거
