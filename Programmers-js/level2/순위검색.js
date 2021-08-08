// 문의 조건마다 INFO 배열에서 조건에 해당하는 지원자들을 찾으면서
// X점 이상 받은 사람은 몇 명인지 구한다면 정확성 테스트를 통과하지만,
// 효율성 테스트는 이렇게 매번 구하면 통과할수 없다.

// 효율성 시간초과 - query마다 모든 info배열을 체크
function solution(info, query) {
  var answer = [];

  let infoArr = [];
  for (let x of info) {
    infoArr.push(x.split(" "));
  }

  for (let x of query) {
    let temp = [];
    temp = x.split(" ").filter((v) => v !== "and");
    let copyArr = infoArr.slice();
    for (let i = 0; i < 4; i++) {
      if (temp[i] !== "-") {
        copyArr = copyArr.filter((info) => info.includes(temp[i]));
      }
    }
    copyArr = copyArr.filter(
      (info) => parseInt(info[4], 10) >= parseInt(temp[4], 10)
    );
    answer.push(copyArr.length);
  }
  return answer;
}

// 지원자들을 그룹별로 적절하게 미리 분류. 속할수 있는 경우는 16가지 그룹이 나온다 (조합)
// 이렇게 묶고 점수별로 오름차순 정렬
// 그러면 INFO 배열에서 찾지 않고, 미리 분류해둔 그룹에서 X점 이상 맞은 지원자 수를 세면됨
// X점 이상 맞은 지원자를 찾기 위해 Binary Search 사용
// 배열에 X가 없을 수도 있으므로, Lower Bound 사용

// 효율성 통과 (참고한풀이)
function solution(info, query) {
  var answer = [];
  let map = {};
  // 먼저 info를 키, 값으로 저장
  // '-'를 포함한 경우를 모두 저장
  // 쿼리를 and빼고 키를 찾아서 있으면 BinarySearch, LowerBound로 개수구하기

  function combination(arr, score, map, L) {
    let key = arr.join("");
    if (map[key]) {
      map[key].push(score);
    } else {
      map[key] = [score];
    }

    for (let i = L; i < 4; i++) {
      let copyArr = arr.slice();
      copyArr[i] = "-";
      combination(copyArr, score, map, i + 1);
      // console.log(copyArr)
    }
  }

  function binarySearch(key, score, map) {
    let searchArr = map[key];
    if (searchArr) {
      let start = 0;
      let end = searchArr.length;
      while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (score <= searchArr[mid]) {
          end = mid;
        } else {
          start = mid + 1;
        }
      }
      return searchArr.length - end;
    } else return 0;
  }

  for (let i = 0; i < info.length; i++) {
    let infoArr = info[i].split(" ");
    let infoScore = parseInt(infoArr.pop(), 10);
    combination(infoArr, infoScore, map, 0);
  }

  for (let key in map) {
    map[key].sort((a, b) => a - b);
  }

  for (let i = 0; i < query.length; i++) {
    let queryStr = query[i].replace(/ and /g, "").split(" ");
    let score = parseInt(queryStr.pop(), 10);
    answer.push(binarySearch(queryStr.join(""), score, map));
  }

  return answer;
}
