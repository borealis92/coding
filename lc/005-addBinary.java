class Solution {
    public String addBinary(String a, String b) {
        int apos = a.length() - 1;
        int bpos = b.length() - 1;
        int carry = 0;
        String answer = "";
        while(apos >=0 || bpos >= 0){
            //Figure out the sum
            int sum = 0;
            if(apos >= 0 && a.charAt(apos) == '1' ){
              sum += 1;
            }
            if(bpos >= 0 && b.charAt(bpos) == '1'){
               sum += 1;
            }
            sum += carry;
            // Get the sum
            if(sum % 2 == 0){
                answer = "0" + answer;
            }
            if(sum % 2 == 1){
                answer = "1" + answer;
            }
            if(sum > 1){
                carry = 1;
            }
            else{
                carry = 0;
            } 
            apos--;
            bpos--;
        }
        if(carry == 1){
            answer = "1" + answer;
        }
        return answer;
    }
}