
// 가장 큰 수
// 문제 설명
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
// 입출력 예
// numbers	return
// [6, 10, 2]	6210
// [3, 30, 34, 5, 9]


#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool comp(const string &a, const string &b){
    if(a+b > b+a){
        return true;
    }
    return false;
}

string solution(vector<int> numbers) {
    string answer = "";
    vector<string> v;
    for(int i=0; i<numbers.size(); i++){
        v.push_back(to_string(numbers[i]));
    }
    
    sort(v.begin(), v.end(), comp);
    
    for(int i=0; i<v.size(); i++){
        answer+= v[i];
    }
    
    if(answer[0] == '0'){
        return "0";
    }
        
    return answer;
}

// string을 그냥 비교하게되면 원하는대로 정렬이 되지 않음
// 비교함수를 커스텀해야함!!

// 방법은 두개를 더했을때 큰수가 앞에나오도록 해야함

// 예를 들어서 6하고 10이 있으면
// 6+10인 610과 10+6인 106이 있다. 더한 값을 비교

// 커스텀한 함수를 이용하여 정렬이 끝났다면 예외처리 -> 만약 0만 여러개라면 0하나만 리턴해야함