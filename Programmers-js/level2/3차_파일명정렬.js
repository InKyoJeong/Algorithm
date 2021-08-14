function solution(files) {
  var answer = [];

  // 먼저 head num, tail로 나누고
  // head는 다소문자로 만들고 사전순정렬
  // num순정렬. 01과 1은같다
  // 순서 다 같으면 들어온순서대로.

  // 실패
  //   let temp = [];
  //   files.map((file, idx) => {
  //     let numStartIdx = 0;
  //     for (let i = 0; i < file.length; i++) {
  //       if (!isNaN(file[i])) {
  //         numStartIdx = i;
  //         break;
  //       }
  //     }
  //     let head = file.slice(0, numStartIdx);

  //     let tailStartIdx = 0;
  //     for (let i = numStartIdx; i < file.length; i++) {
  //       if (isNaN(file[i])) {
  //         tailStartIdx = i;
  //         break;
  //       }
  //     }
  //     let num = file.slice(numStartIdx, tailStartIdx);
  //     let tail = file.slice(tailStartIdx, file.length);

  //     temp.push([idx, head, num, tail]);
  //   });

  // 성공(참고)
  // 정규표현식
  let temp = [];
  for (let k = 0; k < files.length; k++) {
    let f = files[k];
    const reg = /(\d+)/g;
    temp.push([k, ...f.split(reg)]);
  }

  // 인덱스를 추가해서, 같으면 인덱스 순서를 유지
  temp.sort((a, b) => {
    let nameA = a[1].toUpperCase();
    let nameB = b[1].toUpperCase();
    if (nameA === nameB) {
      let numA = Number(a[2]);
      let numB = Number(b[2]);
      if (numA < numB) {
        return -1;
      } else if (numA > numB) {
        return 1;
      } else {
        return a[0] - b[0];
      }
    } else if (nameA < nameB) {
      return -1;
    } else {
      return 1;
    }
  });

  return temp.map((file) => {
    file.shift();
    return file.join("");
  });

  return answer;
}
