// 17. 선생님 퀴즈
// ▣ 입력예제 1
// 3
// 10 55
// 20 350
// 100 5050
// ▣ 출력예제 1
// YES
// NO
// YES

#include <iostream>
#include <string>

using namespace std;
 
int main(){
    int n;
    cin >> n;
    
    int card, answer, sum =0;
    for(int i=1; i<=n; i++){
        cin >> card >> answer;
        for(int j=1; j<=card; j++){
            sum += j;
        }
        if(sum == answer){
            cout<<"YES"<<'\n';
        }else{
            cout<<"NO"<<'\n';
        }
    }
    return 0;
}
 
