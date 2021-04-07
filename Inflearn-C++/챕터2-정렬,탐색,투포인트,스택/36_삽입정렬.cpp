// 36. 삽입정렬
// ▣ 입력예제 1
// 6
// 11 7 5 6 10 9
// ▣ 출력예제 1
// 5 6 7 9 10 11

#include <iostream>  
using namespace std;

int main()
{ 
    int n;
    cin >> n;
    int a[100];
    int i, j, temp;
    for(int i=0; i<n; i++) {
        cin >> a[i];
    }
    
    for(i=1; i<n; i++){
        temp = a[i];
        for(j=i-1; j>=0; j--){
            if(a[j] > temp){
                a[j+1] = a[j];
            }else{
                break;
            }
           
        }
        a[j+1] = temp;
    }
    
    for(i=0; i<n; i++){
        cout << a[i] <<" ";
    }
    
    return 0;
}
