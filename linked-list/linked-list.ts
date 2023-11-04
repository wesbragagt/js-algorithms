type TNode<T> = {
  value: T
  next?: TNode<T>
}

class LNode<T> implements TNode<T> {
  value: T
  next

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}

class LinkedList<T>{
  private head?: LNode<T>;

  constructor(head?: LNode<T>) {
    this.head = head;
  }

  append(value: T) {
    if (this.head) {
      const tmp = this.head;
      this.head = new LNode(value);
      this.head.next = tmp;
    }else{
      this.head = new LNode(value);
    }
  }

  get(){
    return this.head?.value;
  }

  next(){
    if(this.head?.next){
      this.head = this.head.next;
    }

    return this;
  }

  tail(){
    while(this.head?.next){
      this.head = this.head.next
    }

    return this;
  }
}

const linkedList = new LinkedList()

linkedList.append(3)
linkedList.append(5)
linkedList.append(10)

console.log(linkedList)
console.log(linkedList.get())
console.log(linkedList.next().get())
console.log(linkedList.tail().get())
