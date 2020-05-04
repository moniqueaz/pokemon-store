import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Button from '../../atoms/Button';
import ItemList from '../../molecules/ItemList';

import { Wrapper, Items, Item, ShowMore } from './styles';

const List = ({ data, isLoader, message }) => {
  const [list, setList] = useState(data);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const groupBy = 12;
  const [itemsLength, setItemsLength] = useState(groupBy);

  const handleLoadMore = () => {
    const newPage = page + 1;
    setPage(newPage);
  };

  // const showMoreItems = () => {
  //   setList(list);
  // };

  useEffect(() => {
    const showItemsLength = groupBy * page;
    setItemsLength(showItemsLength);
    const hasMore = showItemsLength < list.length;
    setShowLoadMore(hasMore);
  }, [page, list]);

  useEffect(() => {
    !isLoader && setList(data);
  }, [isLoader, data]);

  return (
    <Wrapper>
      {!isLoader ? (
        <>
          <Items>
            {list.map((item, index) => {
              return (
                index < itemsLength && (
                  <Item
                    key={index}
                    page={page}
                    itemsPerPage={groupBy}
                    index={index}
                  >
                    <ItemList data={item} />
                  </Item>
                )
              );
            })}
          </Items>
          {showLoadMore && (
            <ShowMore>
              <Button full size="large" onClick={handleLoadMore}>
                Show More
              </Button>
            </ShowMore>
          )}
        </>
      ) : (
        <p>{message}</p>
      )}
    </Wrapper>
  );
};

List.defaultProps = {
  data: [],
  isLoader: true,
  message: 'Loading...',
};

List.propTypes = {
  /**
   * Essa propriedade é responsavel por realizar a carga no componente.
   */
  data: PropTypes.array,
  /**
   * Essa propriedade é responsavel por ddefinir os estado do componente.
   */
  isLoader: PropTypes.bool,
  message: PropTypes.string,
};

export default withTheme(List);
