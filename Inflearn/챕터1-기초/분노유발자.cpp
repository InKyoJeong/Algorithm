// ▣ 입력설명
// 첫 줄에 한 줄에 앉은 학생수 N(3<=N<=100)이 주어집니다.
// 두 번째 줄에 N명의 앉은 키 정보(45이상 100이하)가 앞 자리 학생부터 차례대로 주어집니다.
// ▣ 출력설명
// 자신의 뒷 사람 모두를 시청방해하는 학생수를 출력합니다.
// ▣ 입력예제 1
// 10
// 56 46 55 76 65 53 52 53 55 50
// ▣ 출력예제 1
// 3

#include <iostream>

using namespace std;
int a[101];

int main(){
    int n;
    cin >> n;
    int cnt = 0;
    for(int i=1; i<=n; i++){
        cin >> a[i];
    }
    
    int max = a[n];
    
    for(int i=n-1; i>=1; i--){
       
        if(a[i] > max){
            max = a[i];
            cnt++;
        }
    }
    
    cout << cnt << '\n';
    return 0;
}
