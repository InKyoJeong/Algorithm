// ▣ 입력설명
// ▣ 입력예제 1
// 10
// 56 46 55 76 65 53 52 53 55 50
// ▣ 출력예제 1
// 3

#include <iostream>

using namespace std;
int a[101];

int main(){
    int n;
    cin >> n;
    int cnt = 0;
    for(int i=1; i<=n; i++){
        cin >> a[i];
    }
    
    int max = a[n];
    
    for(int i=n-1; i>=1; i--){
       
        if(a[i] > max){
            max = a[i];
            cnt++;
        }
    }
    
    cout << cnt << '\n';
    return 0;
}
