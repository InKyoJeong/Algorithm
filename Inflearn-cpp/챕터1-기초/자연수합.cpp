// 2. 자연수의 합
 
// ▣ 입력예제 1
// 3 7
// ▣ 출력예제 1
// 3 +4 +5 +6 +7 = 25

#include <iostream>

using namespace std;


int main() {
    int a,b;
    cin >> a >> b;
    int sum = 0;
    for(int i=a; i<=b; i++){
        sum += i;
    }
    cout<<sum<<'\n';

    return 0;

}
