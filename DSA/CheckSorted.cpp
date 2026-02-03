#include<iostream>
using namespace std;

int main() {
    int n = 5;
    int arr[] = {5,4,3,2,1};
    int currElement = 0;
    bool isSorted = false;

    for(int i = 0; i < n - 1; i++) {
        currElement = arr[i];
        if(currElement < arr[i + 1]) {
            isSorted = true;
            break;
        } 
    }

    if(isSorted) {
        cout<<"Sorted";
    } else {
        cout<<"Not sorted";
    }
}