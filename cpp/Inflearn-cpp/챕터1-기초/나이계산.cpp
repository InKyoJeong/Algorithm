// 5. 나이계산
 
// ▣ 입력예제 1
// 780316-2376152
// ▣ 출력예제 1
// 42 W
// ▣ 입력예제 2
// 061102-3575393
// ▣ 출력예제 2
// 14 M


#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

char a[20];
int main() {
    cin>>a;
    int age = 0;
    int year = 0;
    
    if(a[7] == '1' || a[7] == '2'){
        year = 1900 + (a[0]-48)*10 + (a[1]-48);
    }else{
        year = 2000 + (a[0]-48)*10 + (a[1]-48);
    }
    
    age = 2019 - year +1;
    cout<<age;
    
    if(a[7] == '1' || a[7] == '3'){
        cout<<" M"<<'\n';
    }else{
        cout<<" W"<<'\n';
    }
     
    return 0;

}
