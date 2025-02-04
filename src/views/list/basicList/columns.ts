import { h } from 'vue';
import { NAvatar, NTag } from 'naive-ui';
import { BasicColumn } from '@/components/Table';
export interface ListData {
  id: number;
  name: string;
  sex: string;
  avatar: string;
  email: string;
  city: string;
  status: string;
  type: string;
  createDate: string;
}

const sexMap = {
  male: 'Male',
  female: 'Female',
  unknown: 'Unknown',
};

const statusMap = {
  close: 'Cancelled',
  refuse: 'Rejected',
  pass: 'Approved',
};

export const columns: BasicColumn<ListData>[] = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Avatar',
    key: 'avatar',
    render(record) {
      return h(NAvatar, {
        size: 50,
        src: record.avatar,
      });
    },
  },
  {
    title: 'Gender',
    key: 'sex',
    render(record) {
      return h(
        NTag,
        {
          type: record.sex === 'male' ? 'info' : 'error',
        },
        {
          default: () => sexMap[record.sex],
        }
      );
    },
  },
  {
    title: 'Email',
    key: 'email',
    width: 220,
  },
  {
    title: 'City',
    key: 'city',
  },
  {
    title: 'Status',
    key: 'status',
    render(record) {
      return h(
        NTag,
        {
          type:
            record.status === 'close'
              ? 'default'
              : record.status === 'refuse'
              ? 'error'
              : 'success',
        },
        {
          default: () => statusMap[record.status],
        }
      );
    },
  },
  {
    title: 'Creation Date',
    key: 'createDate',
  },
];
