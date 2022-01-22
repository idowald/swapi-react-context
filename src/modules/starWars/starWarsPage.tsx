import * as _ from 'lodash';

import { ChangeEvent } from 'react';
import { useStarWars } from './hooks/useStarWars';
import { Table } from '../common/table/table';
import { Selector } from '../common/selector/selector';
import { Entities } from '../../types/entity';
import { Input } from '../common/input/input';

export function StarWarsPage() {
  const {
    entityType,
    entitiesList, errorMessage, isLoading,
    setEntityType,
    setSearch,
  } = useStarWars();
  const searchTerm = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  return (
    <div>
      <Selector
        label="Select an entity"
        name="selector"
        onChange={setEntityType}
        options={[Entities.Species, Entities.Planets, Entities.People]}
        selected={Entities.People}
      />
      <Input onChange={_.debounce(searchTerm, 400)} />
      <Table entityType={entityType} entities={entitiesList} />
      <div>TODO some interaction with isLoading</div>
      <div>{isLoading}</div>
      <div>{errorMessage}</div>
    </div>
  );
}
