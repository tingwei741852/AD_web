// 報價column選項
export const COLUMN_DATA = [{
  label: '類別',
  prop: 'category',
  show: true
}, {
  label: '標準材質',
  prop: 'std_mat',
  show: true
}, {
  label: '標準規範',
  prop: 'std_reg',
  show: true
}, {
  label: '規範附註',
  prop: 'reg_sup',
  show: false
}, {
  label: '厚',
  prop: 'thickness',
  show: true
}, {
  label: '寬',
  prop: 'width',
  show: true
}, {
  label: '長',
  prop: 'length',
  show: true
}, {
  // fixed: 'right',
  label: '預測值',
  prop: 'predict_value',
  show: true
}, {
  // fixed: 'right',
  label: '單位',
  prop: 'unit',
  show: true
}, {
  // fixed: 'right',
  label: '最大值',
  prop: 'max',
  show: true
}, {
  // fixed: 'right',
  label: 'Q3',
  prop: 'q3',
  show: true
}, {
  // fixed: 'right',
  label: '平均值',
  prop: 'mean',
  show: true
}, {
  // fixed: 'right',
  label: 'Q1',
  prop: 'q1',
  show: true
}, {
  // fixed: 'right',
  label: '最小值',
  prop: 'min',
  show: true
}]
// 報價error_msg
export const PRICE_ERROR_MSG = {
  flag: false,
  error_message: {
    category: {
      item: []
    },
    std_reg: {
      item: []
    },
    reg_sup: {
      item: []
    },
    thickness: {
      item: []
    },
    width: {
      item: []
    },
    length: {
      item: []
    }
  }
}
// 工時column選項
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

// 工時error_msg
export const HOUR_ERROR_MSG = {
  flag: false,
  error_message: {
    category: {
      item: []
    },
    std_reg: {
      item: []
    },
    reg_sup: {
      item: []
    },
    thickness: {
      item: []
    },
    width: {
      item: []
    },
    length: {
      item: []
    }
  }
}

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
}, {
  label: '規範附註',
  prop: 'reg_sup',
  show: false
}, {
  label: '材質群組',
  prop: 'mat_group',
  show: true
}, {
  label: '厚',
  prop: 'thickness',
  show: true
}, {
  label: '寬',
  prop: 'width',
  show: true
}, {
  label: '長',
  prop: 'length',
  show: true
}, {
  label: '預測值',
  prop: 'predict_value',
  key: 'mat_group',
  show: true
}, {
  label: '一般件',
  show: true,
  children: [
    {
      fixed: 'right',
      label: '筆數',
      prop: 'gen_count',
      show: true
    }, {
      fixed: 'right',
      label: '最大值',
      prop: 'gen_max',
      show: true
    }, {
      fixed: 'right',
      label: '平均值',
      prop: 'gen_mean',
      show: true
    }, {
      fixed: 'right',
      label: '最小值',
      prop: 'gen_min',
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

export const HOURCOLUMN_DATA1 = [{
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
}, {
  label: '規範附註',
  prop: 'reg_sup',
  show: true
}, {
  label: '材質群組',
  prop: 'mat_group',
  show: true
}, {
  label: '厚',
  prop: 'thickness',
  show: true
}, {
  label: '寬',
  prop: 'width',
  show: true
}, {
  label: '長',
  prop: 'length',
  show: true
}, {
  label: '預測值',
  prop: 'predict_value',
  key: 'mat_group',
  show: true
}, {
  label: '一般件',
  show: true,
  children: [
    {
      fixed: 'right',
      label: '筆數',
      prop: 'gen_count',
      show: true
    }, {
      fixed: 'right',
      label: '最大值',
      prop: 'gen_max',
      show: true
    }, {
      fixed: 'right',
      label: '平均值',
      prop: 'gen_mean',
      show: true
    }, {
      fixed: 'right',
      label: '最小值',
      prop: 'gen_min',
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
