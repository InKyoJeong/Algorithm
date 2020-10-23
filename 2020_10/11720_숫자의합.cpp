// 숫자의 합 성공분류 Bronze II
// 사칙연산수학문자열
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	80464	39148	33781	50.548%
// 문제
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

// 출력
// 입력으로 주어진 숫자 N개의 합을 출력한다.

// 예제 입력 1 
// 1
// 1
// 예제 출력 1 
// 1
// 예제 입력 2 
// 5
// 54321
// 예제 출력 2 
// 15
// 예제 입력 3 
// 25
// 7000000000000000000000000
// 예제 출력 3 
// 7

#include <cstdio>

using namespace std;
int num[101];

int main(){
    int count;
    scanf("%d", &count);
    
    for(int i=0; i<count; i++){
        scanf("%1d", &num[i]);
    }
    int sum =0;
    for(int i=0; i<count; i++){
        sum += num[i];
    }
    printf("%d\n", sum);
    return 0;
}