import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { FiPlusCircle } from 'react-icons/fi';
import Button from '../../atoms/Button';
import ItemList from '../../molecules/ItemList';

import { Wrapper, Items, Item } from './styles';

const List = ({ data, isLoader }) => {
  const [list, setList] = useState(data);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const groupBy = 10;
  const [itemsLength, setItemsLength] = useState(groupBy);

  const handleLoadMore = () => {
    if (showMoreItems) {
      showMoreItems();
    }
    const newPage = page + 1;
    setPage(newPage);
  };

  const showMoreItems = () => {
    setList(list);
  };

  useEffect(() => {
    const showItemsLength = groupBy * page;
    setItemsLength(showItemsLength);
    const hasMore = showItemsLength < list.length;
    setShowLoadMore(hasMore);
  }, [page, groupBy, list]);

  return (
    <Wrapper>
      {!isLoader && (
        <>
          <Items>
            {data.map((item, index) => {
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
            <Button size="large" onClick={handleLoadMore}>
              Show More
            </Button>
          )}
        </>
      )}
    </Wrapper>
  );
};

List.defaultProps = {
  data: [],
  isLoader: true,
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
};

export default List;
