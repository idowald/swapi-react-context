import React, { useEffect, useRef } from 'react';
import 'react-virtualized/styles.css'; // only needs to be imported once
import { InfiniteLoader, List } from 'react-virtualized';
import { ListRowProps } from 'react-virtualized/dist/es/List';
import { Typography } from '@mui/material';
import { People } from '../../../../types/people';
import { Species } from '../../../../types/species';
import { Planet } from '../../../../types/planet';
import { EntityType } from '../../../../types/entity';

interface Props{
  count : number;
  entitiesList : People[] | Species[] | Planet[];
  fetchNextPage: ()=>Promise<any>;
  // eslint-disable-next-line
  onClickRow: (entity: People | Species | Planet)=>void;
  search : string;
  entityType : EntityType;
}
export function InfiniteList(
  {
    entitiesList, fetchNextPage, count, onClickRow, search, entityType,
  }: Props,
) {
  // a workaround to support scrolling in the virtualized list
  const ref = useRef<any>();
  useEffect(() => {
    ref.current.children[0].scrollTop = 0;
  }, [search, entityType]);
  const isRowLoaded = ({ index }: {index:number}) => !!entitiesList[index];
  const rowRenderer = ({ key, index, style }: ListRowProps) => (
    <div
      role="button"
      key={key}
      style={style}
      onClick={() => onClickRow(entitiesList[index])}
    >
      <Typography variant="body1">{entitiesList[index]?.name}</Typography>

    </div>
  );

  return (
    <div ref={ref}>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={fetchNextPage}
        rowCount={count}
      >
        {({ onRowsRendered, registerChild }) => (
          <List
            height={200}
            onRowsRendered={onRowsRendered}
            ref={registerChild}
            rowCount={count}
            rowHeight={20}
            rowRenderer={rowRenderer}
            width={300}
            scrollToIndex={0}
          />
        )}
      </InfiniteLoader>
    </div>
  );
}
