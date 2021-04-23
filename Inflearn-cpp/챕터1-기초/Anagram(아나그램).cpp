// 16. Anagram(아나그램 : 구글 인터뷰 문제)
 
// ▣ 입력예제 1
// AbaAeCe
// baeeACA
// ▣ 출력예제 1
// YES

#include <iostream>
#include <string>

using namespace std;

int a[55], b[55];

int main(){
    string str;
    getline(cin, str);
    for(int i=0; i<str.size(); i++){
        if(str[i]>=65 && str[i]<=90){
            a[str[i]-64]++;
        }else{
            a[str[i]-70]++;
        }
    }
    getline(cin, str);
    for(int i=0; i<str.size(); i++){
        if(str[i]>=65 && str[i]<=90){
            b[str[i]-64]++;
        }else{
            b[str[i]-70]++;
        }
    }
    for(int i=1; i<=52; i++){
        if(a[i]!=b[i]){
            cout<<"NO"<<'\n';
            return 0;
        }
    }
    cout<<"YES"<<'\n';
    
    return 0;
}


//배열에 아스키코드를 이용해서 대문자 1~26, 소문자 27~
//순으로 넣어서 체크
