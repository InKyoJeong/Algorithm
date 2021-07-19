// 35. Special Sort(구글 인터뷰)
 
// ▣ 입력예제 1
// 8
// 1 2 3 -3 -2 5 6 -6
// ▣ 출력예제 1
// -3 -2 -6 1 2 3 5 6

#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int a[100];
    int temp;
    for(int i=0; i<n; i++) {
        cin >> a[i];
    }
    
    for(int i=0; i<n; i++){
        for(int j=0; j<n-i-1; j++){
            if(a[j]>0 && a[j+1]<0){
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    
    for(int i=0; i<n; i++){
        cout << a[i] <<" ";
    }
    
    return 0;
}
