#include<iostream>
using namespace std;

int main() {
    string str;

    cout<<"Enter a string: "<<endl;
    cin>>str;

    string reversed;

    for(int i = str.length() - 1; i >= 0; i--) {
        reversed+=str[i];
    }

    cout<<"Reversed string is: "<<reversed;
    return 0;
}