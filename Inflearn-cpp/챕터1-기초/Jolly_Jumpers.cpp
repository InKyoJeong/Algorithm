// 24. Jolly Jumpers
 
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(){
    int n;
    cin >> n;
    vector<int> a(n);
    vector<int> ch(n);
    
    int pos;
    for(int i=1; i<n; i++){
        cin >> a[i];
        int pre = a[0];
        pos = abs(pre - a[i]);
        if(pos > 0 && pos < n && ch[pos] == 0){
            ch[pos] = 1;
        }else{
            cout<< "NO" <<'\n';
            return 0;
        }
        pre = a[i];
    }
    cout << "YES" << '\n';
    
    return 0;
}

