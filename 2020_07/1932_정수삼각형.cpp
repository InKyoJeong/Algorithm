//정수 삼각형 성공출처다국어분류 Silver I
//다이나믹 프로그래밍
//난이도 제공: solved.ac — 난이도 투표하러 가기
//시간 제한    메모리 제한    제출    정답    맞은 사람    정답 비율
//2 초    128 MB    34278    20049    14850    58.749%
//문제
//        7
//      3   8
//    8   1   0
//  2   7   4   4
//4   5   2   6   5
//위 그림은 크기가 5인 정수 삼각형의 한 모습이다.
//
//맨 위층 7부터 시작해서 아래에 있는 수 중 하나를 선택하여 아래층으로 내려올 때, 이제까지 선택된 수의 합이 최대가 되는 경로를 구하는 프로그램을 작성하라. 아래층에 있는 수는 현재 층에서 선택된 수의 대각선 왼쪽 또는 대각선 오른쪽에 있는 것 중에서만 선택할 수 있다.
//
//삼각형의 크기는 1 이상 500 이하이다. 삼각형을 이루고 있는 각 수는 모두 정수이며, 범위는 0 이상 9999 이하이다.
//
//입력
//첫째 줄에 삼각형의 크기 n(1 ≤ n ≤ 500)이 주어지고, 둘째 줄부터 n+1번째 줄까지 정수 삼각형이 주어진다.
//
//출력
//첫째 줄에 합이 최대가 되는 경로에 있는 수의 합을 출력한다.
//
//예제 입력 1
//5
//7
//3 8
//8 1 0
//2 7 4 4
//4 5 2 6 5
//예제 출력 1
//30

#include <iostream>
using namespace std;

int p[501][501];
int d[501][501];
int main()
{
    int n;
    cin>>n;
    
    for(int i=0; i<n; i++){
        for(int j=0; j<=i; j++){
            cin>>p[i][j];
        }
    }
    d[1][0]=d[1][1]=p[0][0];
    
    for(int i=2; i<=n; i++){
        d[i][0] = d[i-1][0] + p[i-1][0];
        for(int j=1; j<i; j++){
            d[i][j] = max( d[i-1][j-1] + p[i-1][j] , d[i-1][j] + p[i-1][j] );
        }
    }
    
    int ans = d[n][0];
    for(int i=1; i<n; i++){
        if(ans < d[n][i]){
            ans = d[n][i];
        }
    }
    cout<<ans<<'\n';
    
    return 0;
}


//00
//10 11
//20 21 22
// ...로 입력받아서

// d[n][j] : n의 높이에서 마지막으로 j를 더한것
