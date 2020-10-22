// 나이트의 이동 성공출처다국어분류 Silver IIsolved.ac 표준
// 너비 우선 탐색그래프 이론그래프 탐색
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	19071	8878	6713	45.951%
// 문제
// 체스판 위에 한 나이트가 놓여져 있다. 나이트가 한 번에 이동할 수 있는 칸은 아래 그림에 나와있다. 나이트가 이동하려고 하는 칸이 주어진다. 나이트는 몇 번 움직이면 이 칸으로 이동할 수 있을까?



// 입력
// 입력의 첫째 줄에는 테스트 케이스의 개수가 주어진다.

// 각 테스트 케이스는 세 줄로 이루어져 있다. 첫째 줄에는 체스판의 한 변의 길이 l(4 ≤ l ≤ 300)이 주어진다. 체스판의 크기는 l × l이다. 체스판의 각 칸은 두 수의 쌍 {0, ..., l-1} × {0, ..., l-1}로 나타낼 수 있다. 둘째 줄과 셋째 줄에는 나이트가 현재 있는 칸, 나이트가 이동하려고 하는 칸이 주어진다.

// 출력
// 각 테스트 케이스마다 나이트가 최소 몇 번만에 이동할 수 있는지 출력한다.

// 예제 입력 1 
// 3
// 8
// 0 0
// 7 0
// 100
// 0 0
// 30 50
// 10
// 1 1
// 1 1
// 예제 출력 1 
// 5
// 28
// 0

#include <iostream>
#include <vector>
#include <queue>
#include <cstring>

using namespace std;

int a[300][300];
int d[300][300];
//bool check[300][300];

int dx[] = {-1,-2,-2,-1,1,2,2,1};
int dy[] = {-2,-1,1,2,2,1,-1,-2};

int chess;  //체스판 한변의 길이

void bfs(int x, int y){
    queue<pair<int, int>> q;
    q.push(make_pair(x, y));
    d[x][y] = 0;
//    check[x][y] = true;
    while(!q.empty()){
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        for(int k=0; k<8; k++){
            int nx = x+dx[k];
            int ny = y+dy[k];
            if(0<=nx && nx<chess && 0<=ny && ny<chess){
                if(d[nx][ny] == -1){
                d[nx][ny] = d[x][y] + 1;
                q.push(make_pair(nx, ny));
                }
            }
        }
    }
}

int main(){
    int t;
    cin>>t;
    while(t--){
        cin>>chess;
        int start_x, start_y;
        cin>>start_x>>start_y;
        int move_x, move_y;
        cin>>move_x>>move_y;
        
        memset(d, -1, sizeof(d));
        bfs(start_x, start_y);
        
        cout<<d[move_x][move_y]<<'\n';
    }
    return 0;
}