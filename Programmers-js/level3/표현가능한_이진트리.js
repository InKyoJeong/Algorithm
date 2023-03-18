function getNewBin(number) {
  const bin = number.toString(2);
  const n = bin.length;
  const treeHeight = Math.ceil(Math.log2(n + 1));
  const nodes = 2 ** treeHeight - 1;

  return "0".repeat(nodes - n) + bin;
}

function checkTree(bin, root) {
  // 부모가 더미노드면서 자식이 일반노드인경우
  if (root === "0" && bin.includes("1")) {
    return 0;
  }
  if (bin.length === 0) {
    return 1;
  }

  const half = Math.floor(bin.length / 2);

  return (
    checkTree(bin.slice(0, half), bin[half]) &&
    checkTree(bin.slice(half + 1), bin[half])
  );
}

function solution(numbers) {
  return numbers.map((num) => {
    const newBin = getNewBin(num);
    const root = Math.floor(newBin.length / 2);

    return checkTree(newBin, newBin[root]);
  });
}
