// 35. Special Sort(구글 인터뷰)
// N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
// 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는
// 변함이 없어야 한다.
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
