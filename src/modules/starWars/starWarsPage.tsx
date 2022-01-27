import * as _ from 'lodash';

import React, { ChangeEvent } from 'react';
import Modal from 'react-modal';
import { Alert, TextField } from '@mui/material';
import { useStarWars } from './hooks/useStarWars';
import { Selector } from '../common/selector/selector';
import { Entities } from '../../types/entity';
import { InfiniteList } from './components/infiniteList/infiniteList';
import { Graph } from './components/graph/graph';
import { Spinner } from '../common/spinner/spinner';

export function StarWarsPage() {
  const {
    errorMessage, isLoading,
    setEntityType,
    entityType,
    setSearch,
    entitiesList, fetchNextPage, count,
    setSelectedEntity,
    selectedEntity,
    search,
  } = useStarWars();
  const changeSearchTerm = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  return (
    <>
      <div>
        <div>
          <Selector
            name="selector"
            onChange={setEntityType}
            options={[Entities.Species, Entities.Planets, Entities.People]}
            selected={Entities.People}
          />
          <TextField variant="standard" onChange={_.debounce(changeSearchTerm, 400)} defaultValue={search} />
        </div>
        <InfiniteList
          entityType={entityType}
          search={search}
          entitiesList={entitiesList}
          fetchNextPage={fetchNextPage}
          count={count}
          onClickRow={((entity) => setSelectedEntity(entity))}
        />
        <Spinner display={isLoading} />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </div>
      <Modal
        isOpen={!!selectedEntity}
        onRequestClose={() => setSelectedEntity(null)}
        contentLabel={`Show ${selectedEntity?.name}`}
      >
        <Graph />
      </Modal>
    </>
  );
}
