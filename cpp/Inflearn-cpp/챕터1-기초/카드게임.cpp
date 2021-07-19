// 21. 카드게임
 
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
