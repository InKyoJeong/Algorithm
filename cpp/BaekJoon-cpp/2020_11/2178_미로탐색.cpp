// 미로 탐색 성공분류 Silver I
// 너비 우선 탐색그래프 이론그래프 탐색
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	192 MB	78367	29914	19018	36.960%
// 문제
// N×M크기의 배열로 표현되는 미로가 있다.

// 1	0	1	1	1	1
// 1	0	1	0	1	0
// 1	0	1	0	1	1
// 1	1	1	0	1	1
// 미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다. 이러한 미로가 주어졌을 때, (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수를 구하는 프로그램을 작성하시오. 한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.

// 위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다. 칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.

// 입력
// 첫째 줄에 두 정수 N, M(2 ≤ N, M ≤ 100)이 주어진다. 다음 N개의 줄에는 M개의 정수로 미로가 주어진다. 각각의 수들은 붙어서 입력으로 주어진다.

// 출력
// 첫째 줄에 지나야 하는 최소의 칸 수를 출력한다. 항상 도착위치로 이동할 수 있는 경우만 입력으로 주어진다.

// 예제 입력 1 
// 4 6
// 101111
// 101010
// 101011
// 111011
// 예제 출력 1 
// 15
// 예제 입력 2 
// 4 6
// 110110
// 110110
// 111111
// 111101

#include <cstdio>
#include <queue>
#include <algorithm>

using namespace std;

int a[101][101];
int d[101][101];
bool check[101][101];

int dx[] = {1,0,-1,0};
int dy[] = {0,1,0,-1};//상우하좌

int n,m;

void bfs(int x, int y){
    queue<pair<int,int>> q;
    q.push(make_pair(x, y));
    check[x][y] = true;
//    d[x][y] = 1;
    while(!q.empty()){
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        for(int k=0; k<4; k++){
            int nx = x+dx[k];
            int ny = y+dy[k];
            if(0<=nx && nx<n && 0<=ny && ny<m){
                if(check[nx][ny]==false && a[nx][ny] == 1){
                    q.push(make_pair(nx, ny));
                    check[nx][ny]=true;
                    d[nx][ny] = d[x][y] + 1;
                }
            }
        }
    }
}

int main(){

    scanf("%d %d", &n, &m);
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            scanf("%1d", &a[i][j]);
        }
    }
    
    bfs(0,0);
    
    printf("%d\n", d[n-1][m-1]+1);
    
   
    return 0;
}
