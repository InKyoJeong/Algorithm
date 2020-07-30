//테트로미노 성공분류 Gold V
//브루트포스 알고리즘구현
//난이도 제공: solved.ac — 난이도 투표하러 가기
//시간 제한    메모리 제한    제출    정답    맞은 사람    정답 비율
//2 초    512 MB    29735    10813    6919    34.178%
//문제
//폴리오미노란 크기가 1×1인 정사각형을 여러 개 이어서 붙인 도형이며, 다음과 같은 조건을 만족해야 한다.
//
//정사각형은 서로 겹치면 안 된다.
//도형은 모두 연결되어 있어야 한다.
//정사각형의 변끼리 연결되어 있어야 한다. 즉, 꼭짓점과 꼭짓점만 맞닿아 있으면 안 된다.
//정사각형 4개를 이어 붙인 폴리오미노는 테트로미노라고 하며, 다음과 같은 5가지가 있다.
//
//
//
//아름이는 크기가 N×M인 종이 위에 테트로미노 하나를 놓으려고 한다. 종이는 1×1 크기의 칸으로 나누어져 있으며, 각각의 칸에는 정수가 하나 쓰여 있다.
//
//테트로미노 하나를 적절히 놓아서 테트로미노가 놓인 칸에 쓰여 있는 수들의 합을 최대로 하는 프로그램을 작성하시오.
//
//테트로미노는 반드시 한 정사각형이 정확히 하나의 칸을 포함하도록 놓아야 하며, 회전이나 대칭을 시켜도 된다.
//
//입력
//첫째 줄에 종이의 세로 크기 N과 가로 크기 M이 주어진다. (4 ≤ N, M ≤ 500)
//
//둘째 줄부터 N개의 줄에 종이에 쓰여 있는 수가 주어진다. i번째 줄의 j번째 수는 위에서부터 i번째 칸, 왼쪽에서부터 j번째 칸에 쓰여 있는 수이다. 입력으로 주어지는 수는 1,000을 넘지 않는 자연수이다.
//
//출력
//첫째 줄에 테트로미노가 놓인 칸에 쓰인 수들의 합의 최댓값을 출력한다.
//
//예제 입력 1
//5 5
//1 2 3 4 5
//5 4 3 2 1
//2 3 4 5 6
//6 5 4 3 2
//1 2 1 2 1
//예제 출력 1
//19
//예제 입력 2
//4 5
//1 2 3 4 5
//1 2 3 4 5
//1 2 3 4 5
//1 2 3 4 5
//예제 출력 2
//20

#include <iostream>

using namespace std;
int a[501][501];

int main()
{
    int n,m;
    cin>>n>>m;
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cin>>a[i][j];
        }
    }
    
    int ans = 0;
    
    //n은 세로.  m은 가로
    
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            //긴모양일때 두가지.
            if(j+3 < m){
                int temp = a[i][j]+a[i][j+1]+a[i][j+2]+a[i][j+3];
                if(temp > ans)
                    ans = temp;
            }
            if(i+3 < n){
                int temp = a[i][j]+a[i+1][j]+a[i+2][j]+a[i+3][j];
                if(temp > ans)
                    ans = temp;
            }
            
            //네모모양 한가지.
            if(i+1 < n && j+1 < m){
                int temp = a[i][j]+a[i][j+1]+a[i+1][j]+a[i+1][j+1];
                if(temp > ans)
                    ans = temp;
            }
            
            // L모양 :정방향
            if(i+2 < n && j+1 < m){
                int temp = a[i][j]+a[i+1][j]+a[i+2][j]+a[i+2][j+1];
                if(temp > ans)
                    ans = temp;
            }
            // L모양 :y축대칭
            if(i+2 < n && j-1 >= 0){
                int temp = a[i][j]+a[i+1][j]+a[i+2][j]+a[i+2][j-1];
                if(temp > ans)
                    ans = temp;
            }
            // L모양 : 세로3칸 ㄱ모양
            if(i+2 < n && j-1 >= 0){
                int temp = a[i][j]+a[i+1][j]+a[i+2][j]+a[i][j-1];
                if(temp > ans)
                    ans = temp;
            }
            // L모양 :세로3칸 ㄱ모양 :y축대칭
            if(i+2 < n && j+1 < m){
                int temp = a[i][j]+a[i+1][j]+a[i+2][j]+a[i][j+1];
                if(temp > ans)
                    ans = temp;
            }
            // L모양 :세로2칸 ㄱ모양
            if(i+1 < n && j-2 >=0){
                int temp = a[i][j]+a[i][j-1]+a[i][j-2]+a[i+1][j];
                if(temp > ans)
                    ans = temp;
            }
            // L모양 :세로2칸 ㄱ모양 :y축대칭
            if(i+1 < n && j+2 < m){
                int temp = a[i][j]+a[i][j+1]+a[i][j+2]+a[i+1][j];
                if(temp > ans)
                    ans = temp;
            }
            // L모양 :세로2칸 ㄴ모양
            if(i+1 < n && j+2 < m){
                int temp = a[i][j]+a[i+1][j]+a[i+1][j+1]+a[i+1][j+2];
                if(temp > ans)
                    ans = temp;
            }
             // L모양 :세로2칸 ㄴ모양:y축대칭
            if(i+1 < n && j-2 >=0){
                int temp = a[i][j]+a[i+1][j]+a[i+1][j-1]+a[i+1][j-2];
                if(temp > ans)
                    ans = temp;
            }
            
            //지그재그 : 정방향
            if(i+2 < n && j+1 < m){
                int temp = a[i][j]+a[i+1][j]+a[i+1][j+1]+a[i+2][j+1];
                if(temp > ans)
                    ans = temp;
            }
            //지그재그 : 정방향:y축대칭
            if(i+2 < n && j-1 >= 0){
                int temp = a[i][j]+a[i+1][j]+a[i+1][j-1]+a[i+2][j-1];
                if(temp > ans)
                    ans = temp;
            }
            //지그재그 : 90도 오른쪽회전
            if(i-1 >= 0 && j+2 <m){
                int temp = a[i][j]+a[i][j+1]+a[i-1][j+1]+a[i-1][j+2];
                if(temp > ans)
                    ans = temp;
            }
            if(i+1 < n && j+2 < m){
                int temp = a[i][j]+a[i][j+1]+a[i+1][j+1]+a[i+1][j+2];
                if(temp > ans)
                    ans = temp;
            }
            
            // ㅜ모양
            if(i+1 < n && j+2 < m){
                int temp = a[i][j]+a[i][j+1]+a[i][j+2]+a[i+1][j+1];
                if(temp > ans)
                    ans = temp;
            }
            // ㅗ모양
            if(i-1 >= 0 && j+2 < m){
                int temp = a[i][j]+a[i][j+1]+a[i][j+2]+a[i-1][j+1];
                if(temp > ans)
                    ans = temp;
            }
            // ㅓ모양
            if(i+2 < n && j-1 >= 0){
                int temp = a[i][j]+a[i+1][j]+a[i+2][j]+a[i+1][j-1];
                if(temp > ans)
                    ans = temp;
            }
            // ㅏ모양
            if(i+2 < n && j+1 < m){
                int temp = a[i][j]+a[i+1][j]+a[i+2][j]+a[i+1][j+1];
                if(temp > ans)
                    ans = temp;
            }
        }
    }
    cout<<ans<<'\n';
    
    return 0;
}

//각 도형을 회전, 대칭 하는 모든 경우의 19가지를 모두 구하는방법