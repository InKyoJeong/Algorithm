// A+B - 4 성공분류 Bronze III solved.ac 표준
// 사칙연산 구현 수학
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	71075	25184	21789	37.070%
// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 A+B를 출력한다.

//내풀이
#include <iostream>
using namespace std;
int main()
{
    int x,y;
    while(cin>>x>>y){
        cout<<x+y<<endl;
    }
    
    return 0;
}

//알게된 풀이
#include <iostream>
using namespace std;
int main()
{
    int A, B;
    while (scanf("%d %d", &A, &B) != EOF) 
    {
    cout<< A + B <<endl;
    }
    return 0;
}

// 더이상 읽을수 있는 데이터가 없음을 나타내는 EOF(End Of File)를 이용한다.