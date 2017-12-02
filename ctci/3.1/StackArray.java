

class StackArray {
  private int capacity;
  private char[] multstack;
  private int top1, top2, top3, start1, start2, start3, end1, end2, end3;

  StackArray(int n) {
    capacity = n;
    multstack = new char[capacity];

    top1 = 0;
    start1 = 0;
    end1 = n/3 - 1;

    top2 = n/3;
    start2 = n/3;
    end2 = 2*n/3 - 1;

    top3 = 2*n/3; 
    start3 = 2*n/3;
    end3 = capacity - 1;

  }

  boolean push(char c, int stackNum) {
    if(stackNum == 0 && top1 <= end1){
      multstack[top1] = c;
      top1++;
      return true;
    }
    if(stackNum == 1 && top2 <= end2){
      multstack[top2] = c;
      top2++;
      return true;
    }
    if(stackNum == 2 && top3 <= end3){
      multstack[top3] = c;
      top3++;
      return true;
    }
    return false;
  }

  char pop(int stackNum) {
    char temp;
    if(stackNum == 0 && top1 > start1){
      top1--;
      temp = multstack[top1];
      multstack[top1] = 0;
      return temp;
    }
    if(stackNum == 1 && top2 > start2){
      top2--;
      temp = multstack[top2];
      multstack[top2] = 0;
      return temp;
    }
    if(stackNum == 2 && top3 > start3){
      top3--;
      temp = multstack[top3];
      multstack[top3] = 0;
      return temp;
    }
    return 0;
  }

  void print() {
    for(int i = 0; i < capacity; i++)
      System.out.print(multstack[i]+ " | ");
    System.out.println("");
  }
  
}