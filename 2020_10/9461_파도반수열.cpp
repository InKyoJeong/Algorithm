//파도반 수열 성공출처다국어분류 Silver III
//다이나믹 프로그래밍수학
//난이도 제공: solved.ac — 난이도 투표하러 가기
//시간 제한    메모리 제한    제출    정답    맞은 사람    정답 비율
//1 초    128 MB    36403    14997    12443    39.960%
//문제
//오른쪽 그림과 같이 삼각형이 나선 모양으로 놓여져 있다. 첫 삼각형은 정삼각형으로 변의 길이는 1이다. 그 다음에는 다음과 같은 과정으로 정삼각형을 계속 추가한다. 나선에서 가장 긴 변의 길이를 k라 했을 때, 그 변에 길이가 k인 정삼각형을 추가한다.
//
//파도반 수열 P(N)은 나선에 있는 정삼각형의 변의 길이이다. P(1)부터 P(10)까지 첫 10개 숫자는 1, 1, 1, 2, 2, 3, 4, 5, 7, 9이다.
//
//N이 주어졌을 때, P(N)을 구하는 프로그램을 작성하시오.
//
//입력
//첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, N이 주어진다. (1 ≤ N ≤ 100)
//
//출력
//각 테스트 케이스마다 P(N)을 출력한다.
//
//예제 입력 1
//2
//6
//12
//예제 출력 1
//3
//16

//d[n] : 정삼각형 n개에서 가장긴 변의 길이

#include <iostream>
using namespace std;

long long d[101];

int main(){
    int t;
    cin >> t;
    while(t--){
        int n;
        cin>>n;
        //d[5]까지는 여러개, d[6]부터 한개
        for(int i=1; i<=3; i++){
            d[i] = 1;
        }
        for(int i=4; i<=5; i++){
            d[i] = 2;
        }
        for(int i=6; i<=n; i++){
            d[i] = d[i-1]+d[i-5];
        }
        cout<<d[n]<<'\n';
    }
    return 0;
}

// int로하면 범위가 벗어남. 체크했어야한다.
// ex) 77일때 13억, 80일때 21억이상

//d[6] = d[5]+ d[1]; //길이3일때
//d[7] = d[6]+ d[2]; //길이4일때
//d[8] = d[7]+ d[3]; //5일때
//d[9] = d[8]+ d[4]; //7
//d[10] = d[9] + d[5];
