export const COLUMN_DATA = [{
  label: '標準材質',
  prop: 'material'
}, {
  label: '標準規範',
  prop: 'specification'
}, {
  label: '厚',
  prop: 'thick'
}, {
  label: '寬',
  prop: 'width'
}, {
  label: '長',
  prop: 'length'
}, {
  fixed: 'right',
  label: 'Prediction',
  prop: 'prediction'
}, {
  fixed: 'right',
  label: 'Upper Bound',
  prop: 'upper'
}, {
  fixed: 'right',
  label: 'Lower Bound',
  prop: 'lower'
}, {
  fixed: 'right',
  label: 'Standard',
  prop: 'standard'
}]

export const COLUMN_KEY = ['material_id', 'name', 'name_en', 'Revision_Level', 'material', 'specification', 'thick', 'width', 'length', 'direction', 'note', 'PR_ITEM', 'qty', 'UNIT', 'WBS', 'PO_ITEM', 'price', 'measure', 'currency', 'rate', 'contract_date', 'delivery_date', 'delivery_way', 'supplier', 'statisical_delivery_date', 'long', 'prediction', 'upper', 'q1', 'q3', 'lower', 'standard']
export const COLUMN_CHINESE = [{
  material_id: '物料號碼',
  name: '短文／品名',
  name_en: '英文品名',
  Revision_Level: 'Revision Level',
  material: '標準材質',
  specification: '標準規範',
  thick: '厚',
  width: '寬',
  length: '長',
  direction: '晶粒方向',
  note: '規範附註',
  PR_ITEM: 'PR_ITEM',
  qty: '需求數量',
  UNIT: 'UNIT',
  WBS: 'WBS元素',
  PO_ITEM: 'PO_ITEM',
  price: '簽約單價',
  measure: '基礎計量單價',
  currency: '幣別',
  rate: '匯率',
  contract_date: '訂約日期',
  delivery_date: '交運日期',
  delivery_way: '交運方式',
  supplier: '供應商',
  statisical_delivery_date: '統計交貨日期',
  long: '長約',
  prediction: 'prediction',
  upper: 'Upper Bound',
  q1: 'Q1',
  q3: 'Q3',
  lower: 'Lower Bound',
  standard: 'standard'
}]
