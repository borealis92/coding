class DoubleStack{
	private int capacity;
	private char[] stack;
	private int top_right;
	private int top_left;
	private int size; 


	DoubleStack(int n){
		capacity = n;
		stack = new char[capacity];
		top_right = 1;
		top_left = 0;
		size = 0;
	}

	boolean pushLeft(char c){
		if(atCapactiy()){
			return false;
		}
		stack[top_left] = c;
		top_left = ((top_left - 1) + capacity) % capacity;
		size++;
		return true;
	}

	boolean pushRight(char c){
		if(atCapactiy()){
			return false;
		}
		stack[top_right] = c;
		top_right = (top_right + 1) % capacity;
		size++;
		return true;
	}

	char popAtLeft(){
		if(isEmpty()){
			return 0;
		}
		char temp;
		temp = stack[(top_left+1)%capacity];
		stack[(top_left+1)%capacity] = 0;
		top_left = (top_left+1)%capacity;
		size--;
		return temp;
		
	}

	char popAtRight(){
		if(isEmpty()){
			return 0;
		}
		char temp;
		temp = stack[top_right-1];
		stack[top_right-1] = 0;
		top_right--;
		size--;
		return temp;
	}

	void printStack(){
		for(int i = 1; i <= size; i++){
			System.out.print(stack[(i + top_left)%capacity] + "|");
		}
		System.out.println(size);

	}

	void printArray(){
		for(int i = 0; i < capacity; i++){
			System.out.print(stack[i] + "|");
		}
		System.out.println(size);
	}

	boolean atCapactiy(){
		return size == capacity;
	}

	boolean isEmpty(){
		return size == 0;
	} 
}