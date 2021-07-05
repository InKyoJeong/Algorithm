function combination(arr, m) {
  let answer = [];
  let n = arr.length;
  let temp = Array.from({ length: m }, () => 0);

  function DFS(L, p) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = p; i < n; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 0);

  return answer;
}

function solution(orders, course) {
  var answer = [];
  let sH = new Map();

  // orders를 한글자씩 분리해서 하나의 배열씩 저장
  let orderArr = [];
  for (let x of orders) {
    orderArr.push(x.split(""));
  }

  // 먼저 정렬
  orderArr.map((v) => v.sort());

  // course 숫자에 따라 조합 구하고/ 문자하나로 합치고/ 그 키에 해시로 개수 저장
  orderArr.map((e) => {
    for (let i = 2; i <= course[course.length - 1]; i++) {
      if (!course.includes(i) || e.length < i) {
        continue;
      }
      let tempArr = combination(e, i);
      // console.log(tempArr);
      let tempStr = tempArr.map((v) => {
        let str = v.join("");
        if (sH.has(str)) {
          sH.set(str, sH.get(str) + 1);
        } else {
          sH.set(str, 1);
        }
      });
    }
  });

  // 배열하나로 합치기
  let all = [];
  for (let [key, value] of sH) {
    all.push([key, value]);
  }

  // course 숫자에 따라 가장 많이 주문된 메뉴 키를 뽑아 출력
  // 키의 값은 최소 2 이상
  for (let x of course) {
    let menu = all.filter((e) => e[0].length === x && e[1] > 1);
    if (menu.length) {
      let max = Math.max(...menu.map((e) => e[1]));
      menu.filter((e) => {
        if (e[1] === max) {
          answer.push(e[0]);
        }
      });
    }
  }

  // 마지막에 정렬
  return answer.sort();
}
