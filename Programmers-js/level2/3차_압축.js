function solution(msg) {
  var answer = [];
  // prettier-ignore
  let dic = {'A':1, 'B':2, 'C':3, 'D':4, 'E':5, 'F':6,
               'G':7, 'H':8, 'I':9, 'J':10,'K':11,'L':12,
               'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,
               'S':19,'T':20,'U':21,'V':22,'W':23,'X':24,
               'Y':25,'Z':26 };
  let dicLength = 26;

  //   또는
  //   let dic = {};
  //   for(let i=1; i<=26; i++){
  //       let alpha = String.fromCharCode(i+64);
  //       dic[alpha] = i;
  //   }

  while (msg.length) {
    let w = "";
    let wc = "";
    let i;
    for (i = 0; i < msg.length; i++) {
      w = msg.slice(0, i);
      wc = msg.slice(0, i + 1);
      if (dic[wc] === undefined) {
        answer.push(dic[w]);
        dic[wc] = dicLength + 1;
        dicLength++;
        break;
      }
      if (i === msg.length - 1) {
        answer.push(dic[wc]);
      }
    }
    msg = msg.slice(i);
  }

  return answer;
}
