#include <iostream>
using namespace std;

int main()
{
    string str;

    cout << "Enter a string: " << endl;
    cin >> str;

    bool valid = true;

    int num = 0, alphabet = 0; 

    for (int i = 0; i < str.length(); i++)
    {
        if (str[i] < '0' || str[i] > '9')
        {
            valid = false;
            alphabet++;
            // break;
        } else {
            num++;
        }
    }

    if (valid)
    {
        cout << "String contains digits, it is a valid string." << endl;
    }
    else
    {
        cout << "String is not contains digits, it is not a valid string." << endl;
    }

    cout<<"Numbers in it: "<<num<<endl;
    cout<<"Alphabets in it: "<<alphabet<<endl;
    return 0;
}