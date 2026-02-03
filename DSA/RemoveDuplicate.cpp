#include<iostream>
using namespace std;

int main() {
    int size = 8;
    int arr[] = {1,2,2,3,3,4,5,6};
    int uniqueIndex = 0;

    for(int i = 0; i < size; i++) {
        if(arr[i] != arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }

    for(int i = 0; i<= uniqueIndex; i++) {
        cout<<arr[i];
    }
}