function solution(priorities, location) {
  var answer = 0;
  let n = priorities.length;

  // 큐 만들어서 인덱스랑 값 저장
  let queue = [];
  for (let i = 0; i < n; i++) {
    queue.push([i, priorities[i]]);
  }

  // 순서만 저장할 배열 만들기
  let ans = [];

  while (queue.length) {
    let x = queue[0];
    // 제일 앞부터 뒤에 더 큰게있으면 pop 해서 다시 push
    if (queue.some((e) => e[1] > x[1])) {
      let x = queue.shift();
      queue.push(x);
      // 제일 큰거면 pop 해서 순서만(인덱스만) 배열에 넣기
    } else {
      let x = queue.shift();
      ans.push(x[0]);
    }
  }
  // location이랑 같은거 찾아서 +1
  answer = ans.findIndex((e) => e === location) + 1;

  return answer;
}

///////
// 다른사람풀이 - map으로 객체 배열생성

function solution(priorities, location) {
  let list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  let count = 0;
  while (true) {
    let x = list.shift();
    if (list.some((e) => e.val > x.val)) {
      list.push(x);
    } else {
      count++;
      if (x.my) {
        return count;
      }
    }
  }
}
