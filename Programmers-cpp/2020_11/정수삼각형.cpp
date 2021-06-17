// 문제 설명
// 스크린샷 2018-09-14 오후 5.44.19.png

// 위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾아보려고 합니다. 아래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능합니다. 예를 들어 3에서는 그 아래칸의 8 또는 1로만 이동이 가능합니다.

// 삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 거쳐간 숫자의 최댓값을 return 하도록 solution 함수를 완성하세요.

// 제한사항
// 삼각형의 높이는 1 이상 500 이하입니다.
// 삼각형을 이루고 있는 숫자는 0 이상 9,999 이하의 정수입니다.
// 입출력 예
// triangle	result
// [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]	30

#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int d[501][501];

int solution(vector<vector<int>> triangle) {
    int answer = 0;
    
    d[0][0] = triangle[0][0];

    //i는 높이, j는 몇번째인가
 
    for(int i=1; i<triangle.size(); i++){
        d[i][0] = triangle[i][0]+d[i-1][0];
        for(int j=1; j<=i; j++){
            d[i][j] = max(triangle[i][j] + d[i-1][j-1], triangle[i][j] + d[i-1][j]);
        }
    }
    
    answer = d[triangle.size()-1][0];
    
    for(int i=1; i<=triangle.size(); i++){
        if(answer < d[triangle.size()-1][i]){
        answer = d[triangle.size()-1][i];
        }
    }
    
    return answer;
}