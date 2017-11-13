class StackOfStacks{
	private StackArray head;
	private int capacity;

	StackOfStacks(int n){
		head = new StackArray(n);
		capacity = n;
	}

	void print(){
		for(StackArray temp = head; temp != null; temp = temp.next){
			temp.print();
		} 
		System.out.println();
	}

	void push(char c){
		StackArray temp = head;
		while(temp.next != null){
			temp = temp.next;
		}
		temp.push(c);
		if(temp.atCapacity()){
			temp.next = new StackArray(capacity);
		}
	}

	char pop(){
		StackArray temp = head;
		while(temp.next != null && !temp.next.isEmpty()){
			temp = temp.next;
		}
		if(temp.next != null && temp.next.isEmpty()){
			temp.next = null;
		}
		return temp.pop();
	}

	char popAt(int whichStack){
		int howmanymorenexts = whichStack;
		StackArray temp = head;
		StackArray prev = head;
		while(temp.next != null && !temp.next.isEmpty() && howmanymorenexts > 0){
			temp = temp.next;
			howmanymorenexts--;
		}
		if(howmanymorenexts != 0){
			return 0;
		}
		char out = temp.pop();
		if(temp.isEmpty()){
			if(temp == head){
				head = head.next;
			}
			else{
				while(prev.next != temp){
					prev = prev.next;
				}
				prev.next = prev.next.next;
			}
		}
		return out;
	}

}