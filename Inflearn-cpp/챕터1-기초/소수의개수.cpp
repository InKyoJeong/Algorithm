// 15. 소수의 개수
 
// ▣ 입력예제 1
// 20
// ▣ 출력예제 1
// 8

#include <iostream>
#include <string>

using namespace std;

int cnt = 0;

bool isPrime(int n){
    if(n<2){
        return false;
    }
    for(int i=2; i*i<=n; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

int main() {
    int n;
    cin >> n;
    for(int i=1; i<=n; i++){
        if(isPrime(i)){
            cnt++;
        }
    }
    cout<<cnt<<'\n';
   
    return 0;
}
