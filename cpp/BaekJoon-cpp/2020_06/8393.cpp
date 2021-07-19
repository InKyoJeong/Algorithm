// 합 성공출처다국어 Bronze Vsolved.ac 표준
// 구현수학
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	65179	45270	40485	70.615%
// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 출력
// 1부터 n까지 합을 출력한다.

// 예제 입력 1 
// 3
// 예제 출력 1 
// 6

#include <iostream>
using namespace std;
int main()
{
    int x;
    cin>>x;
    int sum=0;
    for(int i =1; i<=x; i++)
    {
        sum+=i;
    }
    cout<<sum;
    return 0;
}