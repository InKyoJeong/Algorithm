// 32. 선택정렬
 

#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;
    int a[100];
    int index, temp;
    
    for(int i=0; i<n; i++){
           cin >> a[i];
    }
    
    for(int i=0; i<n-1; i++){
        index = i;
        for(int j=i+1; j<n; j++){
            if(a[j] < a[index]){
                index = j;
            }
        }
        
        temp = a[i];
        a[i] = a[index];
        a[index] = temp;
    }
    for(int i=0; i<n; i++){
        cout << a[i] <<' ';
    }
    return 0;
}
