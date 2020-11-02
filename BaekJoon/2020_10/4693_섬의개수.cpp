// 섬의 개수 성공출처다국어분류 Silver IIsolved.ac 표준
// 너비 우선 탐색깊이 우선 탐색그래프 이론그래프 탐색
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	24391	12288	8861	49.745%
// 문제
// 정사각형으로 이루어져 있는 섬과 바다 지도가 주어진다. 섬의 개수를 세는 프로그램을 작성하시오.

// 한 정사각형과 가로, 세로 또는 대각선으로 연결되어 있는 사각형은 걸어갈 수 있는 사각형이다. 

// 두 정사각형이 같은 섬에 있으려면, 한 정사각형에서 다른 정사각형으로 걸어서 갈 수 있는 경로가 있어야 한다. 지도는 바다로 둘러싸여 있으며, 지도 밖으로 나갈 수 없다.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스의 첫째 줄에는 지도의 너비 w와 높이 h가 주어진다. w와 h는 50보다 작거나 같은 양의 정수이다.

// 둘째 줄부터 h개 줄에는 지도가 주어진다. 1은 땅, 0은 바다이다.

// 입력의 마지막 줄에는 0이 두 개 주어진다.

// 출력
// 각 테스트 케이스에 대해서, 섬의 개수를 출력한다.

// 예제 입력 1 
// 1 1
// 0
// 2 2
// 0 1
// 1 0
// 3 2
// 1 1 1
// 1 1 1
// 5 4
// 1 0 1 0 0
// 1 0 0 0 0
// 1 0 1 0 1
// 1 0 0 1 0
// 5 4
// 1 1 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 1 1
// 5 5
// 1 0 1 0 1
// 0 0 0 0 0
// 1 0 1 0 1
// 0 0 0 0 0
// 1 0 1 0 1
// 0 0
// 예제 출력 1 
// 0
// 1
// 1
// 3
// 1
// 9

#include <cstdio>
#include <algorithm>
#include <vector>
#include <queue>

using namespace std;

int a[50][50];
int group[50][50];
int dx[] = {1,1,1,0,-1,-1,-1,0}; //상우하좌 돌리기
int dy[] = {-1,0,1,1,1,0,-1,-1};

int w,h;     // 너비w, 높이h

void bfs(int x, int y, int count){
    queue<pair<int, int>> q;
    q.push(make_pair(x, y));
    group[x][y] = count;
    while(!q.empty()){
        x = q.front().first;
        y = q.front().second;
        q.pop();
        for(int k=0; k<8; k++){
            int nx = x + dx[k];
            int ny = y + dy[k];
            if(0<=nx && nx<h && 0<=ny && ny<w){
                if(a[nx][ny] == 1 && group[nx][ny] == 0){
                    q.push(make_pair(nx, ny));
                    group[nx][ny] = count;
                }
            }
        }
    }
}

int main(){
    
    while(true){
        scanf("%d %d", &w, &h);
        
        if(w ==0 && h==0)
            break;
        
        for(int i=0; i<h; i++){
            for(int j=0; j<w; j++){
                scanf("%1d", &a[i][j]);
                group[i][j] = 0;
            }
        }
        
        int cnt = 0;
        for(int i=0; i<h; i++){
            for(int j=0; j<w; j++){
                if(a[i][j] == 1 && group[i][j] == 0){
                    bfs(i, j, ++cnt);
                }
            }
        }
        printf("%d\n", cnt);
    }
    return 0;
}
