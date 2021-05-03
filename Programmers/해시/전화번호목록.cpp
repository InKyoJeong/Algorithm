// (시간초과)
// #include <string>
// #include <vector>

// using namespace std;

// bool solution(vector<string> phone_book) {
//     bool answer = true;
//     int pSize = phone_book.size();
    
//     for(int i=0; i<pSize; i++){
//         int size = phone_book[i].size();
//         string compare = phone_book[i].substr(0,size); 
//         for(int j=0; j<pSize; j++){
//             if(i!=j){
//               if(compare == phone_book[j].substr(0,size)){
//                  return false;
//               }   
//             } 
//         }
//     }
//     return answer;
// }


#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool solution(vector<string> phone_book) {
    bool answer = true;
    int n = phone_book.size()-1;
    sort(phone_book.begin(), phone_book.end());
    
   
    for(int i=0; i<n; i++){
        int size = phone_book[i].size();
        if(phone_book[i] == phone_book[i+1].substr(0,size)){
            return false;
        }
    }
    return answer;
}