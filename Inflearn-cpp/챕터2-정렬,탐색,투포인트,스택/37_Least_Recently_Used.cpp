// 37. Least Recently Used(카카오 캐시 문제 변형)
// ▣ 입력예제 1
// 5 9
// 1 2 3 2 6 2 3 5 7
// ▣ 출력예제 1
// 7 5 3 2 6

#include <iostream>
#include <vector>
using namespace std;

int c[20];
int main(){
    int s,n;
    cin >> s >> n;
    vector<int> a(n);
   
    for(int i=0; i<n; i++){
        cin >> a[i];
        int pos = -1;
        for(int j=0; j<s; j++){
            if(c[j] == a[i]){
                pos = j;
            }
        }
        if(pos == -1){
            for(int j=s-1; j>=1; j--){
                c[j] = c[j-1];
            }
        }else{
            for(int j=pos; j>=1; j--){
                c[j] = c[j-1];
            }
        }
        c[0] = a[i];    // c[j]로 해도됨
    }
    for(int i=0; i<s; i++){
        cout << c[i] << ' ';
    }
    return 0;
}
