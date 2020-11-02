// 소트인사이드 성공분류 Silver V
// 정렬
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 2 초	128 MB	23819	14108	12127	60.285%
// 문제
// 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

// 입력
// 첫째 줄에 정렬하고자하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.

// 출력
// 첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다.

// 예제 입력 1 
// 2143
// 예제 출력 1 
// 4321

//버블정렬
#include <stdio.h>
#include <string.h>

int main(){
    char Buf[11];
    scanf("%s", Buf);
    
    int i, j, dummy;
    for(i = strlen(Buf)-1; i >= 0; i--){
        for(j = 1; j <= i; j++){
            if(Buf[j-1] < Buf[j]){
                dummy = Buf[j-1];
                Buf[j-1] = Buf[j];
                Buf[j] = dummy;
            }
        }
    }
    printf("%s\n", Buf);

    return 0;
}


//선택정렬
#include <stdio.h>
#include <string.h>

int main(){
    char Buf[11];
    scanf("%s", Buf);
    
    int i, j, max, dummy;
    for(i = 0; i < strlen(Buf); i++){
        max = i;
        
        for(j = i + 1; j < strlen(Buf); j++)
            if(Buf[j] > Buf[max])
                max = j;
        
        dummy = Buf[max];
        Buf[max] = Buf[i];
        Buf[i] = dummy;
    }
    printf("%s\n", Buf);

    return 0;
}

//gets puts 이용
#include<stdio.h>
#include<string.h>

int main(void){
    char s[11]=" ";
    int len,temp;
    
    gets(s);
    len = strlen(s);

    for(int i=0; i<len; i++){
        for(int j=i+1; j<len; j++){
            if(s[i] < s[j]){
                temp = s[i];
                s[i] = s[j];
                s[j] = temp;
            }
        }
    }
    puts(s);
}
