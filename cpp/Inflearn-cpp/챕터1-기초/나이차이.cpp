// 4. 나이 차이
 
// ▣ 입력예제 1
// 10
// 13 15 34 23 45 65 33 11 26 42
// ▣ 출력예제 1
// 54

#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    
    int n,a;
    int max = -2147483647;
    int min = 2147483647;
    
    cin >> n;
    
    for(int i=1; i<=n; i++){
        cin>>a;
        if(a > max)
            max = a;
        if(a < min)
            min = a;
    }
    cout<<max-min<<'\n';

    return 0;

}
