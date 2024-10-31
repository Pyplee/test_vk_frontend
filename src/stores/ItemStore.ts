import { makeAutoObservable } from 'mobx';

interface Item {
  id: number;
  name: string;
  description: string;
  link: string;
  avatar: string;
}

export class ItemStore {
  items: Item[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadItems(newItems: Item[]) {
    this.items = [...this.items, ...newItems];
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  setLoading(status: boolean) {
    this.loading = status;
  }

  clearItems() {
    this.items = [];
  }
}

export const itemStore = new ItemStore();
