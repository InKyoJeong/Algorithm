// 별 찍기 - 1 성공분류 Bronze III
// 구현문자열
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	93443	56611	49223	62.190%
// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

// 예제 입력 1 
// 5
// 예제 출력 1 
// *
// **
// ***
// ****
// *****

#include <iostream>
using namespace std;
int main()
{
    int count;
    cin>>count;
    for(int i=1; i<=count; i++)
    {
       for(int j=1; j<=i; j++)
        {
            cout<<'*';
        }
        cout<<endl;
    } 
    return 0;
}