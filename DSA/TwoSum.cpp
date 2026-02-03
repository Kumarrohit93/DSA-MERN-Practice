#include<iostream>
using namespace std;

int main() {
    int n = 5;
    int arr[] = {1,2,3,4,5};
    int target = 9;
    bool found = false;

    for(int i = 0; i < n; i++) {
        for(int j = i+1; j<=n; j++) {
            if(arr[i] + arr[j] == target) {
                cout<<"Found index at"<< i <<" and "<<j<<endl;
                found = true;
            }
        }
    }
    if(!found) {
        cout<<"Not found";
    }
}