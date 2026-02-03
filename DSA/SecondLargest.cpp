#include<iostream>
using namespace std;

int main() {
    int size = 5;
    int arr[] = {10, 20, 43, 90, 47};
    int first_largest = arr[0];
    int second_largest;
    for(int i = 0; i < size; i++) {
        if(arr[i] > first_largest) {
            second_largest = first_largest;
            first_largest = arr[i];
        } else if(arr[i] < first_largest && arr[i] > second_largest) {
            second_largest = arr[i];
        }
    }

    cout<<"First Largest: "<<first_largest<<endl;
    cout<<"Second Largest: "<<second_largest<<endl;
}

