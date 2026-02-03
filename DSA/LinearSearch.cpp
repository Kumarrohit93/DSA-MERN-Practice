#include<iostream>
using namespace std;

int main() {
    int arr[] = {23, 45, 67, 43, 12, 67, 90};
    int size = 7, target = 12;

    for(int i = 0; i < size; i++) {
        if(arr[i] == target) {
            cout<<"Target found on Index: "<<i<<endl;
        }
    }
}