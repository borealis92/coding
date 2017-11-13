class StackArray {
	private int capacity;
	private char[] stack;
	private char[] minstack;
	private int top;
	public StackArray next;

	StackArray(int n) {
		capacity = n;
		stack = new char[capacity];
		minstack = new char[capacity];
		top = 0;
		next = null;
	}

	boolean push(char c) {
		if(top >= capacity){
			return false;
		}
		else{
			stack[top] = c; 
			if(top == 0){
				minstack[top] = stack[top];
			}
			else{
				if(stack[top] < minstack[top-1]){
					minstack[top] = stack[top];
				}
				else{
					minstack[top] = minstack[top-1];
				}
			}
			top++;
		}
		return true;

	}

	char pop() {
		if(top <= 0){
			return 0;
		}
		char temp = stack[top-1];
		top--;
		stack[top] = 0;
		minstack[top] = 0;
		return temp;
	}

	char min(){
		if(top <= 0){
			System.out.println("Is empty");
			return 255;
		}
		return minstack[top - 1];
	}

	void print() {
		for(int i = 0; i < capacity; i++)
			System.out.print(stack[i]+ " | ");
		System.out.println();
	}

	boolean atCapacity(){
		return top == capacity;
	}

	boolean isEmpty(){
		return top == 0;
	}
}
