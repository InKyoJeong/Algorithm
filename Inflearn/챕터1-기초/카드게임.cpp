// 21. 카드게임
// 예를 들어, 다음 표에서 3번째 줄은 각 라운드의 승자를 표시하고 있다. 표에서 D는 무승
// 부를 나타낸다. 이 경우에 A의 총 승점은 16점이고, B는 13점이어서, A가 게임의 승자가 된
// 다.
// 라운드 1 2 3 4 5 6 7 8 9 10
// A 4 5 6 7 0 1 2 3 9 8
// B 1 2 3 4 5 6 7 8 9 0
// 승 A A A A B B B B D A
// 아래 표의 경우에는 A와 B의 총 승점은 13점으로 같다. 마지막으로 승부가 난 라운드는 7
// 번째 라운드이고, 이 라운드의 승자인 B가 게임의 승자가 된다.
// 라운드 1 2 3 4 5 6 7 8 9 10
// A 9 1 7 2 6 3 0 4 8 5
// B 6 3 9 2 1 0 7 4 8 5
// 승 A B B D A A B D D D

#include <iostream>

using namespace std;

int a[10];
int b[10];

int main(){
    int a_score = 0, b_score = 0;
    
    for(int i=1; i<=10; i++){
        cin>>a[i];
    }
    for(int i=1; i<=10; i++){
        cin>>b[i];
    }
    
    int last_winner = 0;
    
    for(int i=1; i<=10; i++){
        if(a[i] > b[i]){
            a_score += 3;
            last_winner = 1;
        }else if(a[i] < b[i]){
            b_score += 3;
            last_winner = 2;
        }else{
            a_score += 1;
            b_score += 1;
        }
    }
    
    cout << a_score << b_score<<'\n';
    
    if(a_score > b_score){
        cout<<"A ";
    }else if(a_score < b_score){
        cout<<"B";
    }else{
        if(last_winner == 1){
            cout<<"A"<<'\n';
        }else if(last_winner == 2){
            cout<<"B"<<'\n';
        }else{
            cout<<"D"<<'\n';
        }
    }
    return 0;
}
