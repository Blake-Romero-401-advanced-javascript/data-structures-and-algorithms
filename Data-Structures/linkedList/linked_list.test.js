const LinkedList = require('./linked-list.js');
describe('Testing Linked Lists', () => {

  it('should create a node', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
  })

  it('should insert a new node', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    expect(ll.head.value).toBe('apples');
  })

  it('should add to NOT empty list', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    expect(ll.head.value).toBe('bananas');
    expect(ll.head.next.value).toBe('apples');
  })

  it('should add to NOT NOT empty list', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    ll.insert('oranges');
    expect(ll.head.value).toBe('oranges');
    expect(ll.head.next.value).toBe('bananas');
    expect(ll.head.next.next.value).toBe('apples');
  })

  it('should append to empty list', () => {
    const ll = new LinkedList();
    ll.append('apples');
    expect(ll.head.value).toBe('apples');
  })

  it('should append to NOT empty list', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    ll.append('cucumbers');
    expect(ll.head.value).toBe('cucumbers');
    expect(ll.head.next.value).toBe('bananas');
    expect(ll.head.next.next.value).toBe('apples');
    expect(ll.head.next.next.next).toBe(null);
  })

  it.skip('should display true', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    ll.insert('oranges');
    expect(ll.includes('bananas')).toBeruthy();
  })

  it('should return a string', () => {
    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
  })

})
