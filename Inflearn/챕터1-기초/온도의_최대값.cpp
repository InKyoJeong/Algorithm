// 온도의 최대값
// 매일 아침 9시에 학교에서 측정한 온도가 어떤 정수의 수열로 주어졌을 때, 연속적인 며칠
// 동안의 온도의 합이 가장 큰 값을 알아보고자 한다.
// 예를 들어, 다음과 같이 10일 간의 온도가 주어졌을 때, 3 -2 -4 -9 0 3 7 13 8 -3 모든
// 연속적인 이틀간의 온도의 합은 다음과 같다.
// 이때, 온도의 합이 가장 큰 값은 21이다.


#include <iostream>
#include <vector>

using namespace std;
 
int main(){
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for(int i=0; i<n; i++){
        cin >> a[i];
    }
    int sum = 0;
    int max;
    
    for(int i=0; i<k; i++){
        sum += a[i];
    }
    max = sum;
    
    for(int i=k; i<n; i++){
        sum = sum + (a[i] - a[i-k]);
        if(sum > max){
            max = sum;
        }
    }
    
    cout << max <<'\n';
    
    return 0;
}
