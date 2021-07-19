// 9. 모두의 약수
// ▣ 입력예제 1
// 8
// ▣ 출력예제 1
// 1 2 2 3 2 4 2 4

// n^2 이므로 n이 3만정도면 1초이상 안나옴.
#include <iostream>
#include <string>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    for(int i=1; i<=n; i++){
        int count = 0;
        for(int j=1; j<=i; j++){
            if(i % j == 0){
                count ++;
            }
        }
        cout << count <<' ';
    }
    return 0;
}

// 시간복잡도 개선
#include <iostream>
#include <string>

using namespace std;

int a[50001];

int main() {
    int n;
    cin >> n;
    
    for(int i=1; i<=n; i++){
        for(int j=i; j<=n; j=j+i){
            a[j]++;
        }
    }
    for(int i=1; i<=n; i++){
        cout<< a[i] <<" ";
    }

    return 0;

}


// 아래같은 코드의 경우 T(n)=n*logn 이고 Big-O 표기법으로는 O(nlogn)이므로
// 위의 답은 nlogn 에 가까울것이다
for(i=1; i<=n; i++){   //n회 반복
    for(j=1; j<=n; j=j*2){   //log n(밑은 2) 반복
            연산;
    }
}



