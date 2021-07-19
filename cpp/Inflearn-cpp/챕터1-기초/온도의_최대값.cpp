// 온도의 최대값
 


#include <iostream>
#include <vector>

using namespace std;
 
int main(){
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for(int i=0; i<n; i++){
        cin >> a[i];
    }
    int sum = 0;
    int max;
    
    for(int i=0; i<k; i++){
        sum += a[i];
    }
    max = sum;
    
    for(int i=k; i<n; i++){
        sum = sum + (a[i] - a[i-k]);
        if(sum > max){
            max = sum;
        }
    }
    
    cout << max <<'\n';
    
    return 0;
}
