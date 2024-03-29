// 나머지 성공분류 Bronze Vsolved.ac 표준
// 사칙연산구현수학
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	88703	51427	46851	59.310%
// 문제
// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?

// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

// 출력
// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

// 예제 입력 1 
// 5 8 4
// 예제 출력 1 
// 1
// 1
// 0
// 0

#include <iostream>

using namespace std;

int main(){
    int a,b,c;
    cin>>a>>b>>c;
    
    cout<< (a+b)%c << '\n';
    cout<< (a+b)%c << '\n';
    // cout<< ((a%c) + (b%c))%c << '\n';
    cout<< (a*b)%c << '\n';
    cout<< (a*b)%c << '\n';
    // cout<< ((a%c)*(b%c))%c << '\n';
    
    
    return 0;
}
