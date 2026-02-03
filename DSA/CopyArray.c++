#include<iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 4};
    int size = sizeof(arr)/sizeof(arr[0]);
    int copy[size];

    for(int i = 0; i < size; i++) {
        copy[i] = arr[i];
    }

    for(int i = 0; i < size; i++) {
        cout<<"Copy array: "<<copy[i]<<endl;
        // cout<<"Real array: "<<arr[i]<<endl;/
    }
}