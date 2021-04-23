// 23. 연속 부분 증가수열

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
