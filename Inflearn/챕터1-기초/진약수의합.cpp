// 3. 진약수의 합
// 자연수 N이 주어지면 자연수 N의 진약수의 합을 수식과 함께 출력하는 프로그램을 작성하세
// 요.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어집니다. (3<N<=100)
// ▣ 출력설명
// 첫 줄에 더하는 수식과 함께 합을 출력합니다.
// ▣ 입력예제 1
// 20
// ▣ 출력예제 1
// 1 + 2 + 4 + 5 + 10 = 22

#include <iostream>

using namespace std;


int main() {
    
    int n;
    cin >> n;
    int sum =0;
    for(int i=1; i<=n/2; i++){
        if(n%i == 0){
            cout<< i;
            if(i != n/2)
                cout<<" + ";
            sum += i;
        }
    }
    cout<<" = "<<sum <<'\n';

    return 0;

}
