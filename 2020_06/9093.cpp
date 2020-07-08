// 단어 뒤집기 성공출처다국어 Bronze I
// 문자열
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	6340	3117	2408	50.514%
// 문제
// 문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 문장이 하나 주어진다. 단어의 길이는 최대 20, 문장의 길이는 최대 1000이다. 단어와 단어 사이에는 공백이 하나 있다.

// 출력
// 각 테스트 케이스에 대해서, 입력으로 주어진 문장의 단어를 모두 뒤집어 출력한다.

// 예제 입력 1 
// 2
// I am happy today
// We want to win the first prize
// 예제 출력 1 
// I ma yppah yadot
// eW tnaw ot niw eht tsrif ezirp

#include <iostream>
#include <string>
#include <stack>

using namespace std;

int main()
{
    int T;
    cin>>T;
    cin.ignore();
    while(T--)
    {
        string str;
        getline(cin, str);
        str += '\n';

        stack<char> s;
        for(int i=0; i<str.length(); i++){
            if(str[i] == '\n' || str[i] == ' ')
            {
                while(!s.empty())
                {
                    cout<<s.top();
                    s.pop();
                }
                cout<<str[i];
            }else{
                s.push(str[i]);
            }
        }
    }
    return 0;
}


//range-based for
#include <iostream>
#include <string>
#include <stack>

using namespace std;

int main()
{
    int T;
    cin>>T;
    cin.ignore();
    while(T--)
    {
        string str;
        getline(cin, str);
        str += '\n';

        stack<char> s;
        for(char ch : str){
            if(ch == '\n' || ch == ' ')
            {
                while(!s.empty())
                {
                    cout<<s.top();
                    s.pop();
                }
                cout<<ch;
            }else{
                s.push(ch);
            }
        }
    }
    return 0;
}
