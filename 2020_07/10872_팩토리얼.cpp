// 팩토리얼 성공분류 Bronze III
// 구현수학
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	42053	20469	17720	49.703%
// 문제
// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수 N(0 ≤ N ≤ 12)가 주어진다.

// 출력
// 첫째 줄에 N!을 출력한다.

// 예제 입력 1 
// 10
// 예제 출력 1 
// 3628800

#include <iostream>

using namespace std;


int main()
{
    
    int x;
    cin>>x;
    int result = 1;
    for(int i=1; i<=x; i++){
        result *= i;
    }
    
    
    cout<<result<<'\n';
    
    return 0;
}


//재귀

#include <iostream>

using namespace std;

int factorial(int n){
    if(n==0)
        return 1;
    else{
        return n*factorial(n-1);
    }
}

int main(){

    int n;
    cin>>n;
    cout<<factorial(n)<<'\n';

    return 0;
}
