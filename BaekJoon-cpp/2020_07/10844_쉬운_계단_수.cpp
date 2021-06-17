// 쉬운 계단 수 성공분류 Silver I
// 다이나믹 프로그래밍
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	60274	18122	13052	28.301%
// 문제
// 45656이란 수를 보자.

// 이 수는 인접한 모든 자리수의 차이가 1이 난다. 이런 수를 계단 수라고 한다.

// 세준이는 수의 길이가 N인 계단 수가 몇 개 있는지 궁금해졌다.

// N이 주어질 때, 길이가 N인 계단 수가 총 몇 개 있는지 구하는 프로그램을 작성하시오. (0으로 시작하는 수는 없다.)

// 입력
// 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 100보다 작거나 같은 자연수이다.

// 출력
// 첫째 줄에 정답을 1,000,000,000으로 나눈 나머지를 출력한다.

// 예제 입력 1 
// 1
// 예제 출력 1 
// 9
// 예제 입력 2 
// 2
// 예제 출력 2 
// 17

//내풀이
#include <iostream>
using namespace std;
const long long mod = 1000000000LL;
long long d[101][10];

int main()
{
    for(int i=1; i<10; i++){
        d[1][i] = 1;
    }

    for(int i=2; i<101; i++){
        for(int j=0; j<=9; j++){
            if(j==0){
                d[i][j] = (d[i-1][j+1])%mod;
            }else if(j==9){
                d[i][j] = (d[i-1][j-1])%mod;
            }else{
                d[i][j] = (d[i-1][j-1] + d[i-1][j+1])%mod;
            }   
        }
    }
    
    int n;
    cin>>n;
    long long sum=0;
    
     for(int i=0; i<10; i++){
         sum+=d[n][i];
     }
    cout<<sum%mod<<'\n';
    return 0;
}

// 생각
// d[i][j]  :  끝이 j일경우 길이i의 계단수 개수
// d[i][j] = d[i-1][j-1] + d[i-1][j+1]

// 예외 :
// 끝이 0인경우는 j+1밖에안됨.
// 끝이 9인경우는 j-1밖에안됨.
//------------------------------
// 이렇게 바꿔도됨
// int main()
// {
//     for(int i=1; i<10; i++){
//         d[1][i] = 1;
//     }
// int n;
// cin>>n;
// for(int i=2; i<=n; i++){...}
// ...



//다른풀이
#include <iostream>
using namespace std;
long long d[101][10];
long long mod = 1000000000;

int main() {
   int n;
   cin >> n;
   for (int i=1; i<=9; i++) {
       d[1][i] = 1;
   }

   for (int i=2; i<=n; i++) {
       for (int j=0; j<=9; j++) {
           d[i][j] = 0;
           if (j-1 >= 0) {
               d[i][j] += d[i-1][j-1];
           }
           if (j+1 <= 9) {
               d[i][j] += d[i-1][j+1];
           }

       }
   }
   long long ans = 0;
   for (int i=0; i<=9; i++) {
       ans += d[n][i];
   }
   ans %= mod;
   cout << ans << '\n';
   return 0;
}
