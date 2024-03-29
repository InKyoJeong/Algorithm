// 스킬트리
// 문제 설명
// 선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.

// 예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.

// 위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.

// 선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

// 제한 조건
// 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
// 스킬 순서와 스킬트리는 문자열로 표기합니다.
// 예를 들어, C → B → D 라면 CBD로 표기합니다
// 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
// skill_trees는 길이 1 이상 20 이하인 배열입니다.
// skill_trees의 원소는 스킬을 나타내는 문자열입니다.
// skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.
// 입출력 예
// skill	skill_trees	                        return
// "CBD"	["BACDE", "CBADF", "AECB", "BDA"]	2
// 입출력 예 설명
// BACDE: B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트립니다.
// CBADF: 가능한 스킬트리입니다.
// AECB: 가능한 스킬트리입니다.
// BDA: B 스킬을 배우기 전에 C 스킬을 먼저 배워야 합니다. 불가능한 스킬트리입니다.

//틀린풀이 bool 부분
#include <string>
#include <vector>

using namespace std;

int solution(string skill, vector<string> skill_trees) {
    int answer = 0;
    
    for(int i=0; i<skill_trees.size(); i++){    
        vector<char> temp;
        for(int j=0; j<skill_trees[i].size(); j++){   
            for(int k=0; k<skill.size(); k++){
                if(skill_trees[i][j] == skill[k]){     
                    temp.push_back(skill_trees[i][j]);
                }
            }
        }
        bool check = false;
        for(int m=0; m<temp.size(); m++){
            if(skill[m] == temp[m]){
                check = true;
             }
        }
        if(check)
            answer+=1;
    }
    return answer;
}
// 위에 안됐던이유?
// CBD  CA 인경우  skill[0] ==temp[0] 이라 true , [1] == [1] 일때는 다른데 아무것도안해서 계속 true로됨.
// 수정후 맞은풀이
// 같다고 가정하고 틀릴때 false하고 break
#include <string>
#include <vector>

using namespace std;

int solution(string skill, vector<string> skill_trees) {
    int answer = 0;
    
    for(int i=0; i<skill_trees.size(); i++){    
        vector<char> temp;
        for(int j=0; j<skill_trees[i].size(); j++){   
            for(int k=0; k<skill.size(); k++){
                if(skill_trees[i][j] == skill[k]){     
                    temp.push_back(skill_trees[i][j]);
                }
            }
        }
        bool check = true;
        for(int m=0; m<temp.size(); m++){
            if(skill[m] != temp[m]){
                check = false;
                break;
             }
        }
        if(check)
            answer+=1;
    }
    return answer;
}

