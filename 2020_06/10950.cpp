// A+B - 3 성공분류 Bronze IIIsolved.ac 표준
// 사칙연산구현수학
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	54638	32155	28537	59.877%
// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 A+B를 출력한다.

// 예제 입력 1 
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 예제 출력 1 
// 2
// 5
// 7
// 17
// 7

#include <iostream>
using namespace std;
int main()
{
    int i,x,y,count;
    cin>>count;
    for(i=0; i<count; i++)
    {
        cin>>x>>y;
        cout<<x+y<<endl;
    }
    return 0;
}


//백준풀이
#include <iostream>
using namespace std;
int main()
{
    //입출력 속도 빠르게
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int t;
    int a, b;
    cin>>t;
    while(t--){
    cin>>a>>b;
    cout<<a+b<<'\n';
    }
    return 0;
}