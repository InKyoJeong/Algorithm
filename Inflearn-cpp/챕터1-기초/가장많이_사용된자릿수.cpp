// 13. 가장 많이 사용된 자릿수
 
// ▣ 입력예제 1
// 1230565625
// ▣ 출력예제 1
// 5

#include <iostream>
#include <string>

using namespace std;
int a[10];
int main(){
    string x;
    getline(cin, x);
    for(int i=0; i<x.size(); i++){
        a[x[i]-48]++;
    }
    int max = a[0];
    int maxIdx = 0;
    for(int i=1; i<10; i++){
        if(a[i] >= max){
            max = a[i];
            maxIdx = i;
        }
    }
    cout<<maxIdx<<'\n';
    
    return 0;
}
// 큰 숫자가 답이되게 하려면 if(a[i] >= max) 이부분에서 > 아니라 >=


// c로 할때풀이
//char a[101];
//scanf("%s", a);
//for(int i=0; a[i]!='\0'; i++){
//    //...
//}
