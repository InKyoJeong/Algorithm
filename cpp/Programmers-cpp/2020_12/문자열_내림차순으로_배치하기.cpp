// 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// Zbcdefg	gfedcbZ

#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool cmp(int x, int y){
    return x>y;
}

string solution(string s) {
    string answer = "";
    vector<char> a;
    for(int i=0; i<s.length(); i++){
        a.push_back(s[i]);
    }
    
    sort(a.begin(), a.end(), cmp);
    
    for(int i=0; i<a.size(); i++){
        answer.push_back(a[i]);
    }
    
    return answer;
}

// string 도 sort가 됨,
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool cmp(int x, int y){
    return x>y;
}

string solution(string s) {
    string answer = "";
   
    sort(s.begin(), s.end(), cmp);
    
    for(int i=0; i<s.size(); i++){
        answer.push_back(s[i]);
    }
    
    return answer;
}