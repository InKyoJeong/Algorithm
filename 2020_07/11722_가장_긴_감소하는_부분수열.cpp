//가장 긴 감소하는 부분 수열 성공분류 Silver II
//다이나믹 프로그래밍
//난이도 제공: solved.ac — 난이도 투표하러 가기
//시간 제한    메모리 제한    제출    정답    맞은 사람    정답 비율
//1 초    256 MB    12209    7715    6301    64.665%
//문제
//수열 A가 주어졌을 때, 가장 긴 감소하는 부분 수열을 구하는 프로그램을 작성하시오.
//
//예를 들어, 수열 A = {10, 30, 10, 20, 20, 10} 인 경우에 가장 긴 감소하는 부분 수열은 A = {10, 30, 10, 20, 20, 10}  이고, 길이는 3이다.
//
//입력
//첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000)이 주어진다.
//
//둘째 줄에는 수열 A를 이루고 있는 Ai가 주어진다. (1 ≤ Ai ≤ 1,000)
//
//출력
//첫째 줄에 수열 A의 가장 긴 감소하는 부분 수열의 길이를 출력한다.
//
//예제 입력 1
//6
//10 30 10 20 20 10
//예제 출력 1
//3

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    int n;
    cin>>n;
    
    vector<int> a(n);
    for(int i=0; i<n; i++){
        cin>>a[i];
    }
    
    vector<int> d(n);
    
    for(int i=0; i<n; i++){
        d[i] = 1;
        for(int j=0; j<i; j++){
            if(a[i]<a[j] && d[j]+1 > d[i]){
                d[i] = d[j]+1;
            }
        }
    }

    cout<<*max_element(d.begin(), d.end())<<'\n';
    return 0;
}
