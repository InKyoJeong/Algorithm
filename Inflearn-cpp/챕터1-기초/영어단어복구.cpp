// 영어단어 복구
 
// ▣ 입력예제 1
// bE au T I fu L
// ▣ 출력예제 1
// beautiful

#include <iostream>
#include <string>

using namespace std;
 
int main() {
    
    char a[101], b[101];
    gets(a);
    int p =0;
    for(int i=0; i<a[i]!='\0'; i++){
        if(a[i] != ' '){
            if(a[i] >= 65 && a[i] <= 90){
                b[p] = a[i]+32;
                p++;
            }else{
                b[p] = a[i];
                p++;
            }
        }
    }
    b[p] = '\0';
    cout<<b<<'\n';
     
    return 0;

}


//string 으로 하려면 
#include <iostream>
#include <string>

using namespace std;

int main() {

    char ch[100];
    string a, b;
    getline(cin, a);
    int p =0;
    for(int i=0; i<a.size(); i++){
        if(a[i] != ' '){
            if(a[i] >= 65 && a[i] <= 90){
                b[p++] = a[i]+32;
            }else{
                b[p++] = a[i];
            }
        }
    }
    b[p] ='\0';
    strcpy(ch, b.c_str());
    //스트링을 char로 변환해야 널을 마지막 종료로 인식하고 출력합니다.

    cout<<ch<<'\n';
    return 0;

}

