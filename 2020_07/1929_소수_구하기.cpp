// 소수 구하기 성공분류 Silver II
// 수학정수론소수 판정에라토스테네스의 체
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 2 초	256 MB	67779	19102	13491	27.680%
// 문제
// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

// 출력
// 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

// 예제 입력 1 
// 3 16
// 예제 출력 1 
// 3
// 5
// 7
// 11
// 13

#include <iostream>

using namespace std;

const int MAX = 1000000;

bool check[MAX+1];

int main(){

    int N,M;
    cin>>N>>M;

    check[0]= check[1]= true;   //지워졌으면 true
    for(int i=2; i*i<=MAX; i++){
        if(check[i]==false){
            for(int j=i+i; j<=MAX; j+=i){
                check[j] = true;
            }
        }
    }

    for(int i=N; i<=M; i++){
        if(check[i]==false)
            cout<<i<<'\n';
    }
    return 0;
}

// 전역변수는 false로 초기화되어 있다.
// 0과 1은 소수가 아니라서, 검사할 필요가 없기 때문에 
// 미리 check[0] = check[1] = true;로 해놓은 것이다.