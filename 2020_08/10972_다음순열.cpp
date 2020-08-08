// 다음 순열 성공분류 Silver III
// 수학
// 난이도 제공: solved.ac — 난이도 투표하러 가기
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	13195	5690	4089	44.364%
// 문제
// 1부터 N까지의 수로 이루어진 순열이 있다. 이때, 사전순으로 다음에 오는 순열을 구하는 프로그램을 작성하시오.

// 사전 순으로 가장 앞서는 순열은 오름차순으로 이루어진 순열이고, 가장 마지막에 오는 순열은 내림차순으로 이루어진 순열이다.

// N = 3인 경우에 사전순으로 순열을 나열하면 다음과 같다.

// 1, 2, 3
// 1, 3, 2
// 2, 1, 3
// 2, 3, 1
// 3, 1, 2
// 3, 2, 1
// 입력
// 첫째 줄에 N(1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄에 순열이 주어진다.

// 출력
// 첫째 줄에 입력으로 주어진 순열의 다음에 오는 순열을 출력한다. 만약, 사전순으로 마지막에 오는 순열인 경우에는 -1을 출력한다.

// 예제 입력 1 
// 4
// 1 2 3 4
// 예제 출력 1 
// 1 2 4 3
// 예제 입력 2 
// 5
// 5 4 3 2 1
// 예제 출력 2 
// -1
// 출처
// 문제를 만든 사람: baekjoon
// 알고리즘 분류
// 순열

#include <iostream>
#include <vector>
using namespace std;

void my_swap(int &a, int &b){
    int temp = a;
    a = b;
    b = temp;
}

bool next_permutation(vector<int> &a, int n)
{
    int i = n-1;
    while(i>0 && a[i-1] >= a[i] ){
        i = i-1;
    }
    if(i <= 0){
        return false;
    }
    int j = n-1;
    // a[j] > a[i-1] 이면서 최대인거
    while(a[j] <= a[i-1]){
        j = j-1;
    }
    my_swap(a[j], a[i-1]);
    j= n-1;
    while( i<j){
        my_swap(a[i], a[j]);
        i += 1;
        j -= 1;
    }
    return true;
}

int main()
{
    int n;
    cin>>n;
    
    vector<int> a(n);
    for(int i=0; i<n; i++){
        cin>>a[i];
    }
    
    if(next_permutation(a, n)){
        for(int i=0; i<n; i++){
            cout<<a[i]<<' ';
        }
    }else{
        cout<<"-1";
    }
    cout<<'\n';
    
    return 0;
}


//stl사용
#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main(){
    int n;
    cin>>n;
    vector<int> a(n);
    for(int i=0; i<n; i++){
        cin>>a[i];
    }
    if(next_permutation(a.begin(), a.end())){
        for(int i=0; i<n; i++){
            cout<<a[i]<<' ';
        }
    } else {
        cout << "-1";
    }
    cout<<'\n';
    return 0;
}