#include<iostream>
using namespace std;

int main() {
    int size = 5;
    int arr[] = {10, 20, 30, 40, 50};
    int first = arr[0];

    for(int i = 0; i < size; i++) {
        arr[i] = arr[i+1];
    }

    arr[size-1] = first;

    cout<<"Rotate Array: "<<endl;
    for(int i = 0; i < size; i++) {
        cout<<arr[i]<<endl;
    }
}