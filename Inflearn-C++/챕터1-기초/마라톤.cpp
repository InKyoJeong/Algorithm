// 26. 마라톤
 
// 각 선수의 평소 실력은 정수로 주어지는데 더 큰 값이 더 좋은 실력을 의미한다. 현재 달리고
// 있는 선수를 앞에서 부터 표시했을 때 평소 실력이 각각 2, 8, 10, 7, 1, 9, 4, 15라고 하면
// 각 선수가 얻을 수 있는 최선의 등수는 (같은 순서로) 각각 1, 1, 1, 3, 5, 2, 5, 1이 된다.

#include <iostream>
#include <vector>

using namespace std;

int main(){
    int n;
    cin >> n;
    
    vector<int> a(n+1);
    vector<int> g(n+1);
    
    for(int i=1; i<=n; i++){
        cin >> a[i];
        g[i] = 1;
    }
    
    for(int i=1; i<=n; i++){
        for(int j=1; j<i; j++){
            if(a[i]<a[j]){
                g[i]++;
            }
        }
        cout << g[i] <<' ';
    }
    return 0;
}

 
