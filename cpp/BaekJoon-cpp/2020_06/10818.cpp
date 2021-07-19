// 최소, 최대 성공 Bronze III
// 구현수학
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	56234	24469	20222	45.102%
// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

// 예제 입력 1 
// 5
// 20 10 35 30 7
// 예제 출력 1 
// 7 35

#include <iostream>
using namespace std;

int main()
{
    int input;
    cin>>input;
    int x[input];
    int min =  1000000;
    int max = -1000000;
    for(int i =0; i<input; i++)
    {
        cin>>x[i];
        
        if(x[i]>max)
        {
             max = x[i];
        }
           
        if(x[i]<min)
        {
            min = x[i];
        }
            
    }
    cout<<min<<' '<<max<<'\n';
    
    return 0;
}


//시간 줄인코드
#include<iostream>
using namespace std;
int main(void)
{
    ios_base::sync_with_stdio(false);
    int count,num,min=1000001,max=-1000001;
    cin>>count;
    while (count--) {
        cin>>num;
        max = num > max ? num : max;
        min = num < min ? num : min;
    }
    cout<<min<<' '<<max;
    return 0;
}
