//동물원 성공분류 Silver I
//다이나믹 프로그래밍
//난이도 제공: solved.ac — 난이도 투표하러 가기
//시간 제한    메모리 제한    제출    정답    맞은 사람    정답 비율
//2 초    128 MB    11352    5805    4626    49.439%
//문제
//어떤 동물원에 가로로 두칸 세로로 N칸인 아래와 같은 우리가 있다.
//
//
//
//이 동물원에는 사자들이 살고 있는데 사자들을 우리에 가둘 때, 가로로도 세로로도 붙어 있게 배치할 수는 없다. 이 동물원 조련사는 사자들의 배치 문제 때문에 골머리를 앓고 있다.
//
//동물원 조련사의 머리가 아프지 않도록 우리가 2*N 배열에 사자를 배치하는 경우의 수가 몇 가지인지를 알아내는 프로그램을 작성해 주도록 하자. 사자를 한 마리도 배치하지 않는 경우도 하나의 경우의 수로 친다고 가정한다.
//
//입력
//첫째 줄에 우리의 크기 N(1≤N≤100,000)이 주어진다.
//
//출력
//첫째 줄에 사자를 배치하는 경우의 수를 9901로 나눈 나머지를 출력하여라.
//
//예제 입력 1
//4
//예제 출력 1
//41


//내풀이
#include <iostream>
#include <algorithm>
using namespace std;

long long d[100001][3];
int mod = 9901;
int main()
{
    int n;
    cin>>n;
    d[1][0] = 1;
    d[1][1] = 1;
    d[1][2] = 1;
    for(int i=2; i<=n; i++){
        for(int j=0; j<=2; j++){
            if(j==0){
                d[i][j] = (d[i-1][1] + d[i-1][2])%mod;
            }
            if(j==1){
                d[i][j] = (d[i-1][0] + d[i-1][2])%mod;
            }
            if(j==2){
                d[i][j] = (d[i-1][0] + d[i-1][1] + d[i-1][2])%mod;
            }
        }
    }

    cout<<(d[n][0] + d[n][1] + d[n][2])%mod<<'\n';
    return 0;
}


// 짧게 수정해본 풀이 - 굳이 if문 필요없음
#include <iostream>
#include <algorithm>
using namespace std;

long long d[100001][3];
int mod = 9901;
int main()
{
    int n;
    cin>>n;
    d[1][0] = 1;
    d[1][1] = 1;
    d[1][2] = 1;
    for(int i=2; i<=n; i++){
        d[i][0] = (d[i-1][1] + d[i-1][2])%mod;
        d[i][1] = (d[i-1][0] + d[i-1][2])%mod;
        d[i][2] = (d[i-1][0] + d[i-1][1] + d[i-1][2])%mod;
    }
    cout<<(d[n][0] + d[n][1] + d[n][2])%mod<<'\n';
    return 0;
}


//처음 생각

//d[n][a] : n*2 크기에 마지막으로 a에채운
//n*3 이라고생각하고 세번째칸에 채워진경우를 아무것도 안채운 경우라고 생각?
//
//2는 빈칸
//0 1 2 칸이 있다고하고 마지막에 2칸이오면 그위는 012 다가능
//d[i][0] = d[i-1][1] + d[i-1][2]
//d[i][1] = d[i-1][0] + d[i-1][2]
//d[i][2] = d[i-1][0] + d[i-1][1] + d[i-1][2]
//
//d[1][0] = 1
//d[1][1] = 1
//d[1][2] = 1
//
//d[1][j] = 0~2까지 합.
//
//if i == 0
//d[2][i] = d[1][1] + d[1][2]
//
//if i == 1
//d[2][i] = d[1][0] + d[1][2]
//
//if i==2
//d[2][i] = d[1][0] + d[1][1] + d[1][2]

//--------------------------------------
