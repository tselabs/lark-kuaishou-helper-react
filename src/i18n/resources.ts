const resources = {
  zh: {
    translation: {
      'markdown': {
        'title': '获取快手短视频数据',
        'description': '通过视频链接字段，获取对应快手视频部分信息并记录至表格',
        'tips': '本插件将自动创建与映射数据字段，如需指定映射字段，请将字段名称设置为对应数据项的名称',
      },
      'labels': {
        'table': '数据表',
        'linkField': '视频链接字段',
        'linkField_placeholder': '请选择快手短视频链接字段',
        'checkbox': '需获取的数据',
        'confirm': '获取数据'
      },
      'checkbox': {
        'title': '文案',
        'author': '作者',
        'time': '发布时间',
        'likeCount': '点赞量',
        'viewCount': '播放量',
        'getTime': '获取数据时间',
      },
      'messages': {
        'loading': '正在运行中...',
        'error_require_value_is_null': '请选择链接字段与获取数据！',
        'error_records_is_empty': '链接字段记录为空！',
        'error_link_record_is_not_kuaishou': '链接字段记录不是快手视频链接！',
      }
    },
  },
  en: {
    translation: {
      'title': 'Welcome to UIBuilder',
    },
  },
};

export default resources;