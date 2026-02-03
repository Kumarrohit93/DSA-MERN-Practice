#include<iostream>
using namespace std;

int main() {
    int size = 5;
    int arr[] = {1,2,3,4,5};
    int start = 0;
    int end = size - 1;

    while(start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    cout<<"Reverse array in place: "<<endl;
    for(int i = 0; i < size; i++) {
        cout<<arr[i]<<" ";
    }
}