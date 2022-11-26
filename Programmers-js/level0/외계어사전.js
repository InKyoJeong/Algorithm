function solution(spell, dic) {
  let answer = 2;
  const findWord = spell.sort().join("");

  dic.forEach((word) => {
    const newWord = word.split("").sort().join("");
    if (findWord === newWord) {
      answer = 1;
    }
  });

  return answer;
}
