// 26. 마라톤
 
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

 
