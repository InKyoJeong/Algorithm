// 최대공약수와 최소공배수 성공출처 Silver V
// 유클리드 호제법수학정수론
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	26638	16299	13401	64.064%
// 문제
// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.

// 출력
// 첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

// 예제 입력 1 
// 24 18
// 예제 출력 1 
// 6
// 72

#include <iostream>

using namespace std;

int gcd(int a, int b){
    if(b == 0)
        return a;
    else{
        return gcd(b, a%b);
    }
}

int main(){
   
    int x, y;
    cin>>x>>y;
    
    cout<< gcd(x, y) << '\n';
    cout<< x*y / gcd(x,y) <<'\n';
    return 0;
}
