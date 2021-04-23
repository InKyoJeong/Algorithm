// 10. 자릿수의 합
 
// ▣ 입력예제 1
// 5
// 125 15232 79 1325 97
// ▣ 출력예제 1
// 97

//79 97 처럼 같은경우도 처리해야함
#include <iostream>
#include <string>

using namespace std;

int digit_sum(int x){
    int sum = 0;
    while(x){
        sum += x % 10;
        x = x/10;
    }
    return sum;
}

int main() {
    int n;
    int a,b;
    int max = -2147483647;
    cin >> n;
    int ans =0;
    
    for(int i=1; i<=n; i++){
        cin >> a;
        b = digit_sum(a);
        if(b > max){
            max = b;
            ans = a;
        }else if(b == max){
            if(ans < a){
                ans = a;
            }
        }
    }
    cout << ans <<'\n';
    return 0;
}

