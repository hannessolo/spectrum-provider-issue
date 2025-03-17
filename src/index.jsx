import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider, defaultTheme } from '@adobe/react-spectrum'
import { Picker } from '@extensibility/react-spectrum-custom-picker'

const items = [
  {
    key: "item1",
    id: "item1",
    isFolder: false,
    name: "Product 1",
    images: [{ url: "https://picsum.photos/id/1/200/301" }],
    sku: "SKU1234",
    parentId: 2,
  },
  {
    key: "item2",
    id: "item2",
    isFolder: false,
    name: "Product 2",
    images: [{ url: "https://picsum.photos/id/1/200/302" }],
    sku: "SKU12345",
    parentId: 2,
  },
  {
    key: "item3",
    id: "item3",
    isFolder: false,
    name: "Product 3",
    images: [{ url: "https://picsum.photos/id/1/200/303" }],
    sku: "SKU12346",
    parentId: 2,
  },
  {
    key: "item4",
    id: "item4",
    isFolder: false,
    name: "Product 4",
    images: [{ url: "https://picsum.photos/id/1/200/304" }],
    sku: "SKU12347",
    parentId: 2,
  },
];

const args = {
  getCategories: () => ({}),
  getProducts: () => ({ products: items }),
  onConfirm: () => {},
  onCancel: () => {},
  onSelection: (selected) =>
    console.log("selection change callback", selected),
  onCategoryChange: (category) =>
    console.log("category change callback", category),
  onCategorySelect: (selected) =>
    console.log("selection change callback", selected),
  rootCategoryId: "1",
  selectionMode: "multiple",
  labels: {},
}

createRoot(document.getElementById('root')).render(
  <Provider theme={defaultTheme} colorScheme='light'>
      <Picker {...args} />
  </Provider>,
)
