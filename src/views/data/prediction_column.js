export const COLUMN_DATA = [{
  label: '類別',
  prop: 'category',
  width: '30px'
}, {
  label: '標準材質',
  prop: 'std_mat'
}, {
  label: '標準規範',
  prop: 'std_reg'
}, {
  label: '厚',
  prop: 'thickness'
}, {
  label: '寬',
  prop: 'width'
}, {
  label: '長',
  prop: 'length'
}, {
  fixed: 'right',
  label: 'Prediction',
  prop: 'predict_value'
}, {
  fixed: 'right',
  label: 'Max',
  prop: 'max'
}, {
  fixed: 'right',
  label: 'Q1',
  prop: 'q1'
}, {
  fixed: 'right',
  label: 'Mean',
  prop: 'mean'
}, {
  fixed: 'right',
  label: 'Q3',
  prop: 'q3'
}, {
  fixed: 'right',
  label: 'Min',
  prop: 'min'
}]

// export const COLUMN_KEY = ['category', 'material_id', 'name', 'name_en', 'Revision_Level', 'material', 'specification', 'thick', 'width', 'length', 'direction', 'note', 'PR_ITEM', 'qty', 'UNIT', 'WBS', 'PO_ITEM', 'price', 'measure', 'currency', 'rate', 'contract_date', 'delivery_date', 'delivery_way', 'supplier', 'statisical_delivery_date', 'long', 'prediction', 'upper', 'q1', 'mean', 'q3', 'lower']
// export const COLUMN_CHINESE = [{
//   category: '類別',
//   material_id: '物料號碼',
//   name: '短文／品名',
//   name_en: '英文品名',
//   Revision_Level: 'Revision Level',
//   material: '標準材質',
//   specification: '標準規範',
//   thick: '厚',
//   width: '寬',
//   length: '長',
//   direction: '晶粒方向',
//   note: '規範附註',
//   PR_ITEM: 'PR_ITEM',
//   qty: '需求數量',
//   UNIT: 'UNIT',
//   WBS: 'WBS元素',
//   PO_ITEM: 'PO_ITEM',
//   price: '簽約單價',
//   measure: '基礎計量單價',
//   currency: '幣別',
//   rate: '匯率',
//   contract_date: '訂約日期',
//   delivery_date: '交運日期',
//   delivery_way: '交運方式',
//   supplier: '供應商',
//   statisical_delivery_date: '統計交貨日期',
//   long: '長約',
//   prediction: 'prediction',
//   upper: 'Upper Bound',
//   q1: 'Q1',
//   mean: 'Mean',
//   q3: 'Q3',
//   lower: 'Lower Bound'
// }]

export const COLUMN_KEY = ['category', 'std_mat', 'std_reg', 'thickness', 'width', 'length', 'reg_sup', 'predict_value', 'max', 'q1', 'mean', 'q3', 'min']
export const COLUMN_CHINESE = [{
  category: '類別',
  std_mat: '標準材質',
  std_reg: '標準規範',
  thickness: '厚',
  width: '寬',
  length: '長',
  reg_sup: '規範附註',
  predict_value: 'prediction',
  max: 'Upper Bound',
  q1: 'Q1',
  mean: 'Mean',
  q3: 'Q3',
  min: 'Lower Bound'
}]
