// 팩토리얼 0의 개수 성공 Silver III
// 임의 정밀도 / 큰 수 연산수학
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 2 초	128 MB	17536	8044	6702	46.910%
// 문제
// N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N이 주어진다. (0 ≤ N ≤ 500)

// 출력
// 첫째 줄에 구한 0의 개수를 출력한다.

// 예제 입력 1 
// 10
// 예제 출력 1 
// 2

#include <iostream>

using namespace std;

int main(){

    int n;
    cin>>n;
    int result = 0;
    for(int i=5; i<n; i*=5){
        result += n / i;
    }
    cout<<result<<'\n';
    
    return 0;

}