
class Driver {
  public static void main(String[] args) {
    StackOfStacks sa = new StackOfStacks(2);
    for(char c = 'a'; c <= 'z'; c++){
        sa.push(c);
    }
    sa.print();
    System.out.println(sa.popAt(5));
    sa.print();
    System.out.println(sa.popAt(5));
    sa.print();
    sa.pop();
    sa.pop();
    sa.print();
  }
}


