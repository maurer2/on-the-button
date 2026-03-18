import type { ReactElement } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

export default function useElementAsString(element: ReactElement): string {
  const elementAsString = reactElementToJSXString(element, {
    filterProps: ['onClick', 'className', 'data-tsd-source'],
    useBooleanShorthandSyntax: false, // keep attribute={false}
    tabStop: 4,
  });

  return elementAsString;
}
