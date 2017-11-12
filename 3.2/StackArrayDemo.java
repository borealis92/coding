// StackArrayDemo.java
class StackArrayDemo {
  public static void main(String[] args) {
    StackArray sa = new StackArray(18);
    sa.push('h');
    sa.push('a');
    sa.push('t');
    sa.push('e');
    sa.push('R');
    sa.push('o');
    sa.print();
    System.out.println(sa.pop());
    sa.print();
    System.out.println(sa.pop());
    sa.print();
  }
}


