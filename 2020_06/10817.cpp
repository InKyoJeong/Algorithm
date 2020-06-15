// 세 수 성공 Bronze III
// 구현
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	94104	41824	36687	46.312%
// 문제
// 세 정수 A, B, C가 주어진다. 이때, 두 번째로 큰 정수를 출력하는 프로그램을 작성하시오. 

// 입력
// 첫째 줄에 세 정수 A, B, C가 공백으로 구분되어 주어진다. (1 ≤ A, B, C ≤ 100)

// 출력
// 두 번째로 큰 정수를 출력한다.

// 예제 입력 1 
// 20 30 10
// 예제 출력 1 
// 20

#include <iostream>
using namespace std;
int main()
{
    int a,b,c;
    cin>>a>>b>>c;
    if(a>b)
        if(a>c)
        {
            if(b>c)
                cout<<b<<'\n';
            else
                cout<<c<<'\n';
        }
        else
            cout<<a<<'\n';
    
    else //a<b
        if(c>a)
        {
            if(b<c)
                cout<<b<<'\n';
            else
                cout<<c<<'\n';
        }
        else
            cout<<a<<'\n';
  
    return 0;
}