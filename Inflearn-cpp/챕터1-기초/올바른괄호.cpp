// 올바른 괄호
 
// ▣ 입력예제 1
// (()(()))(()
// ▣ 출력예제 1
// NO
// ▣ 입력예제 2
// ()()(()())

// 스택안쓰고 풀어보기

#include <iostream>
#include <string>

using namespace std;
 
int main() {
    
    string str;
    cin>>str;
    
    int cnt = 0;
    for(int i=0; i<str.size(); i++){
        if(str[i] == '('){
            cnt ++;
        }else{
            cnt --;
        }
        if(cnt <0){
            break;
        }
    }
    if(cnt ==0){
        cout<<"YES"<<'\n';
    }else{
        cout<<"NO"<<'\n';
    }
     
    return 0;

}

    
