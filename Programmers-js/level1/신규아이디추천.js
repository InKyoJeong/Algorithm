function solution(new_id) {
  //1
  let result = new_id
    .toLowerCase()
    //2
    .replace(/[^A-Z0-9\-\.\_]/gi, "")
    //3
    .replace(/\.{2,}/g, ".")
    //4
    .replace(/^\./, "")
    .replace(/\.$/, "");
  //5
  if (!result) result += "a";
  //6
  if (result.length >= 16) {
    result = result.slice(0, 15);
  }
  if (result[14] === ".") {
    result = result.slice(0, 14);
  }
  //7
  if (result.length <= 2) {
    while (result.length <= 2) {
      result += result[result.length - 1];
    }
  }

  return result;
}

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      const number = nums[i] + nums[j] + nums[k];
      if (isPrime(number)) answer++;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = i + 1; i < n; j++) {
    for (let k = j + 1; k < n; k++) {
      let temp = nums[i] + nums[j] + nums[k];
      if (isPrime(temp)) {
        answer++;
      }
    }
  }
}
