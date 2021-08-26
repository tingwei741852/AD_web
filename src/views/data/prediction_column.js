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
  label: '預測值',
  prop: 'predict_value'
}, {
  fixed: 'right',
  label: '單位',
  prop: 'unit'
}, {
  fixed: 'right',
  label: '最大值',
  prop: 'max'
}, {
  fixed: 'right',
  label: 'Q3',
  prop: 'q3'
}, {
  fixed: 'right',
  label: '平均值',
  prop: 'mean'
}, {
  fixed: 'right',
  label: 'Q1',
  prop: 'q1'
}, {
  fixed: 'right',
  label: '最小值',
  prop: 'min'
}]

export const HOUR_OPTION_DATA = [{
  label: '類別',
  prop: 'category'
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
  label: '預測值',
  prop: 'predict_value'
}, {
  label: '一般件筆數',
  prop: 'gen_count'
}, {
  label: '複雜件筆數',
  prop: 'comp_count'
}, {
  label: '一般件最大值',
  prop: 'gen_max'
}, {
  label: '一般件平均值',
  prop: 'gen_mean'
}, {
  label: '複雜件最大值',
  prop: 'comp_max'
}, {
  label: '複雜件平均值',
  prop: 'comp_mean'
}, {
  label: '複雜件最小值',
  prop: 'comp_min'
}]

export const HOURCOLUMN_DATA = [{
  label: '類別',
  prop: 'category',
  key: 'category',
  show: true
}, {
  label: '標準材質',
  prop: 'std_mat',
  key: 'std_mat',
  show: true
}, {
  label: '標準規範',
  prop: 'std_reg',
  key: 'std_reg',
  show: true
},
{
  label: '材質群組',
  prop: 'mat_group',
  key: 'mat_group',
  show: true
}, {
  label: '厚',
  prop: 'thickness',
  key: 'mat_group',
  show: true
}, {
  label: '寬',
  prop: 'width',
  key: 'mat_group',
  show: true
}, {
  label: '長',
  prop: 'length',
  key: 'mat_group',
  show: true
}, {
  label: '預測值',
  prop: 'predict_value',
  key: 'mat_group',
  show: true
}, {
  label: '一般件',
  prop: 'mat_group',
  key: 'mat_group',
  show: true,
  children: [
    {
      fixed: 'right',
      label: '筆數',
      prop: 'gen_count',
      key: 'mat_group',
      show: true
    }, {
      fixed: 'right',
      label: '最大值',
      prop: 'gen_max',
      key: 'mat_group',
      show: true
    }, {
      fixed: 'right',
      label: '平均值',
      prop: 'gen_mean',
      key: 'mat_group',
      show: true
    }, {
      fixed: 'right',
      label: '最小值',
      prop: 'gen_min',
      key: 'mat_group',
      show: true
    }
  ]
},
{
  label: '複雜件',
  show: true,
  children: [
    {
      fixed: 'right',
      label: '筆數',
      prop: 'comp_count',
      show: true
    }, {
      fixed: 'right',
      label: '最大值',
      prop: 'comp_max',
      show: true
    }, {
      fixed: 'right',
      label: '平均值',
      prop: 'comp_mean',
      show: true
    }, {
      fixed: 'right',
      label: '最小值',
      prop: 'comp_min',
      show: true
    }
  ]
}]

export const COLUMN_KEY = ['category', 'std_mat', 'std_reg', 'thickness', 'width', 'length', 'reg_sup', 'predict_value', 'unit', 'max', 'q3', 'mean', 'q1', 'min']
export const COLUMN_CHINESE = [{
  category: '類別',
  std_mat: '標準材質',
  std_reg: '標準規範',
  thickness: '厚',
  width: '寬',
  length: '長',
  reg_sup: '規範附註',
  predict_value: '預測值',
  unit: '單位',
  min: 'Lower Bound',
  q1: 'Q1',
  mean: 'Mean',
  q3: 'Q3',
  max: 'Upper Bound'
}]

export const HOUR_COLUMN_KEY = ['category', 'mat_group', 'std_mat', 'std_reg', 'thickness', 'width', 'length', 'reg_sup', 'predict_value', 'gen_count', 'gen_max', 'gen_mean', 'gen_min', 'comp_count', 'comp_max', 'comp_mean', 'comp_min']
export const HOUR_COLUMN_CHINESE = [{
  category: '類別',
  mat_group: '製程類別',
  std_mat: '標準材質',
  std_reg: '標準規範',
  thickness: '厚',
  width: '寬',
  length: '長',
  reg_sup: '規範附註'
}]
