import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Button from '@/shared/components/Button';

test('버튼이 렌더링된다.', () => {
  const { getByText } = render(<Button>click</Button>);

  const button = getByText('click');

  expect(button).toBeDefined();
});
