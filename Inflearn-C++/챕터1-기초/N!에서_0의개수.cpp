// N!에서 0의 개수
// 자연수 N이 입력되면 N! 값에서 일의 자리부터 연속적으로 ‘0’이 몇 개 있는지 구하는 프로그
// 램을 작성하세요.
// 만약 5! = 5 × 4 × 3 × 2 × 1 = 120으로 일의자리부터 연속적된 ‘0’의 개수는 1입니다.
// 만약 12! = 479001600으로 일의자리부터 연속적된 ‘0’의 개수는 2입니다.

#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> ch(n+1);
    int temp, j;
    for(int i=1; i<=n; i++){
        temp = i;
        j = 2;
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
    int min = ch[2];
    if(ch[5] < ch[2]){
        min = ch[5];
    }

    cout << ch[5];

    return 0;
}


// 다른풀이
 while(1)
    if(j==2)
        cnt1++;
    else if(j==5)
        cnt2++;

// 출력
if(cnt1 < cnt2)
    cout<<cnt1;
else
    cout<<cnt2;