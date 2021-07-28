// N 찍기 성공분류 Bronze III
// 구현
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	120704	56481	48712	48.852%
// 문제
// 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

#include <iostream>
using namespace std;
int main()
{
    int x;
    cin>>x;
    for(int i=1;i<=x;i++)
    {
        cout<<i<<'\n';
    }
    return 0;
}

// cout<<i<<cout; 으로 하면 시간초과오류가 난다. \n을이용하여 속도를 향상할수 있었음.