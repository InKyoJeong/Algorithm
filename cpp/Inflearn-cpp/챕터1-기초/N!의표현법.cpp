// 27. N!의 표현법
 
// ▣ 입력예제 1
// 5
// ▣ 출력예제 1
// 5! = 3 1 1

#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> ch(n+1);

    int temp,j;
    for(int i=2; i<=n; i++){
        temp = i;
        j=2;
        while(1){
            if(temp % j == 0){
                temp = temp/j;
                ch[j]++;
            }else{
                j++;
            }
            if(temp == 1)
                break;
        }
    }
    cout << n<<"! = ";
    for(int i=2; i<=n; i++){
        if(ch[i] != 0){
            cout << ch[i] <<' ';
        }
    }
    return 0;
}
