<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="Rich Text Editor">
        Rich text editor for displaying graphic content like product details, article contents...
      </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <QuillEditor
        ref="quillEditor"
        :options="options"
        v-model:content="myContent"
        style="height: 350px"
        @ready="readyQuill"
        class="quillEditor"
      />
      <template #footer>
        <n-space>
          <n-button @click="addText">Add Text</n-button>
          <n-button @click="addImg">Add Image</n-button>
          <n-button @click="getHtml">Get HTML</n-button>
        </n-space>
      </template>
    </n-card>
    <n-card :bordered="false" class="mt-4 proCard" title="HTML Content">
      <n-input
        v-model:value="myContentHtml"
        type="textarea"
        placeholder="HTML content"
        :autosize="{
          minRows: 3,
          maxRows: 6,
        }"
      />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { QuillEditor } from '@vueup/vue-quill';
  import '@vueup/vue-quill/dist/vue-quill.snow.css';
  const quillEditor = ref();
  const myContent = ref(
    '<h4>Naive Ui Admin is a mid/backend solution based on vue3, vite2, TypeScript</h4>'
  );
  const myContentHtml = ref(
    '<h4>Naive Ui Admin is a mid/backend solution based on vue3, vite2, TypeScript</h4>'
  );

  const options = reactive({
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
        ['image'],
      ],
    },
    theme: 'snow',
    placeholder: 'Enter your content here!',
  });

  function readyQuill() {
    console.log('Quill ready');
  }

  function getHtml() {
    myContentHtml.value = getHtmlVal();
  }

  function addText() {
    const html = getHtmlVal() + 'New added content';
    quillEditor.value.setHTML(html);
  }

  function addImg() {
    const html =
      getHtmlVal() +
      '<img style="width:100px" src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>';
    quillEditor.value.setHTML(html);
  }

  function getHtmlVal() {
    return quillEditor.value.getHTML();
  }
</script>

<style lang="less">
  .ql-toolbar.ql-snow {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #eee;
    margin-top: -10px;
  }

  .ql-container.ql-snow {
    border: none;
  }
</style>
