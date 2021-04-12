// 석차 구하기
// N명의 학생의 수학점수가 입력되면 각 학생의 석차를 입력된 순서대로 출력하는 프로그램을
// 작성하세요.

#include <iostream>
#include <vector>

using namespace std;

int main(){
    int n;
    cin >> n;
    
    vector<int> a(n);
    vector<int> g(n);
    
    for(int i=1; i<=n; i++){
        cin >> a[i];
        g[i] = 1;
    }
    
    for(int i=1; i<=n; i++){
        for(int j=1; j<=n; j++){
            if(a[i] < a[j]){
                g[i]++;
            }
        }
    }
    
    for(int i=1; i<=n; i++){
        cout << g[i] <<' ';
    }
    
    return 0;
}

