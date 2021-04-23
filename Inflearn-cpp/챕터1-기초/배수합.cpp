// 1부터 N까지 M의 배수합
// ▣ 입력예제 1
// 15 3
// ▣ 출력예제 1
// 45

#include <iostream>

using namespace std;

int main(){
    int n, m;
    cin >> n >> m;

    int sum = 0;
    for(int i=m; i<=n; i+=m){
        sum += i;
    }
    cout << sum << '\n';

    return 0;
}


// 나눠서구하기
int main() {
    int n, m;
    cin >> n >> m;

    int sum = 0;
    for(int i=1; i<=n; i++){
        if(i%m == 0){
            sum = sum + i; 
        }
    }
    cout << sum << '\n';

    return 0;
}