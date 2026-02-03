#include<iostream>
using namespace std;

int main() {
    int arr[] = {67, 89, 56, 90, 78};
    int sum = 0, avg = 0, size = sizeof(arr)/sizeof(arr[0]);

    for(int i = 0; i < size; i++) {
        sum = sum + arr[i];
    }
    avg = sum/size;
    cout<<"Average is: "<<avg<<"%";
}