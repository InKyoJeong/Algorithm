// 11. 숫자의 총 개수(small)
 
// ▣ 입력예제 1
// 15
// ▣ 출력예제 1
// 21

#include <iostream>
#include <string>

using namespace std;

int main(){
    int n;
    cin >> n;
    
    int cnt = 0;
    int temp;
    for(int i=1; i<=n; i++){
        temp = i;
        while(temp>0){
            temp = temp/10;
            cnt++;
        }
    }
    cout<< cnt << '\n';
    
    return 0;
}
