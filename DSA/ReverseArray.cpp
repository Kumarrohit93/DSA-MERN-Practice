#include<iostream>
using namespace std;

int main() {
    int arr[] = {23, 45, 67, 43, 12, 67, 90};
    int size = 7, left = 0, right = size - 1;

    cout<<"Reverse array: "<<endl;
    while(left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
    for(int i = 0; i < size; i++) {
        cout<<arr[i]<<endl;
    }
}