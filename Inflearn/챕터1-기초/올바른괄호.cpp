// 올바른 괄호
// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
// ▣ 입력설명
// 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.
// ▣ 출력설명
// 첫 번째 줄에 YES, NO를 출력한다.
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

    
