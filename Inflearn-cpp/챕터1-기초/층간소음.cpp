// 18. 층간소음
 
// ▣ 입력예제 1
// 10 90
// 23 17 120 34 112 136 123 23 25 113
// ▣ 출력예제 1
// 3

#include <iostream>
#include <string>

using namespace std;

int a[101];
int main(){
    
    int n,m;
    int max = -2147483647;
    cin >> n >> m;
    
    int cnt = 0;
    
    for(int i=0; i<n; i++){
        cin >> a[i];
        if(a[i] > m){
            cnt++;
        }else{
            cnt = 0;
        }
        if(cnt > max){
            max = cnt;
        }
    }
    if(max == 0){
        cout <<"-1"<<'\n';
    }else{
        cout << max <<'\n';
    }
    
    return 0;
}
 
