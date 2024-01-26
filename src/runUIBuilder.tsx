import { bitable, FieldType, UIBuilder } from "@lark-base-open/js-sdk";
import axios from "axios";

export default async function main(uiBuilder: UIBuilder, { t }) {
  uiBuilder.markdown(`
  ### ${t('markdown.title')}
  ${t('markdown.description')}
  > ${t('markdown.tips')}
  `);
  uiBuilder.form((form) => ({
    formItems: [
      form.tableSelect('table', {
        label: t('labels.table'),
      }),
      form.fieldSelect('field', {
        label: t('labels.linkField'),
        placeholder: t('labels.linkField_placeholder'),
        sourceTable: 'table',
        filterByTypes: [FieldType.Url, FieldType.Text],
      }),
      form.checkboxGroup('checkbox', {
        label: t('labels.checkbox'),
        options: [
          { label: t('checkbox.title'), value: 'checkTitle' },
          { label: t('checkbox.author'), value: 'checkAuthor' },
          { label: t('checkbox.time'), value: 'checkTime' },
          { label: t('checkbox.likeCount'), value: 'checkLikeCount' },
          { label: t('checkbox.viewCount'), value: 'checkViewCount' },
          { label: t('checkbox.getTime'), value: 'checkGetTime' },
        ],
      }),
    ],
    buttons: [t('labels.confirm'),],
  }), async ({ key, values }) => {
    const { table, field, checkbox } = values;
    uiBuilder.showLoading(t('messages.loading'))
    // 错误处理: 必选项未填则报错
    if (!table || !field || checkbox.length === 0) {
      uiBuilder.message.error(t('messages.error_require_value_is_none'));
      uiBuilder.hideLoading();
      return;
    }
    const view = await table.getViewById(viewId);
    const recordList = await view.getVisibleRecordIdList();
    for (let recordId of RecordList) {
      const linkField = await table.getFieldMetaById(field)
      // 错误处理：字段记录为空
      try {
        videoLink = await getCellValueByRFIDS(recordId, field)
      } catch (error) {
        uiBuilder.message.error(t('messages.error_records_is_empty'));
        continue;
      }
      // 错误处理：链接非快手视频链接
      if (!videoLink.includes('kuaishou')) {
        uiBuilder.message.error(t('messages.error_link_record_is_not_kuaishou'));
        continue;
      }
    }
    // 方法：请求获取视频数据接口
    const getApi = async (videoLink: string) => {
      const apiUrl = `https://kuaishou-shortvideo-data-api.vercel.app/api?url=${encodeURIComponent(videoLink)}`;
      const response = await axios.get(apiUrl);
      return response.data;
    };
  });
}