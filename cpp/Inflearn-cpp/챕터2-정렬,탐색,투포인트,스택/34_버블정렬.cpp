// 34. 버블정렬
// 입력예제 1
// 6
// 13 23 11 7 5 15

#include <iostream>
#include <vector>  

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
            if(a[j] > a[j+1]){
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
