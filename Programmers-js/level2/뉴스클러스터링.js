function splitStr(str) {
  let n = str.length;
  let arr = [];
  for (let i = 0; i < n - 1; i++) {
    let x = str
      .split("")
      .slice(i, i + 2)
      .join("");
    let y = x.replace(/[^a-z]/g, "");
    arr.push(y);
  }
  return arr.filter((e) => e.length === 2);
}

function solution(str1, str2) {
  var answer = 0;

  // 일단 소문자로 만들기
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // 두글자씩 끊기 //영어가 아닌게있으면 그쌍은 버리기
  let arr1 = splitStr(str1);
  let arr2 = splitStr(str2);
  console.log(arr1, arr2);

  // 중복포함 교집합이랑 합집합 구하기
  let common = [];
  let sum = [];

  for (let i = 0; i < arr2.length; i++) {
    let findIdx = arr1.indexOf(arr2[i]);
    if (findIdx >= 0) {
      common.push(arr1.splice(findIdx, 1));
    }
    sum.push(arr2[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    sum.push(arr1[i]);
  }

  //   console.log(common, sum);

  if (!common.length && !sum.length) {
    return 65536;
  }
  answer = (common.length / sum.length) * 65536;

  return Math.floor(answer);
}

// ▲ 중복포함 교집합,합집합 구하기
// splice로 제거할때 "제거한 요소를 담은 배열" 반환됨
