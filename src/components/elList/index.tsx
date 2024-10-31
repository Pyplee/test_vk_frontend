import { Avatar, List, Button, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import type { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { itemStore } from '../../stores/ItemStore';

interface ElListProps {
  data: UserItem[],
  loadMore: () => any,
}

interface UserItem {
  id: number,
  name: string,
  description: string,
  link: string,
  avatar: string,
}

const heightWindows = window.innerHeight;
const header = 80;
const footer = 80;

const ContainerHeight = heightWindows - header - footer;

const ListReps: FC<ElListProps> = observer(({ data, loadMore }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      loadMore();
      messageApi.success('More items loaded!');
    }
  };

  const normalizedData = toJS(data);

  const handleDelete = (id: number) => {
    itemStore.deleteItem(id);
    messageApi.success('Item deleted');
  };

  return(
    <>
      {contextHolder}
      <List>
        <VirtualList
          data={normalizedData}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="id"
          onScroll={onScroll}
        >
          {(item: UserItem) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.link}>{item.name}</a>}
                description={item.description}
              />
              <Button
                danger
                onClick={() => handleDelete(item.id)}
              >
                delete
              </Button>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </>
  );
});

export default ListReps;