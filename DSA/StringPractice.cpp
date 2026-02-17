#include <iostream>
using namespace std;

int main()
{
    string str = "madam";

    int left = 0;
    int right = str.length() - 1;

    bool isPalindrome = true;

    while(left < right) {
        if(str[left] != str[right]) {
            isPalindrome = false;
            break;
        }
        left++;
        right--;
    }

    if(isPalindrome) {
        cout<<"String is palindrome";
    } else {
        cout<<"String is not palindrome";

    }
}