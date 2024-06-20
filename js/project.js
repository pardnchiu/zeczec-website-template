import { MDViewer } from "https://pardnchiu.github.io/markdown-editor/js/PDMDEditor.min.js";
const pre = `# Markdown Editor

> A web-based Markdown editor with real-time preview designed for editing of md files online. 
> Through modular design, it is easy to integrate into websites for use.
> Must be used in conjunction with [PDExtension-js](https://github.com/pardnchiu/PDExtension-js).

##### 開發者

<a href="https://pardn.io">
<img src="https://pardn.io/image/head-s.jpg" align="left" width="108" height="108" style="margin-right: 0.5rem;">
</a>

### Pardn Chiu 邱敬幃

[![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## Feature
- Built using Html, Css / Sass and JavaScript.
- Rendered using [PDExtension](https://github.com/pardnchiu/PDExtension-js).
- Use [Font Awesome 6](https://fontawesome.com/v6/search) icons and [code-prettify](https://github.com/googlearchive/code-prettify) for code highlighting.
- Preview available [Here](https://pardnchiu.github.io/markdown-editor).

## Include 

\`\`\`HTML
<script src="PDExtension.min.js" copyright="Pardn Ltd"></script>
<script src="PDMDEditor.min.js" copyright="Pardn Ltd"></script>
\`\`\`

\`\`\`JAVASCRIPT
const editor = new MDEditor({
    id: "md-editor",
    style: {
        backgroundColor: "#0000ff1a", 
        color: "#0000ff", 
        placeholder: "Type here ...",
        placeholderColor: "#bfbfbf",
        showRow: 1
    }
});

const viewer = new MDViewer({ 
    id: "md-preview",
    pre: "" /* Default content. Displayed when the editor is empty. */
});

/* Add elements to the view. */
{DOM}.appendChild(editor.body);
{DOM}.appendChild(viewer.body);

/* Set the target viewer for the editor preview. */
editor.viewer = viewer; 


/* Initialize the editor and viewer. */
editor.init();
viewer.init();
\`\`\`

## MDEditor

\`\`\`TYPESCRIPT
interface MDEditor {
    // 初始化編輯器。
    init: (pre: string) => void;
    // 添加標題。
    addHeading: (num: number) => void;
    // 添加粗體。
    addBold: () => void;
    // 添加斜體。
    addItalic: () => void;
    // 添加刪除線。
    addStrikethrough: () => void;
    // 添加下劃線。
    addUnderline: () => void;
    // 添加標記。
    addMarker: () => void;
    // 添加引用區塊。
    addBlockquote: () => void;
    // 添加無序列表。
    addUl: () => void;
    // 添加有序列表。
    addOl: () => void;
    // 添加代碼塊。
    addCode: () => void;
    // 添加超連結。
    addLink: (title: string, href: string) => void;
    // 添加圖片。
    addImage: (src: string, alt: string, title: string) => void;
    // 清空編輯器內容。
    clear: () => void;
    // 輸出為 Markdown 文件。
    downloadMd: () => void;
    // 輸出為 HTML 文件。
    downloadHtml: () => void;
    // 開啟 .md 文件。
    openfile: (file) => void;
};
\`\`\`

## Text

H1
===

H2
---

- # H1
    - ## H2
        - ### H3
            - #### H4
                - ##### H5
                    - ###### H6
- **Bold 1** 
    - <b>Bold 2</b> 
        - <strong>Bold 4</strong>
- *Italic 1* 
    - _Italic 2_ 
        - <i>Italic 3</i> 
            - <em>Italic 4</em>
- ~~Strile Through 1~~ 
    - <s>Strile Through 2</s>
- __Under Line 1__ 
    - <u>Under Line 2</u>
- ==Mark== 
    - <mark>Mark</mark>
- test^test^
- test~test~

##### Hr-1 ---

---

##### Hr-2 ***

***

## Blockquote

> Blockquote-1
> 
>> Blockquote-2
>>> Blockquote-3

## List

1. ol List
2. ol List
3. ol List 0
    1. ol List 1
        1. ol List 2
            1. ol List 3
                1. ol List 4
                    1. ol List 5

- ul List
- ul List
- ul List 0
    - ul List 1
        - ul List 2
             - ul List 3
                - ul List 4
                    - ul List 5

## Code

- inline: \`#Code-1\`

- Block: 
    \`\`\`
    #Code-2
    #Code-2
    #Code-2
    \`\`\`

- Block by Space*4: 

    #Code-3
    #Code-3
    #Code-3

## Link / Image

1. Link-1 https://github.com/pardnchiu/markdown-editor/
2. [Link-2](https://github.com/pardnchiu/markdown-editor/)
3. [Link-3](https://github.com/pardnchiu/markdown-editor/ "Github")
4. Image-1 
    ![](https://joball.tw/img/6mb/album/8cx/U1slgL6oGFU2JXLzHlP0V9G_0ORyWgGS_dZzaEGUx8l1712810618746.jpg?s=1024)
5. Image-2 
    ![名稱](https://joball.tw/img/6mb/album/8cx/U1slgL6oGFU2JXLzHlP0V9G_0ORyWgGS_dZzaEGUx8l1712810618746.jpg?s=1024)
6. Image-3 
    ![名稱](https://joball.tw/img/6mb/album/8cx/U1slgL6oGFU2JXLzHlP0V9G_0ORyWgGS_dZzaEGUx8l1712810618746.jpg?s=1024 "標題")
7. Image-4 (width: 50%, height: 360) 
    ![](https://joball.tw/img/6mb/album/8cx/U1slgL6oGFU2JXLzHlP0V9G_0ORyWgGS_dZzaEGUx8l1712810618746.jpg?s=1024)(50%*360)
8. Image + Link 
    [![](https://joball.tw/img/6mb/album/8cx/U1slgL6oGFU2JXLzHlP0V9G_0ORyWgGS_dZzaEGUx8l1712810618746.jpg?s=1024)](https://github.com/pardnchiu/markdown-editor)

## Contributor

- [Pardn Chiu 邱敬幃](https://linkedin.com/in/pardnchiu)

## License

This source code project is licensed under the GPL-3.0 license.

***

©️ 2023 [Pardn Chiu 邱敬幃](https://www.linkedin.com/in/pardnchiu)`;

document.addEventListener("DOMContentLoaded", _ => {

    let app = new $dom({
        id: "app",
        next: _ => {           
            const viewer = new MDViewer({ 
                pre: pre, 
                delay: 50
            });

            "section.markdown".$._child([
                viewer.body
            ]);

            viewer.init();
        }
    })

});