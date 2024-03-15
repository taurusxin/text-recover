<script setup lang="ts">
import { ref, computed } from 'vue'
import { codecs } from '@/utils/codecs.ts'
import { EncodingConverter } from '@/utils/converter'
import { useOsTheme, darkTheme } from 'naive-ui'

const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : undefined))

const Converter = new EncodingConverter()

const content = ref<string>('')
const result = ref<string[]>([])

const handleTextInput = (text: string) => {
  codecs.forEach(codec => {
    result.value = []
    Converter.convert(codec, text).then(res => {
      result.value?.push(res ?? '[转换失败]')
    })
  })
}
</script>

<template>
  <n-config-provider :theme="theme">
    <div class="container">
      <n-input
        v-model:value="content"
        type="textarea"
        placeholder="请输入待恢复的乱码文本"
        clearable
        class="input"
        @input="handleTextInput"
      />
      <n-table :single-line="false" striped class="table">
        <thead>
          <tr>
            <th class="encode title">原来编码</th>
            <th class="encode title">目标编码</th>
            <th class="result title">结果</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in codecs" :key="index">
            <td>{{ item.origin }}</td>
            <td>{{ item.target }}</td>
            <td>{{ result[index] }}</td>
          </tr>
        </tbody>
      </n-table>
    </div>
  </n-config-provider>
</template>

<style scoped lang="less">
.container {
  padding: 0.8rem;

  .input {
    margin-bottom: 0.8rem;
  }

  .table {
    .encode {
      width: 7rem;
    }

    .title {
      font-weight: bold;
    }
  }
}
</style>
