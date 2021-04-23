// 3. 진약수의 합
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
