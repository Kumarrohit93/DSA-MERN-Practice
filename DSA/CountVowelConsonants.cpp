#include<iostream>
using namespace std;

int main() {
    string str;

    cout<<"Enter a string: "<<endl;
    cin>>str;

    int vowel = 0, consonant = 0;

    for(int i = 0; i < str.length(); i++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            vowel++;
        } else {
            consonant++;
        }  
    }

    cout<<"Vowels: "<<vowel<<endl;
    cout<<"Consonants: "<<consonant<<endl;

    return 0;
}