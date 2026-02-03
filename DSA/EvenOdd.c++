#include<iostream>
using namespace std;

int main() {
    int arr[] = {2, 3, 5, 6, 8};
    int size = sizeof(arr)/sizeof(arr[0]);
    int even = 0, odd = 0;

    for(int i = 0; i < size; i++) {
        if(arr[i] % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    cout<<"Even: "<<even<<endl;
    cout<<"Odd: "<<odd<<endl;
}