// 2007년 성공분류 Bronze I
// 구현
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 2 초	128 MB	67046	29371	25165	45.321%
// 문제
// 오늘은 2007년 1월 1일 월요일이다. 그렇다면 2007년 x월 y일은 무슨 요일일까? 이를 알아내는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 빈 칸을 사이에 두고 x(1≤x≤12)와 y(1≤y≤31)이 주어진다. 참고로 2007년에는 1, 3, 5, 7, 8, 10, 12월은 31일까지, 4, 6, 9, 11월은 30일까지, 2월은 28일까지 있다.

// 출력
// 첫째 줄에 x월 y일이 무슨 요일인지에 따라 SUN, MON, TUE, WED, THU, FRI, SAT중 하나를 출력한다.

// 예제 입력 1 
// 1 1
// 예제 출력 1 
// MON
// 예제 입력 2 
// 3 14
// 예제 출력 2 
// WED

#include <iostream>
using namespace std;
int main()
{
    int month, day;
    int sum = 0, temp = 0;
    int montharr[] = {0, 31,28,31,30,31,30,31,31,30,31,30,31};
    cin>>month>>day;
    
    for(int i = 0; i<month; i++)
        temp += montharr[i];
    
    sum = temp + day;
    
    switch(sum %7)
    {
        case 1: 
            cout<<"MON"<<'\n';
            break;
        case 2: 
            cout<<"TUE"<<'\n';
            break;
        case 3: 
            cout<<"WED"<<'\n';
            break;
        case 4: 
            cout<<"THU"<<'\n';
            break;
        case 5: 
            cout<<"FRI"<<'\n';
            break;
        case 6: 
            cout<<"SAT"<<'\n';
            break;
        case 0: 
            cout<<"SUN"<<'\n';
            break;
    }
        
    
    return 0;
}