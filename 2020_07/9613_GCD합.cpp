// GCD 합 성공출처다국어 Silver III
// 유클리드 호제법수학정수론
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	14891	5168	4165	36.586%
// 문제
// 양의 정수 n개가 주어졌을 때, 가능한 모든 쌍의 GCD의 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수 t (1 ≤ t ≤ 100)이 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있다. 
// 각 테스트 케이스는 수의 개수 n (1 < n ≤ 100)가 주어지고, 다음에는 n개의 수가 주어진다. 입력으로 주어지는 수는 1,000,000을 넘지 않는다.

// 출력
// 각 테스트 케이스마다 가능한 모든 쌍의 GCD의 합을 출력한다.

// 예제 입력 1 
// 3
// 4 10 20 30 40
// 3 7 5 12
// 3 125 15 25
// 예제 출력 1 
// 70
// 3
// 35

#include <iostream>

using namespace std;

int a[100];

int gcd(int a, int b)
{
    if(b == 0)
        return a;
    else
        return gcd(b, a%b);
}

int main()
{
    int T;
    cin>>T;
    while(T--){
        int n;
        cin>>n;
        for(int i=0; i<n; i++){
            cin>>a[i];
        }
        
        long long sum = 0;
        
        for(int i=0; i<n; i++){
            for(int j=i+1; j<n; j++){
                sum += gcd(a[i], a[j]);
            }
        }
        cout<<sum<<'\n';
    }
    
    return 0;
}


//유클리드 호제법으로 풀수 있던 문제.
// long long sum = 0;  이부분을 
// int sum = 0; 이라고 제출해서 틀렸었다.

// 두 수의 최대 공약수의 최댓값은 1000000이고, 수의 최대 개수는 100개다. 
// 쌍의 최대 개수는 약 100*100개라고 볼 수 있다. 정답의 최댓값은 100*100*1000000 인데, 
// 이 값은 int 범위를 넘어간다. 따라서, sum을 long long으로 선언해야 한다.
