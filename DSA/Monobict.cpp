#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int quotient = 0;
    int remainder = 0;

    int ans = 0;

    while (n > 0)
    {
        quotient = n / 2;
        remainder = n % 2;
        ans+=(remainder * quotient);

        quotient*=10;
    }

    cout<<ans;
}