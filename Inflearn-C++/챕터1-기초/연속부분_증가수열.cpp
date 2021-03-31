// 23. 연속 부분 증가수열
// N개의 숫자가 나열된 수열이 주어집니다. 이 수열 중 연속적으로 증가하는 부분 수열을 최대
// 길이

#include <iostream>
#include <vector>

using namespace std;
 
int main(){
    int n;
    cin >> n;
    vector<int> a(n);
    int cnt = 1;
    int max = 0;
    
    cin >> a[1];
    int pre = a[1];
    
    for(int i=2; i<=n; i++){
        cin >> a[i];
        if(a[i] >= pre){
            cnt++;
            if(max < cnt){
                max = cnt;
            }
        }else{
            cnt = 1;
        }
        pre = a[i];
    }
    
    cout<< max <<'\n';
    return 0;
}
