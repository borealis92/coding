
class Driver {
  public static void main(String[] args) {
    DoubleStack sa = new DoubleStack(25);
    sa.pushRight('a');
    sa.pushLeft('u');
    sa.pushLeft('u');
    sa.pushLeft('u');
    sa.pushLeft('u');
    sa.pushLeft('u');
    sa.pushLeft('u');
    sa.pushLeft('u');
    sa.pushLeft('u');
    sa.pushLeft('u');
    sa.printStack();
    sa.printArray();

  }
}