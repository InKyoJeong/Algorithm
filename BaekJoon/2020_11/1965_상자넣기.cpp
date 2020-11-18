//상자넣기 성공분류 Silver II
//다이나믹 프로그래밍
//난이도 제공: solved.ac — 난이도 투표하러 가기
//시간 제한    메모리 제한    제출    정답    맞은 사람    정답 비율
//2 초    128 MB    11585    5441    4416    47.756%
//문제
//정육면체 모양의 상자가 일렬로 늘어서 있다. 상자마다 크기가 주어져 있는데, 앞에 있는 상자의 크기가 뒤에 있는 상자의 크기보다 작으면, 앞에 있는 상자를 뒤에 있는 상자 안에 넣을 수가 있다. 예를 들어 앞에서부터 순서대로 크기가 (1, 5, 2, 3, 7)인 5개의 상자가 있다면, 크기 1인 상자를 크기 5인 상자에 넣고, 다시 이 상자를 크기 7인 상자 안에 넣을 수 있다. 하지만 이렇게 상자를 넣을 수 있는 방법은 여러 가지가 있을 수 있다. 앞의 예에서 차례대로 크기가 1, 2, 3, 7인 상자를 선택하면 총 4개의 상자가 한 개의 상자에 들어가게 된다.
//
//상자의 크기가 주어질 때, 한 번에 넣을 수 있는 최대의 상자 개수를 출력하는 프로그램을 작성하시오.
//
//입력
//파일의 첫 번째 줄은 상자의 개수 n (1 ≤ n ≤ 1000)을 나타낸다. 두 번째 줄에는 각 상자의 크기가 순서대로 주어진다. 상자의 크기는 1,000을 넘지 않는 자연수이다.
//
//출력
//첫째 줄에 한 줄에 넣을 수 있는 최대의 상자 개수를 출력한다.
//
//예제 입력 1
//8
//1 6 2 5 7 3 5 6
//예제 출력 1
//5

#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int a[1001];

int main(){
    int n;
    cin >> n;
    for(int i=0; i<n; i++){
        cin >> a[i];
    }
    vector<int> d(n);
    for(int i=0; i<n; i++){
        d[i] = 1;
        for(int j=0; j<i; j++){
            if(a[i] > a[j] && d[j]+1 > d[i]){
                d[i] = d[j] + 1;
            }
        }
    }
    cout<< *max_element(d.begin(), d.end()) <<'\n';
    
    return 0;
}

// 가장 긴 증가하는 부분수열 이랑 말만다르고 똑같은 문제
