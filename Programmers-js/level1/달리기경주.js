function solution(players, callings) {
  const record = {};
  players.forEach((player, idx) => (record[player] = idx));

  for (let i = 0; i < callings.length; i++) {
    const currentIndex = record[callings[i]];
    const prevPlayer = players[currentIndex - 1];
    const currentPlayer = players[currentIndex];
    players[currentIndex] = prevPlayer;
    players[currentIndex - 1] = currentPlayer;
    record[callings[i]]--;
    record[prevPlayer]++;
  }

  return players;
}

// 시간초과
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoubleLinkedList {
//     constructor(value){
//         this.head = {
//             value,
//             next: null,
//             prev: null,
//         }
//         this.tail = this.head;
//         this.selected = null;
//         this.length = 1;
//     }
//     append(value){
//         const newNode = new Node(value);
//         newNode.prev = this.tail;
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//     }
//     select(value){
//         let currentNode = this.head;
//         while(currentNode.value !== value){
//             currentNode = currentNode.next;
//         }
//         this.selected = currentNode;
//         this.move();
//     }
//     move(){
//         const currentNode = this.selected;
//         const nextNode = currentNode.next;
//         const prevNode = currentNode.prev;

//         //현재꺼 연결끊기
//         prevNode.next = nextNode || null;
//         if(nextNode){
//             nextNode.prev = prevNode;
//         }
//         // 헤드 체크
//         if(!prevNode.prev){
//             this.head = currentNode;
//         }
//         // 이전꺼앞에다 넣기
//         if(prevNode.prev){
//             prevNode.prev.next = currentNode;
//             currentNode.prev = prevNode.prev;
//         }
//         currentNode.next = prevNode;
//         prevNode.prev = currentNode;
//     }
//     printList(){
//         const array = [];

//         let headNode = this.head;
//         while(this.length){
//             array.push(headNode.value);
//             headNode = headNode.next;
//             this.length--;
//         }

//         return array;
//     }
// }

// function solution(players, callings) {
//     const linkedList = new DoubleLinkedList(players[0])

//     for(let i=1; i<players.length; i++){
//         linkedList.append(players[i]);
//     }

//     for(let i=0; i<callings.length; i++){
//         linkedList.select(callings[i])
//     }

//     return linkedList.printList();
// }
