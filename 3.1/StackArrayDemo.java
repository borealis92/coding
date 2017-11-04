// StackArrayDemo.java
class StackArrayDemo {
  public static void main(String[] args) {
    StackArray sa = new StackArray(18);
    sa.push('k',0);
    sa.push('z',1);
    sa.push('a',2);
    sa.push('u',0);
    sa.push('r',1);
    sa.push('o',1);
    sa.print();
    System.out.println(sa.pop(1));
    System.out.println(sa.pop(1));
    System.out.println(sa.pop(1));
    System.out.println(sa.pop(1));
    System.out.println(sa.pop(1));
    System.out.println(sa.pop(1));
    System.out.println(sa.pop(1));
    System.out.println(sa.pop(1));
    System.out.println(sa.pop(1));
    sa.print();
  }
}


