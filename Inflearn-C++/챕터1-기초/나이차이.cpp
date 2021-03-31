// 4. 나이 차이
// N(2<=N<=100)명의 나이가 입력됩니다. 이 N명의 사람 중 가장 나이차이가 많이 나는 경우는
// 몇 살일까요? 최대 나이 차이를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 자연수 N(2<=N<=100)이 입력되고, 그 다음 줄에 N개의 나이가 입력된다.
// ▣ 출력설명
// 첫 줄에 최대 나이차이를 출력합니다.
// ▣ 입력예제 1
// 10
// 13 15 34 23 45 65 33 11 26 42
// ▣ 출력예제 1
// 54

#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    
    int n,a;
    int max = -2147483647;
    int min = 2147483647;
    
    cin >> n;
    
    for(int i=1; i<=n; i++){
        cin>>a;
        if(a > max)
            max = a;
        if(a < min)
            min = a;
    }
    cout<<max-min<<'\n';

    return 0;

}
