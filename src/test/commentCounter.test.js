import { countComments, allComments } from '../modules/__mocks__/commentCounter.js';

test('Test if the number of comments is ok...', () => {
  expect(countComments(allComments)).toBe(3);
});
