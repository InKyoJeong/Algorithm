// // 다른풀이
// function solution(s) {
//   var answer = "";
//   for (let i = 0; i < s.length; i++) {
//     if (i === 0 || s[i - 1] === " ") {
//       answer += s[i].toUpperCase();
//     } else {
//       answer += s[i].toLowerCase();
//     }
//   }
//   return answer;
// }

// // 다른풀이
// function solution(s) {
//   s = s.toLowerCase();
//   var answer = s
//     .split(" ")
//     .map((v) => {
//       let arr = v.split("");
//       if (arr[0] != null) {
//         arr[0] = arr[0].toUpperCase();
//       }
//       return arr.join("");
//     })
//     .join(" ");

//   return answer;
// }
