// 31. 탄화수소 질량
// 탄소(C)와 수소(H)로만 이루어진 화합물을 탄화수소라고 합니다.
// 탄소(C) 한 개의 질량은 12g, 수소(H) 한 개의 질량은 1g입니다.
// 에틸렌(C2H4)의 질량은 12*2+1*4=28g입니다.

#include <iostream>
#include <vector>

using namespace std;

int main()
{
    char a[10];
    cin >> a;
    
    int c = 0;
    int h = 0;
    int hpos = 0;
    int i;
    
    if(a[1] == 'H'){
        c = 1;
        hpos = 1;
    }else{
        for(i=1; a[i]!='H'; i++){
            c = c*10 + (a[i]-48);
        }
        hpos = i;
    }
    
    if(a[hpos+1] == '\0'){
        h = 1;
    }else{
        for(i = hpos+1; a[i]!='\0'; i++){
            h = h*10 + (a[i]-48);
        }
    }
    
    cout << c*12 + h<<'\n';
    
    return 0;
}
