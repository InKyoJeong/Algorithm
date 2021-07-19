// 33. 3등의 성적은?

#include <iostream>
#include <vector>

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
            if(a[j] > a[index]){
                index = j;
            }
        }
        
        temp = a[i];
        a[i] = a[index];
        a[index] = temp;
    }
    
    int cnt = 0;
    
    for(int i=1; i<n; i++){
        if(a[i-1] != a[i]){
            cnt++;
        }
        if(cnt ==2){
            cout << a[i]<<'\n';
            break;
        }
    }
     
    return 0;
}
