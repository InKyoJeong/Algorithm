function solution(enter, leave) {
  var answer = [];
  let arr = Array.from({ length: enter.length }, () => 0);

  // 계속 뺄수있는게 없으면 넣기
  // 뺄수있는지 계속 확인 => 최대한 뺄수있을때 바로빼야 가장 확실히 만나는구간 구할수있음
  // 큐에서 빠지는사람은 큐의 길이만큼 만난값 증가, 나머지는 1씩 증가

  let now = [];
  let i = 0;

  while (true) {
    if (i >= leave.length) {
      break;
    }
    if (now.includes(leave[i])) {
      // console.log(now)
      // now에서 포함하는걸 빼고 i증가
      let index = now.findIndex((v) => v === leave[i]);
      let delIndex = now[index];
      now.splice(index, 1);
      arr[delIndex - 1] += now.length;
      now.map((p) => {
        arr[p - 1]++;
      });
      i++;
    } else {
      now.push(enter.shift());
    }
  }

  return arr;
}

// 큐에서뺄때 큐(방의상태)정보를 모두 저장하려고해서 풀이가 어려웠음
// 상태모두 저장하지말고 뺄때 남은사람 개수만큼 더해주고, 나머지는 한개씩 더해주면된다.
