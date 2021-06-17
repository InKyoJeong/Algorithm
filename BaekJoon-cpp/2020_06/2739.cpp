// 구구단 성공분류 Bronze III
// 사칙연산구현수학
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	102462	53342	47461	54.035%
// 문제
// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

// 입력
// 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

// 출력
// 출력형식과 같게 N*1부터 N*9까지 출력한다.

#include <iostream>
using namespace std;
int main()
{
    int input;
    int cal=1;
    cin>>input;
    for(int i=1; i<=9; i++)
    {
        cal = input*i;
        cout<<input<<" * "<<i<<" = "<<cal<<endl;
    }
    return 0;
}
