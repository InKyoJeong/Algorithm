// 소수 찾기 성공분류 Silver IV
// 수학정수론소수 판정에라토스테네스의 체
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 2 초	128 MB	48233	22616	18748	48.492%
// 문제
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

// 입력
// 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

// 출력
// 주어진 수들 중 소수의 개수를 출력한다.

// 예제 입력 1 
// 4
// 1 3 5 7
// 예제 출력 1 
// 3

#include <iostream>

using namespace std;

bool prime(int n){
    if(n<2)
        return false;
    for(int i=2; i*i<=n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

int main(){
    int N;
    cin>>N;
    int count = 0;
    for(int i=0; i<N; i++){
        int x;
        cin>>x;
        
        if(prime(x) == true)
            count++;
    }
    cout<<count<<'\n';
    
    return 0;
}
