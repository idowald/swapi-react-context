import { peopleAttributes, planetAttributes, speciesAttributes } from './utils/attributes';

interface Props {
  attributes :typeof peopleAttributes | typeof planetAttributes | typeof speciesAttributes
}
export function TableRowHeader({ attributes }:
                                  Props) {
  return <tr>{attributes.map((attr) => <th key={attr}>{attr.toUpperCase()}</th>)}</tr>;
}
