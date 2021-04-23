// 14. 뒤집은 소수
// ▣ 입력예제 1
// 5
// 32 55 62 3700 250
// ▣ 출력예제 1
// 23 73

#include <iostream>
#include <string>

using namespace std;


int temp;

int a[101];

int reverse(int x){
    int res=0;
    while(x){
        temp = x%10;
        res = res*10 + temp;
        x = x/10;
    }
    return res;
}

bool isPrime(int n){
    if(n < 2)
        return false;
    for(int i=2; i*i<n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

int main(){
    int n;
    int x=0;
    cin >> n;
    
    for(int i=0; i<n; i++){
        cin >> a[i];
        x = reverse(a[i]);
        if(isPrime(x)){
            cout << x << ' ';
        }
    }
    return 0;
}
