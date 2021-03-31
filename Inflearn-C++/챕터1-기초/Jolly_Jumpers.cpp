// 24. Jolly Jumpers
// N개의 정수로 이루어진 수열에 대해 서로 인접해 있는 두 수의 차가 1에서 N-1까지의 값을
// 모두 가지면 그 수열을 유쾌한 점퍼(jolly jumper)라고 부른다. 예를 들어 다음과 같은 수열에
// 서 1 4 2 3 앞 뒤에 있는 숫자 차의 절대 값이 각각 3 ,2, 1이므로 이 수열은 유쾌한 점퍼가
// 된다. 어떤 수열이 유쾌한 점퍼인지 판단할 수 있는 프로그램을 작성하라.

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(){
    int n;
    cin >> n;
    vector<int> a(n);
    vector<int> ch(n);
    
    int pos;
    for(int i=1; i<n; i++){
        cin >> a[i];
        int pre = a[0];
        pos = abs(pre - a[i]);
        if(pos > 0 && pos < n && ch[pos] == 0){
            ch[pos] = 1;
        }else{
            cout<< "NO" <<'\n';
            return 0;
        }
        pre = a[i];
    }
    cout << "YES" << '\n';
    
    return 0;
}

