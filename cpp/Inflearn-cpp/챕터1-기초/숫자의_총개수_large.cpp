// 12. 숫자의 총 개수(large)
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
    
    int sum = 0;
    int c = 1, d = 9, res = 0;
    
    while(sum + d < n){
        res = res + (c*d);
        sum = sum + d;
        c++;
        d*=10;
    }

    
    res = res + (n - sum)*c;
    cout<<res<<'\n';
    
    return 0;
}

//    sum d c res
//     0  9*1  9
//     9  90*2 189
//     99 900*3
//     ...
//ex) 256이면  256-99 하고 나머지에 곱하기 3 하고 189더해주면됨
