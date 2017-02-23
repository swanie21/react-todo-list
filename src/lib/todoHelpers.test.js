import { addTodo, findById, toggleTodo } from './todoHelpers';

test('addTodo should not mutate the existing todo array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos)
});

test('findById should return the expected item from an array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const expected = {id: 2, name: 'two', isComplete: false}
  const result = findById(2, startTodos)
  expect(result).toEqual(expected)
});

test('toggleTodo should toggle the isComplete prop of a todo', () => {
  const startTodo = {id: 2, name: 'two', isComplete: false}
  const expected = {id: 2, name: 'two', isComplete: true}
  const result = toggleTodo(startTodo)
  expect(result).toEqual(expected)
});

test('toggleTodo should not mutate the original todo', () => {
  const startTodo = {id: 2, name: 'two', isComplete: false}
  const result = toggleTodo(startTodo)
  expect(result).not.toBe(startTodo)
});
