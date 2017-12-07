class Solution {
    int reverse(int x) {
        int out = 0;
        int prev;
        int rev;
        while(x != 0){
            int mod = x % 10; //gets the last digit
            x = x / 10; // shortens the digit
            prev = out;
            out = out * 10 + mod;
            rev = (out - mod) / 10; //reverses the out's operations
            if(rev != prev){ // tests for overflow
                return 0;
            }
        }
        return out;
    }

    public boolean isPalindrome(int x) {
        if(x >= 0 && x == reverse(x)){
            return true;
        }
        return false;
    }
}