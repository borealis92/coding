
class Driver {
  public static void main(String[] args) {
    DoubleStack sa = new DoubleStack(25);
    sa.pushRight('a');
    sa.pushLeft('u');
    sa.pushLeft('r');
    sa.pushLeft('o');
    sa.pushLeft('r');
    sa.pushLeft('a');
    sa.pushLeft('z');
    sa.pushLeft('i');
    sa.pushLeft('e');
    sa.pushLeft('b');
    sa.printStack();
    sa.printArray();
    System.out.println(sa.popAtLeft());
    sa.printStack();
    sa.printArray();
    System.out.println(sa.popAtRight());
    sa.printStack();
    sa.printArray();

  }
}