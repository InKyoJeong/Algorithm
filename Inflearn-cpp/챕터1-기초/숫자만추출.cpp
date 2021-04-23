// 6. 숫자만 추출
// ▣ 입력예제 1
// g0en2Ts8eSoft
// ▣ 출력예제 1
// 28
// 6


#include <iostream>
#include <string>
#include <algorithm>

using namespace std;
 
int main() {
   string str;
   getline(cin, str);
    
    int res =0;
    
    for(int i=0;  i<str.size(); i++){
        if(str[i]-48 >= 0 && str[i]-48<=9){
            res = res*10 + str[i]-48;
        }
    }
    cout <<res<<'\n';
    
    int cnt = 0;
    
    for(int i=1; i<=res; i++){
        if(res % i ==0){
            cnt++;
        }
    }
    cout<<cnt<<'\n';
    
     
    return 0;

}
//     또는
//     char a[100];
//     cin>>a;
//     for(int i=0; i<a[i]!='\0'; i++)
//     //...


// 이해하기
// res = res*10 + str[i]-48; 부분