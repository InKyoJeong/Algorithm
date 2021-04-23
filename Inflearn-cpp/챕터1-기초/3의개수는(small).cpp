// 29. 3의 개수는?(small)
 

#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;
    int cnt = 0;
    int temp;
    for(int i=1; i<=n; i++){
        temp=i;
        while(temp){
            if(temp%10 == 3){
                cnt++;
            }
            temp = temp/10;
        }
    }
    
    cout << cnt <<'\n';

    return 0;
}

// temp에 i를 넣어야함