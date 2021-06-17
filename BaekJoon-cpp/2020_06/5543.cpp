// 상근날드 성공출처다국어분류 Bronze IV
// 사칙연산수학
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	18895	12190	11259	66.696%
// 문제
// 상근날드에서 가장 잘 팔리는 메뉴는 세트 메뉴이다. 주문할 때, 자신이 원하는 햄버거와 음료를 하나씩 골라, 세트로 구매하면, 가격의 합계에서 50원을 뺀 가격이 세트 메뉴의 가격이 된다.

// 햄버거는 총 3종류 상덕버거, 중덕버거, 하덕버거가 있고, 음료는 콜라와 사이다 두 종류가 있다.

// 햄버거와 음료의 가격이 주어졌을 때, 가장 싼 세트 메뉴의 가격을 출력하는 프로그램을 작성하시오.

// 입력
// 입력은 총 다섯 줄이다. 첫째 줄에는 상덕버거, 둘째 줄에는 중덕버거, 셋째 줄에는 하덕버거의 가격이 주어진다. 넷째 줄에는 콜라의 가격, 다섯째 줄에는 사이다의 가격이 주어진다. 모든 가격은 100원 이상, 2000원 이하이다.

// 출력
// 첫째 줄에 가장 싼 세트 메뉴의 가격을 출력한다.

// 예제 입력 1 
// 800
// 700
// 900
// 198
// 330
// 예제 출력 1 
// 848

#include <iostream>
using namespace std;
int main()
{
    int x,y,z,a,b, result;
    int min = 0, min2 = 0;
    cin>>x>>y>>z>>a>>b;
    if(x<y && x<z)
        min = x;
    else if(y<x && y<z)
        min = y;
    else
        min = z;
    
    if(a<b)
        min2 = a;
    else
        min2 = b;
    
    result = min+min2-50;
    cout<<result;

    return 0;
}


//삼항연산자로 풀어보기
#include <iostream>
using namespace std;
int main()
{
    int x,y,z,a,b;
    int min1, min2;
    cin>>x>>y>>z>>a>>b;
    x>y ? min1=y : min1=x;
    min1>z ? min1=z : min1;

    a>b ? min2=b : min2=a;

    cout<<min1+min2-50<<'\n';
    return 0;
}