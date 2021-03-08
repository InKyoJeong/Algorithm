// 10. 자릿수의 합
// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
// 하는 프로그램을 작성하세요. 각 자연수의 자릿수의 합을 구하는 함수를 int digit_sum(int x)를
// 꼭 작성해서 프로그래밍 하세요.
// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
// 각 자연수의 크기는 10,000,000를 넘지 않는다.
// ▣ 출력설명
// 자릿수의 합이 최대인 자연수를 출력한다. 자리수의 합이 최대인 자연수가 여러개인 경우 그
// 중 값이 가장 큰 값을 출력합니다.
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

